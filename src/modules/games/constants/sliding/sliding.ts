export const generateShuffledPuzzle = (): number[] => {
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