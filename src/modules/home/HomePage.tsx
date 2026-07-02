import { HomeHero } from "./componentes";

export const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
      <HomeHero />
      <p className="text-foreground-muted text-lg max-w-sm mx-auto leading-relaxed">
        Um espaço só nosso para guardar memórias, planejar sonhos e celebrar
        tudo o que somos juntos.
      </p>
      <div className="mt-16 flex justify-center">
        <div className="relative">
          <div
            className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl border border-primary/15"
            style={{ background: "rgba(200,55,45,0.04)" }}
          />
          <div
            className="absolute -bottom-5 -right-5 w-20 h-20 rounded-3xl border border-accent/15"
            style={{ background: "rgba(61,107,79,0.04)" }}
          />
          <div
            className="relative w-60 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-100/60 border border-rose-200/70 flex flex-col items-center justify-center overflow-hidden"
            style={{
              height: "21rem",
              boxShadow:
                "0 24px 64px rgba(200,55,45,0.10), 0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(200,55,45,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
