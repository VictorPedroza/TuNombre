import { useState } from "react";

import { NavLink } from "react-router-dom";

import { routes } from "@core/routes/routes";

import { AdminHeader, DesktopMenu, MenuButton, MobileMenu } from "./components";

interface HeaderProps {
  admin?: boolean;
  onOpenMenu?: () => void;
}

/**
 * Componente do Cabeçalho da Aplicação
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-07
 * @version 1.1.0
 * 
 **/
export const Header = ({ admin = false, onOpenMenu = () => { } }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  if (admin) {
    return (
      <AdminHeader onOpenMenu={onOpenMenu} />
    )
  }

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="md:text-3xl text-2xl font-bold text-green-600 tracking-tighter hover:opacity-70 transition-opacity cursor-pointer serif italic"
        >
          Tu<span className="text-red-600 serif">Nombre</span>
        </NavLink>
        <DesktopMenu routes={routes} />
        <MenuButton open={open} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu open={open} routes={routes} onClose={() => setOpen(false)} />
    </header>
  );
};
