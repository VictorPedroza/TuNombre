export * from "./games";
export * from "./wordle/wordle";
export * from "./sliding/sliding";
export * from "./memory/memory";

import type { ComponentType } from "react";

export interface GamePreview {
  title: string;
  description: string;
  preview: ComponentType;
  to: string;
}

export const EPOCH = new Date("2026-01-01T00:00:00-03:00").getTime();

const MS_IN_DAY = 1000 * 60 * 60 * 24;

export const getDateKey = (): string => {
  const date = new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((part) => String(part).padStart(2, "0"))
    .join("-");
};

export const getDailyIndex = (listLength: number): number => {
  if (listLength === 0) return 0;

  const daysPassed = Math.floor((Date.now() - EPOCH) / MS_IN_DAY);

  return ((daysPassed % listLength) + listLength) % listLength;
};
