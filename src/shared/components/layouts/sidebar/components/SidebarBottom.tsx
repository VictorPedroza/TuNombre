import { LogOut } from "lucide-react";

export const SidebarBottom = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <div className="px-3 py-5 border-t border-foreground-muted/10 space-y-0.5">
      <div className="flex items-center gap-3 px-3.5 py-2.5">
        <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-green-500 font-medium">A</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-background truncate">Admin</p>
          <p className="text-xs text-foreground-muted truncate">TuNombre</p>
        </div>
      </div>
      <button
        className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm text-foreground-muted hover:text-background transition-colors"
        onClick={handleLogout}
      >
        <LogOut />
        Sair
      </button>
    </div>
  );
};
