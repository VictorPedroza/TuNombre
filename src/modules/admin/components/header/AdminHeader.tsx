import { Menu } from "lucide-react";

interface HeaderProps {
  onOpenMenu: () => void;
}

export const AdminHeader = ({ onOpenMenu }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-foreground-muted/10 flex items-center gap-4 px-6 flex-shrink-0 bg-[#121212]">
      <button
        className="lg:hidden text-foreground-muted hover:text-background transition-colors"
        onClick={onOpenMenu}
      >
        <Menu size={20} />
      </button>
      <h1 className="text-base font-medium text-background">Overview</h1>
    </header>
  );
};
