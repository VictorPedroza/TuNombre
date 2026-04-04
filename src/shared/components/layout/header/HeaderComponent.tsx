import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import "./header-component.css";

import { HeaderItem, type HeaderItemProps } from "./HeaderItem";

interface HeaderProps {
  children: ReactNode
}

interface HeaderType extends React.FC<HeaderProps> {
  Item: React.FC<HeaderItemProps>
}

const HeaderComponent: HeaderType = ({ children }) => {
  return (
    <header className="bg-white w-full h-full max-h-14 flex items-center px-6 py-2 shadow-sm border-b border-black/20">
      {/* Header Title */}
      <div className="w-full h-full flex items-center">
        <Link to="/" className="text-red-500 text-3xl font-bold text-shadow">
          Tu<span className="text-green-600">Nombre</span>
        </Link>
      </div>

      {/* Header NabBar */}
      <nav className="w-full h-full flex items-center justify-end">
        <ul className="flex gap-6">
          { children }
        </ul>
      </nav>
    </header>
  );
};

HeaderComponent.Item = HeaderItem;

export const Header = HeaderComponent;
