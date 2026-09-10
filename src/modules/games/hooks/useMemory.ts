import { useState } from "react";
import { MEMORY_PAIRS, type MemCard } from "../constants";

export const shuffleMemory = (): MemCard[] => {
  const cards: MemCard[] = MEMORY_PAIRS.flatMap((p) => [
    {
      uid: p.id + "a",
      id: p.id,
      emoji: p.emoji,
      label: p.label,
      flipped: false,
      matched: false,
    },
    {
      uid: p.id + "b",
      id: p.id,
      emoji: p.emoji,
      label: p.label,
      flipped: false,
      matched: false,
    },
  ]);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

export const useMemory = () => {
  const [cards, setCards] = useState<MemCard[]>(shuffleMemory);
  const [selected, setSelected] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const matched = cards.filter((c) => c.matched).length / 2;
  const total = MEMORY_PAIRS.length;
  const won = matched === total;

  function flip(uid: string) {
    if (locked) return;
    const card = cards.find((c) => c.uid === uid);
    if (!card || card.flipped || card.matched) return;
    const next = selected.concat(uid);
    setCards((prev) =>
      prev.map((c) => (c.uid === uid ? { ...c, flipped: true } : c)),
    );

    if (next.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [a, b] = next.map((id) => cards.find((c) => c.uid === id)!);
      if (a.id === b.id) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              next.includes(c.uid) ? { ...c, matched: true } : c,
            ),
          );
          setSelected([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              next.includes(c.uid) ? { ...c, flipped: false } : c,
            ),
          );
          setSelected([]);
          setLocked(false);
        }, 900);
      }
      setSelected([]);
    } else {
      setSelected(next);
    }
  }

  function restart() {
    setCards(shuffleMemory());
    setSelected([]);
    setMoves(0);
    setLocked(false);
  }

  return { moves, flip, won, restart, total, matched, cards };
};
