// header-component.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import type { ReactNode } from "react";

import "./header-component.css";

import { HeaderItem, type HeaderItemProps } from "./HeaderItem";

interface HeaderProps {
  children: ReactNode;
}

interface HeaderType extends React.FC<HeaderProps> {
  Item: React.FC<HeaderItemProps>;
}

const HeaderComponent: HeaderType = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white w-full h-full max-h-14 flex items-center justify-between px-6 py-2 shadow-sm border-b border-black/20 relative z-50">
        {/* Header Title */}
        <div className="h-full flex items-center">
          <Link to="/" className="text-red-500 text-3xl font-bold text-shadow">
            Tu<span className="text-green-600">Nombre</span>
          </Link>
        </div>

        {/* Botão Hambúrguer - Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-green-500 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-green-500 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-green-500 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Header NavBar - Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-6">{children}</ul>
        </nav>
      </header>

      {/* Menu Mobile - Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Mobile - Conteúdo */}
      <nav
        className={`md:hidden fixed top-14 right-0 bottom-0 bg-white w-64 shadow-lg z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {children}
        </ul>
      </nav>
    </>
  );
};

HeaderComponent.Item = HeaderItem;

export const Header = HeaderComponent;