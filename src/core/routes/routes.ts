// Icons
import { Gamepad, HomeIcon, LayoutDashboard, TimerIcon } from "lucide-react";

// Types
import type { Layout } from "@/shared/types";

// Layouts
import { AdminLayout, AuthLayout, MainLayout } from "@/core/routes/layouts";

// Pages
import { HomePage } from "@/modules/home";
import { LoginPage } from "@/modules/auth";
import { AdminTimelinePage, TimelinePage } from "@/modules/timeline";
import { OverviewPage } from "@/modules/admin";
import { GamePage, WordleGame } from "@/modules/games";

/**
 * Constante que define as rotas da aplicação, incluindo layouts e páginas.
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-09-02
 * @version 1.1.0
 * 
 **/
export const routes: Layout[] = [
  {
    path: "",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Inicio", component: HomePage, icon: HomeIcon },
      {
        path: "timeline",
        label: "História",
        component: TimelinePage,
        icon: TimerIcon,
      },
    ],
  },
  {
    path: "/auth",
    private: false,
    component: AuthLayout,
    children: [{ path: "login", label: "Login", component: LoginPage }],
  },
  {
    path: "/admin",
    private: true,
    component: AdminLayout,
    children: [
      {
        path: "",
        label: "Overview",
        component: OverviewPage,
        icon: LayoutDashboard,
      },
      {
        path: "timeline",
        label: "Timeline",
        component: AdminTimelinePage,
        icon: TimerIcon,
      },
    ],
  },
  {
    path: "/games",
    private: false,
    component: MainLayout,
    children: [
      { path: "", label: "Jogos", component: GamePage, icon: Gamepad },
      {
        path: "wordle",
        label: "Wordle",
        component: WordleGame,
        icon: Gamepad,
        navigation: false,
      },
    ],
  },
];
