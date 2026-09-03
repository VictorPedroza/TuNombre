import { EPOCH, WORDS } from "@modules/games/constants";

const MS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * Retorna uma chave de data baseada no calendário local.
 *
 * Exemplo:
 * 2026-09-03
 */
export const getDateKey = (): string => {
  const date = new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((part) => String(part).padStart(2, "0"))
    .join("-");
};

/**
 * Calcula a palavra diária.
 *
 * O índice é circular.
 */
export const getDailyWord = (): string => {
  const now = Date.now();

  const daysPassed = Math.floor((now - EPOCH) / MS_IN_DAY);

  const index = ((daysPassed % WORDS.length) + WORDS.length) % WORDS.length;

  return WORDS[index].toUpperCase();
};
