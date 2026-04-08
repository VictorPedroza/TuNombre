import type React from "react";
import { Link } from "react-router-dom";

export interface HeaderItemProps {
  icon: React.ElementType;
  text: string;
  to: string;
}

/**
 * HeaderItem - Componente de Item do Header
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-04-07
 * @version 1.0.0
 * 
 * @typedef {HeaderItemProps}
 * 
 * @param {Object} params - Propriedades do componente
 * @param {React.ElementType} params.icon - Icone do Lucide Icons 
 * @param {string} params.text - Texto exibido no Item
 * @param {string} params.to - Caminho para o direcionamento do React Router Dom
 * 
 **/
export const HeaderItem = ({ icon: Icon, text, to }: HeaderItemProps) => {
  return (
    <li className="group">
      <Link
        to={to}
        className="text-xl font-semibold text-green-600 flex gap-1 items-center h-6 
               group-hover:text-green-600/70 transition-colors"
      >
        <Icon className="text-red-500 group-hover:text-red-500/70 flex md:hidden" />
        <p>{text}</p>
      </Link>
    </li>
  );
};