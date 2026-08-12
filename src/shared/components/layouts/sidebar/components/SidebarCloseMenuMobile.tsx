import { X } from "lucide-react";

export const SidebarCloseMenuMobile = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return (
    <button
      onClick={onClose}
      className="lg:hidden absolute top-4 right-4 text-foreground-muted hover:text-foreground p-1 rounded-md"
      aria-label="Fechar menu"
    >
      <X size={18} />
    </button>
  );
};
