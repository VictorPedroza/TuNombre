import { NavLink } from "react-router-dom";
import { useState } from "react";

import { routes } from "@/core/routes/routes";

import { DesktopMenu, MenuButton, MobileMenu } from "./components";

export const Header = () => {
  const [open, setOpen] = useState(false);

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
