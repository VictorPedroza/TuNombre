export const AuthHead = () => {
  return (
    <div className="text-center mb-10">
      <div className="inline-flex items-baseline gap-1.5">
        <span className="text-5xl text-foreground-muted serif italic">
          TuNombre
        </span>
        <span className="text-foreground-muted font-light text-2xl">//</span>
        <span className="text-xl tracking-[0.2em] uppercase font-medium text-foreground-muted">
          Admin
        </span>
      </div>
      <div
        className="mt-4 h-px w-16 mx-auto"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
};
