import type { Layout } from "@/shared/types/Routes";

import { MainLayout } from "@/core/routes/layouts";
import { HomePage } from "@/modules";
import { HomeIcon } from "lucide-react";

export const routes: Layout[] = [
  {
    path: "/",
    private: false,
    component: MainLayout,
    children: [
        { path: "", label: "Inicio", component: HomePage, icon: HomeIcon }
    ],
  },
];
