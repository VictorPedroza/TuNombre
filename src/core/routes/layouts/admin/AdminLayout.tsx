import { AdminHeader } from "@/modules/admin";
import { Sidebar } from "@/shared/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#121212]">
      <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1 lg:ml-60">
        <AdminHeader onOpenMenu={() => setMenuOpen(true)} />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
