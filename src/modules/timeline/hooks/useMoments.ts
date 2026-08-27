import { useEffect, useState } from "react";
import { supabase } from "@/shared/lib";
import {
  BUCKET_NAME,
  type TimelineEvent,
  TABLE_NAME,
} from "@timeline/constants";

/**
 * Hook para gerenciar os momentos especiais na linha do tempo
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-14
 * @version 1.4.0
 **/
export const useMoments = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadMoments() {
      try {
        setLoading(true);

        const { data, error: fetchError } = await supabase
          .from("timeline_events")
          .select("id, date, title, description, emoji, image, created_at")
          .order("created_at", { ascending: true });

        if (fetchError) throw fetchError;

        if (data && isMounted) {
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
        if (isMounted) {
          console.error("Erro ao carregar momentos da timeline:", err);
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadMoments();

    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Faz upload de uma imagem para o Bucket do Supabase Storage
   */
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

  const saveTimelineEvent = async ({
    date,
    title,
    emoji,
    description,
    imageUrl,
  }: {
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
          date,
          title,
          emoji,
          description,
          image: imageUrl,
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

  return {
    events,
    saveTimelineEvent,
    uploadTimelineImage,
    loading,
    error,
  };
};
