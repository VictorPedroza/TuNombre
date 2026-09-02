import { useEffect, useState } from "react";

import {
  MAX_GUESSES,
  SOLUTION,
  WORD_LENGTH,
  type GameStatus,
} from "@modules/games/constants";

export const useWordle = () => {
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
  }, [currentGuess, gameStatus, guesses]);

  return {
    guesses,
    currentGuess,
    gameStatus,
    getLetterColor
  };
};
