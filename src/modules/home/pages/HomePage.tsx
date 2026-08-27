import { DecorativeCarousel, HomeHero, HomeQuote } from "../components";
import { useGaleryPhotos } from "../hooks/useGaleryPhotos";

/**
 * Página Inicial da Aplicação 
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-03
 * @version 1.2.0
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
      <HomeQuote
        quote="oggi, domani e tra dieci anni."
        description="feito com amor, especialmente para você"
      />
    </div>
  );
};
