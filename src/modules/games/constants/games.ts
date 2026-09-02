import type { GamePreview } from ".";
import { WordlePreview } from "../preview";

export const games: GamePreview[] = [
  {
    title: "Wordle",
    description: "Adivinhe a palavra em 6 tentativas.",
    preview: WordlePreview,
    to: "/games/wordle",
  },
];
