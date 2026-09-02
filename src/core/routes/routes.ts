import { Gamepad, HomeIcon, LayoutDashboard, TimerIcon } from "lucide-react";

import type { Layout } from "@/shared/types/Routes";

import { AdminLayout, AuthLayout, MainLayout } from "@/core/routes/layouts";

import { HomePage } from "@/modules/home";
import { LoginPage } from "@/modules/auth";
import { AdminTimelinePage, TimelinePage } from "@/modules/timeline";
import { OverviewPage } from "@/modules/admin";
import { GamePage } from "@/modules/games";

export const routes: Layout[] = [
  {
    path: "",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Inicio", component: HomePage, icon: HomeIcon },
      { path: "timeline", label: "História", component: TimelinePage, icon: TimerIcon },
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
      { path: "", label: "Overview", component: OverviewPage, icon: LayoutDashboard },
      { path: "timeline", label: "Timeline", component: AdminTimelinePage, icon: TimerIcon },
    ],
  },
  {
    path: "/games",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Jogos", component: GamePage, icon: Gamepad}
    ]
  }
];
