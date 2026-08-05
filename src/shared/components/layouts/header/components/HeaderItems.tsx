import type { Layout } from "@/shared/types/Routes";
import { NavLink } from "react-router-dom";

type HeaderItemsProps = {
  routes: Layout[];
  onClick?: () => void;
  className?: string;
};

export const HeaderItems = ({
  routes,
  onClick,
  className,
}: HeaderItemsProps) => {
  return (
    <>
      {routes.map((layout) => {
        if (layout.private) return null;
        if (layout.path === "/auth") return null;

        return layout.children.map((route) => {
          const Icon = route.icon;

          return (
            <NavLink
              key={route.path}
              to={`${layout.path}/${route.path}`}
              onClick={onClick}
              className={className}
            >
              {Icon && <Icon className="w-6 h-6 text-red-600" />}
              {route.label}
            </NavLink>
          );
        });
      })}
    </>
  );
};
