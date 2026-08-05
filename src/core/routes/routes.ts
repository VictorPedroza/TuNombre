import { HomeIcon } from "lucide-react";

import type { Layout } from "@/shared/types/Routes";

import { AuthLayout, MainLayout } from "@/core/routes/layouts";

import { HomePage } from "@/modules/home";
import { LoginPage } from "@/modules/auth";

export const routes: Layout[] = [
  {
    path: "/",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Inicio", component: HomePage, icon: HomeIcon },
    ],
  },
  {
    path: "/auth",
    private: false,
    component: AuthLayout,
    children: [
      { path: "login", label: "Login", component: LoginPage },
    ],
  },
];
