import { useEffect, useState, useCallback } from "react";
import { supabase } from "@shared/lib";
import {
  BUCKET_NAME,
  type TimelineEvent,
  TABLE_NAME,
  type UpdadteTimelineEventDTO,
} from "@modules/timeline/constants";

export const useMoments = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Extraímos para um useCallback para poder chamar de fora quando precisar recarregar
  const loadMoments = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from(TABLE_NAME)
        .select("id, date, title, description, emoji, image, created_at")
        .order("created_at", { ascending: true });

      if (fetchError) throw fetchError;

      if (data) {
        const formattedEvents: TimelineEvent[] = data.map((event) => {
          let imageUrl = event.image;
          if (
            event.image &&
            !event.image.startsWith("http") &&
            !event.image.startsWith("/")
          ) {
            const { data: urlData } = supabase.storage
              .from(BUCKET_NAME)
              .getPublicUrl(event.image);
            imageUrl = urlData.publicUrl;
          }
          return {
            id: event.id,
            date: event.date,
            title: event.title,
            description: event.description,
            emoji: event.emoji,
            image: imageUrl,
          };
        });
        setEvents(formattedEvents);
      }
    } catch (err) {
      console.error("Erro ao carregar momentos da timeline:", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadMoments();
  }, [loadMoments]);

  const uploadTimelineImage = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, file);
      if (error) throw error;
      return data.path;
    } catch (err) {
      console.error("Erro ao enviar imagem:", err);
      return null;
    }
  };

  const saveTimelineEvent = async (payload: {
    date: string;
    title: string;
    emoji: string;
    description: string;
    imageUrl: string;
  }): Promise<boolean> => {
    try {
      setLoading(true);
      const { error } = await supabase.from(TABLE_NAME).insert([
        {
          date: payload.date,
          title: payload.title,
          emoji: payload.emoji,
          description: payload.description,
          image: payload.imageUrl,
        },
      ]);
      if (error) throw error;

      return true;
    } catch (err) {
      console.error("Erro ao salvar momento:", err);
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateTimelineEvent = async ({
    id,
    ...updates
  }: UpdadteTimelineEventDTO) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from(TABLE_NAME)
        .update(updates)
        .eq("id", id);

      if (error) throw error;
      return true;
    } catch (err) {
      console.error("Erro ao atualizar momento:", err);
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteTimelineEvent = async ({ id }: { id: string }) => {
    try {
      setLoading(true);

      const { data: event, error: fetchError } = await supabase
        .from(TABLE_NAME)
        .select("image")
        .eq("id", id)
        .single();

      if (fetchError) throw fetchError;

      if (event?.image && !event.image.startsWith("http")) {
        const { error: storageError } = await supabase.storage
          .from(BUCKET_NAME)
          .remove([event.image]);
        if (storageError) throw storageError;
      }

      const { error: deleteError } = await supabase
        .from(TABLE_NAME)
        .delete()
        .eq("id", id);

      if (deleteError) throw deleteError;

      setEvents((currentEvents) => currentEvents.filter((e) => e.id !== id));
      return true;
    } catch (err) {
      console.error("Erro ao deletar momento:", err);
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    saveTimelineEvent,
    updateTimelineEvent,
    deleteTimelineEvent,
    uploadTimelineImage,
    loadMoments, // <--- Exportado para forçar atualização
    loading,
    error,
  };
};
