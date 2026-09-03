import { useEffect, useState } from "react";

import {
  EPOCH,
  MAX_GUESSES,
  WORD_LENGTH,
  WORDS,
  type GameStatus,
} from "@modules/games/constants";

export const useWordle = () => {
  function getDailyWord(): string {
  const today = new Date().getTime();
  const msInDay = 1000 * 60 * 60 * 24;
  
  // Calcula quantos dias se passaram desde a data inicial
  const daysPassed = Math.floor((today - EPOCH) / msInDay);

  // O operador módulo (%) garante que se os dias passarem do tamanho do array,
  // ele volta para o início (comportamento circular seguro).
  const index = daysPassed % WORDS.length;
  
  return WORDS[index].toUpperCase();
}

  const SOLUTION: string = getDailyWord();

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");

  const submitGuess = () => {
    if (currentGuess.length !== WORD_LENGTH) return;

    const newGuesses = [...guesses, currentGuess];

    setGuesses(newGuesses);
    setCurrentGuess("");

    if (currentGuess === SOLUTION) {
      setGameStatus("won");
      return;
    }

    if (newGuesses.length === MAX_GUESSES) {
      setGameStatus("lost");
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (gameStatus !== "playing") return;

    if (event.key === "Enter") {
      submitGuess();
      return;
    }

    if (event.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(event.key)) {
      setCurrentGuess((prev) => {
        if (prev.length >= WORD_LENGTH) return prev;

        return (prev + event.key).toUpperCase();
      });
    }
  };

  const getLetterColor = (letter: string, index: number): string => {
    if (SOLUTION[index] === letter) {
      return "bg-green-600 text-white border-green-600";
    }

    if (SOLUTION.includes(letter)) {
      return "bg-red-500 text-white border-red-500";
    }

    return "bg-foreground text-white border-foreground";
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGuess, gameStatus, guesses]);

  return {
    guesses,
    currentGuess,
    gameStatus,
    getLetterColor,
    SOLUTION
  };
};
