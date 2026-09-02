import type { Layout } from "@shared/constants";

import { HeaderItems } from "./HeaderItems";

type DesktopMenuProps = {
  routes: Layout[];
};

export const DesktopMenu = ({ routes }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:flex items-center gap-0.5">
      <HeaderItems
        routes={routes}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xl text-green-600 font-medium transition-all duration-200"
      />
    </nav>
  );
};
