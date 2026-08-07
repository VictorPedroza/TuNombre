import { HomeIcon } from "lucide-react";

import type { Layout } from "@/shared/types/Routes";

import { AuthLayout, MainLayout } from "@/core/routes/layouts";

import { HomePage } from "@/modules/home";
import { LoginPage } from "@/modules/auth";
import { AdminLayout } from "./layouts/admin/AdminLayout";
import { AdminPage } from "@/modules/admin/pages/AdminPage";

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
  {
    path: "/admin",
    private: true,
    component: AdminLayout,
    children: [
      { path: "", label: "Dashboard", component: AdminPage },
    ],
  },
];
