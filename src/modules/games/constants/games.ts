import type { GamePreview } from ".";
import { SlidingPreview, WordlePreview } from "../preview";
import { MemoryPreview } from "../preview/MemoryPreview";

export const games: GamePreview[] = [
  {
    title: "Wordle",
    description: "Adivinhe a palavra em 6 tentativas.",
    preview: WordlePreview,
    to: "/games/wordle",
  },
  {
    title: "Quebra-Cabeça",
    description: "Reorganize os pedaços para revelar a imagem completa",
    preview: SlidingPreview,
    to: "/games/sliding"
  },
  {
    title: "Jogo da Memória",
    description: "Encontre todos os pares. Cada carta esconde uma surpresa.",
    preview: MemoryPreview,
    to: "/games/memory"
  }
];
