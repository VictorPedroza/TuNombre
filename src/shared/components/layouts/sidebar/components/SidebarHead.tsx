export const SidebarHead = () => {
  return (
    <div className="px-6 py-7 border-b border-foreground-muted/10">
      <div className="flex items-baseline gap-1.5">
        <span className="text-lg text-background serif">TuNombre</span>
        <span className="text-foreground-muted text-sm font-light">//</span>
        <span className="text-xs tracking-widest uppercase text-foreground-muted font-medium">
          Admin
        </span>
      </div>
    </div>
  );
};
