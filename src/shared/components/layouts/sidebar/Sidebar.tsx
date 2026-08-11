import { useMemo } from "react";

import { routes } from "@/core/routes/routes";
import { SidebarBottom, SidebarCloseMenuMobile, SidebarHead, SidebarNavItem } from "./components";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ mobileOpen, onClose }: SidebarProps) => {
  const adminRoutes = useMemo(() => {
    return routes.find((r) => r.path === "/admin")?.children || [];
  }, []);

  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50 flex flex-col h-full bg-[#181818] p-4 border-r border-foreground-muted/10 transition-transform duration-200 ease-in-out
          w-64 lg:w-60 lg:z-30
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <SidebarCloseMenuMobile onClose={onClose} />
        <SidebarHead />

        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          {adminRoutes.map((item) => (
            <SidebarNavItem
              key={item.path}
              label={item.label}
              path={item.path}
              icon={item.icon}
              onClose={onClose}
            />
          ))}
        </nav>
        <SidebarBottom />
      </aside>
    </>
  );
};
