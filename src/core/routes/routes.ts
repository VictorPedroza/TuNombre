import { HomeIcon, LayoutDashboard, TimerIcon } from "lucide-react";

import type { Layout } from "@/shared/types/Routes";

import { AdminLayout, AuthLayout, MainLayout } from "@/core/routes/layouts";

import { HomePage } from "@/modules/home";
import { LoginPage } from "@/modules/auth";
import { HistoryPage } from "@/modules/history";
import { AdminPage } from "@/modules/admin";

export const routes: Layout[] = [
  {
    path: "",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Inicio", component: HomePage, icon: HomeIcon },
      { path: "historia", label: "História", component: HistoryPage, icon: TimerIcon },
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
      { path: "", label: "Overview", component: AdminPage, icon: LayoutDashboard }
    ],
  },
];
