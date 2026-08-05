import { DecorativeCarousel, HomeHero } from "../components";

export const HomePage = () => {
  const photos = [
    { src: "example.jpg", alt: "exaple" },
    { src: "example.jpg", alt: "exaple2" },
    { src: "example.jpg", alt: "exaple3" },
    { src: "example.jpg", alt: "exaple4" },
    { src: "example.jpg", alt: "exaple5" },
    { src: "example.jpg", alt: "exaple6" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
      <HomeHero />
      <p className="text-foreground-muted text-lg max-w-sm mx-auto leading-relaxed">
        Um espaço só nosso para guardar memórias, planejar sonhos e celebrar
        tudo o que somos juntos.
      </p>

      <DecorativeCarousel images={photos} />

      <section className="max-w-5xl mx-auto px-6 mb-14 mt-32">
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed serif italic" style={{ fontWeight: 400 }}>
            "oggi, domani e tra dieci anni."
          </p>
          <p className="text-muted-foreground text-sm mt-5 tracking-wide">feito com amor, especialmente para você</p>
        </div>
      </section>
    </div>
  );
};
