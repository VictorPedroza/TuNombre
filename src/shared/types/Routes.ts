import type { ComponentType } from "react";

type Route = {
  path: string;
  label: string;
  component: ComponentType;
  icon: ComponentType<{ className: string }>;
};

export type Layout = {
  path: string;
  private: boolean;
  component: ComponentType;
  children: Route[];
};