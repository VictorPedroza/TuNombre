import type { GamePreview } from ".";
import { SlidingPreview, WordlePreview } from "../preview";

export const games: GamePreview[] = [
  {
    title: "Wordle",
    description: "Adivinhe a palavra em 6 tentativas.",
    preview: WordlePreview,
    to: "/games/wordle",
  },
  {
    title: "Puzzle Foto",
    description: "Reorganize os pedaços para revelar a imagem completa",
    preview: SlidingPreview,
    to: "/games/sliding"
  }
];
