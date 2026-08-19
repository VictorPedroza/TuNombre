import { DecorativeCarousel, HomeHero } from "../components";
import { useGaleryPhotos } from "../hooks/useGaleryPhotos";

/**
 * Página Inicial da Aplicação 
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-03
 * @version 1.1.0
 * 
 **/
export const HomePage = () => {
  const { loading, photos } = useGaleryPhotos();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
      <HomeHero />
      <p className="text-foreground-muted text-lg max-w-sm mx-auto leading-relaxed">
        Um espaço só nosso para guardar memórias, planejar sonhos e celebrar
        tudo o que somos juntos.
      </p>

      {loading ? (
        <div className="py-12 text-muted-foreground animate-pulse">
          Carregando memórias...
        </div>
      ) : (
        <DecorativeCarousel images={photos} />
      )}
      <section className="max-w-5xl mx-auto px-6 mb-14 mt-14">
        <div
          className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
        >
          <p
            className="text-2xl md:text-3xl text-foreground leading-relaxed serif italic"
            style={{ fontWeight: 400 }}
          >
            "oggi, domani e tra dieci anni."
          </p>
          <p className="text-muted-foreground text-sm mt-5 tracking-wide">
            feito com amor, especialmente para você
          </p>
        </div>
      </section>
    </div>
  );
};
