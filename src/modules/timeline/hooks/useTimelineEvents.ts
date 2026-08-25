import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/shared/lib";
import { BUCKET_NAME, type TimelineEvent } from "../types";

/**
 * Hook para buscar eventos da timeline no Supabase
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-14
 * @version 1.3.0
 **/
export const useTimelineEvents = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  // Permite recarregar manualmente caso necessário
  const refetch = useCallback(() => {
    setReloadKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadTimelineEvents() {
      try {
        setLoading(true);

        const { data, error: fetchError } = await supabase
          .from("timeline_events")
          .select("id, date, title, description, emoji, image, created_at, sort_order")
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
              date: event.date,
              title: event.title,
              description: event.description,
              sort_order: event.sort_order,
              emoji: event.emoji,
              image: imageUrl,
            };
          });

          setEvents(formattedEvents);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Erro ao carregar eventos da timeline:", err);
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadTimelineEvents();

    return () => {
      isMounted = false;
    };
  }, [reloadKey]);

  return { events, loading, error, refetch };
};
