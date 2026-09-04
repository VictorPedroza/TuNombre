import { WORD_LENGTH, type LetterStatus } from "@modules/games/constants";

/**
 * Avalia uma tentativa seguindo a lógica real do Wordle,
 * incluindo letras repetidas.
 */
export const evaluateGuess = (
  guess: string,
  solution: string,
): LetterStatus[] => {
  const result: LetterStatus[] = Array(WORD_LENGTH).fill("absent");

  const remainingLetters = solution.split("");

  // Primeira passagem:
  // letras na posição correta.
  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (guess[index] === solution[index]) {
      result[index] = "correct";
      remainingLetters[index] = "";
    }
  }

  // Segunda passagem:
  // letras existentes, mas na posição errada.
  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (result[index] === "correct") {
      continue;
    }

    const letterIndex = remainingLetters.indexOf(guess[index]);

    if (letterIndex !== -1) {
      result[index] = "present";
      remainingLetters[letterIndex] = "";
    }
  }

  return result;
};

export const getLetterStatus = (
  guess: string,
  index: number,
  solution: string,
): LetterStatus => {
  if (index < 0 || index >= guess.length) {
    return "absent";
  }

  const statuses = evaluateGuess(guess.toUpperCase(), solution);

  return statuses[index];
};

export const getLetterColor = (
  letter: string,
  index: number,
  solution: string,
  guess?: string,
): string => {
  if (guess) {
    const status = getLetterStatus(guess, index, solution);

    switch (status) {
      case "correct":
        return "bg-green-600 text-white border-green-600";

      case "present":
        return "bg-red-600 text-white border-red-600";

      default:
        return "bg-foreground text-white border-foreground";
    }
  }

  if (solution[index] === letter.toUpperCase()) {
    return "bg-green-600 text-white border-green-600";
  }

  if (solution.includes(letter.toUpperCase())) {
    return "bg-red-600 text-white border-red-600";
  }

  return "bg-foreground text-white border-foreground";
};
