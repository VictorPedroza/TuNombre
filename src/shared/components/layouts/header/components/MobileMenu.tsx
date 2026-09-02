import type { Layout } from "@shared/constants";

import { HeaderItems } from "./HeaderItems";

type MobileMenuProps = {
  open: boolean;
  routes: Layout[];
  onClose?: () => void;
};

export const MobileMenu = ({ open, routes, onClose }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-border bg-background">
      <HeaderItems
        routes={routes}
        onClick={onClose}
        className="flex items-center gap-3 w-full px-6 py-4 text-lg font-medium text-green-600 border-b border-border last:border-b-0"
      />
    </div>
  );
};
