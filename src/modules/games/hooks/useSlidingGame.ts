import { useEffect, useState } from "react";

import { supabase } from "@shared/lib";
import { getDailyIndex, PUZZLE_IMG } from "@modules/games/constants";

// Função Utilitária
const generateShuffledPuzzle = (): number[] => {
  const s = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  for (let i = 0; i < 200; i++) {
    const ei = s.indexOf(0); // Indice Vazio
    const er = Math.floor(ei / 3); // Linha Vazia
    const ec = ei % 3; // Coluna Vazia
    const moves: number[] = [];
    if (er > 0) moves.push(ei - 3);
    if (er < 2) moves.push(ei + 3);
    if (ec > 0) moves.push(ei - 1);
    if (ec < 2) moves.push(ei + 1);
    const m = moves[Math.floor(Math.random() * moves.length)];
    [s[ei], s[m]] = [s[m], s[ei]];
  }
  return s;
};

export const useSlidingGame = () => {
  const [tiles, setTiles] = useState<number[]>(() => generateShuffledPuzzle());
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [puzzleImage, setPuzzleImage] = useState(PUZZLE_IMG);

  useEffect(() => {
    let active = true;

    async function fetchPuzzleImage() {
      const { data, error } = await supabase
        .from("galery")
        .select("file_path")
        .order("created_at", { ascending: false })
        .order("file_path", { ascending: true });

      if (!active || error || !data?.length) return;

      const photo = data[getDailyIndex(data.length)];
      const { data: urlData } = supabase.storage
        .from("galery")
        .getPublicUrl(photo.file_path);

      if (active && urlData.publicUrl) setPuzzleImage(urlData.publicUrl);
    }

    fetchPuzzleImage();

    return () => {
      active = false;
    };
  }, []);

  function moveTile(index: number) {
    if (won) return;
    const ei = tiles.indexOf(0); // Indice Vazio
    const er = Math.floor(ei / 3); // Linha Vazia
    const ec = ei % 3; // Coluna Vazia
    const tr = Math.floor(index / 3); // Linha Alvo
    const tc = index % 3; // Coluna Alvo

    // Verifica se a peça clicada é adjacente ao espaço vazio
    const adj =
      (Math.abs(tr - er) === 1 && tc === ec) ||
      (Math.abs(tc - ec) === 1 && tr === er);
    if (!adj) return;

    const nt = [...tiles]; // Busca o caminho
    [nt[ei], nt[index]] = [nt[index], nt[ei]];

    setTiles(nt);
    setMoves((move) => move + 1);

    // Checa condição de vitória
    if (nt.every((v, i) => (i === 8 ? v === 0 : v === i + 1))) setWon(true);
  }

  // Reinicia o jogo
  function shuffle() {
    setTiles(generateShuffledPuzzle());
    setMoves(0);
    setWon(false);
  }

  return { tiles, moves, won, puzzleImage, moveTile, shuffle };
};
