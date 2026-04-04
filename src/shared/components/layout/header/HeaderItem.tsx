import type React from "react";
import { Link } from "react-router-dom";

export interface HeaderItemProps {
    icon: React.ElementType;
    text: string;
    to: string;
}

export const HeaderItem = ({ icon: Icon, text, to }: HeaderItemProps) => {
  return (
    <li className="group">
      <Link
        to={to}
        className="text-xl font-semibold text-green-600 flex gap-1 items-center h-6 
               group-hover:text-green-600/70 transition-colors"
      >
        <Icon className="text-red-500 group-hover:text-red-500/70" />
        <p>{text}</p>
      </Link>
    </li>
  );
};
