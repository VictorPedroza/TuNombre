import { useEffect, useState } from "react";
import { supabase } from "@/shared/lib/supabase/supabase";

export interface Photo {
  src: string;
  alt: string;
}

/**
 * Hook para buscar fotos da galeria no Supabase
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-05
 * @version 1.0.0
 * 
 **/
export const useGaleryPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);

        const { data, error: fetchError } = await supabase
          .from("galery")
          .select("title, file_path")
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;

        if (data) {
          const formattedPhotos = data.map((photo) => {
            const { data: urlData } = supabase.storage
              .from("galery")
              .getPublicUrl(photo.file_path);

            return {
              src: urlData.publicUrl,
              alt: photo.title || "Foto da galeria",
            };
          });

          setPhotos(formattedPhotos);
        }
      } catch (err) {
        console.error("Erro ao carregar as fotos do Supabase:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};
