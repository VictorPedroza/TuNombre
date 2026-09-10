import { getDailyIndex } from "..";
import { WORDS } from "./wordle";

export const getDailyWord = (): string => {
  const index = getDailyIndex(WORDS.length);

  return WORDS[index].toUpperCase();
};
