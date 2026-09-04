import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from "react";

import {
  MAX_GUESSES,
  MAX_RESTARTS,
  WORD_LENGTH,
  type GameStatus,
  type WordleHistoryEntry,
} from "@modules/games/constants";

import {
  getDailyWord,
  getDateKey,
  getLetterColor as getWordleLetterColor,
  getLetterStatus as getWordleLetterStatus,
  loadDailyGame,
  loadHistory,
  saveDailyGame,
  saveResult as  saveWordleResult
} from "@modules/games/constants/wordle/";


export const useWordle = () => {
  const solution = useMemo(() => getDailyWord(), []);
  const today = useMemo(() => getDateKey(), []);
  const initialGame = useMemo(
    () => loadDailyGame(today, solution),
    [today, solution],
  );

  const [guesses, setGuesses] = useState<string[]>(initialGame?.guesses ?? []);
  const [currentGuess, setCurrentGuess] = useState<string>(initialGame?.currentGuess ?? "");
  const [gameStatus, setGameStatus] = useState<GameStatus>(initialGame?.gameStatus ?? "playing");
  const [restartsUsed, setRestartsUsed] = useState<number>(initialGame?.restartsUsed ?? 0);
  const [history, setHistory] = useState<WordleHistoryEntry[]>(loadHistory);

  const saveResult = useCallback(
    (status: Exclude<GameStatus, "playing">, guessesCount: number) => {
      const entry: WordleHistoryEntry = {
        word: solution,
        guesses: guessesCount,
        status,
        playedAt: new Date().toISOString(),
      };

      saveWordleResult(entry, today);

      setHistory(loadHistory());
    },
    [solution, today],
  );

  const submitGuess = useCallback(() => {
    if (gameStatus !== "playing") {
      return;
    }

    if (currentGuess.length !== WORD_LENGTH) {
      return;
    }

    const normalizedGuess = currentGuess.toUpperCase();

    const newGuesses = [...guesses, normalizedGuess];

    setGuesses(newGuesses);
    setCurrentGuess("");

    if (normalizedGuess === solution) {
      setGameStatus("won");

      saveResult("won", newGuesses.length);

      return;
    }

    if (newGuesses.length >= MAX_GUESSES) {
      setGameStatus("lost");

      saveResult("lost", newGuesses.length);
    }
  }, [currentGuess, gameStatus, guesses, saveResult, solution]);

  const restartGame = useCallback(() => {
    if (restartsUsed >= MAX_RESTARTS) {
      return;
    }

    if (gameStatus === "playing") {
      return;
    }

    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");

    setRestartsUsed((previous) => previous + 1);
  }, [gameStatus, restartsUsed]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (gameStatus !== "playing") {
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();

        submitGuess();

        return;
      }

      if (event.key === "Backspace") {
        event.preventDefault();

        setCurrentGuess((previous) => previous.slice(0, -1));

        return;
      }

      if (/^[a-zA-ZÀ-ÿ]$/.test(event.key)) {
        event.preventDefault();

        setCurrentGuess((previous) => {
          if (previous.length >= WORD_LENGTH) {
            return previous;
          }

          return (previous + event.key).toUpperCase();
        });
      }
    },
    [gameStatus, submitGuess],
  );

  useEffect(() => {
    saveDailyGame({
      date: today,
      word: solution,
      guesses,
      currentGuess,
      gameStatus,
      restartsUsed,
    });
  }, [currentGuess, gameStatus, guesses, restartsUsed, solution, today]);

  const getLetterStatus = useCallback(
    (guess: string, index: number) =>
      getWordleLetterStatus(guess, index, solution),
    [solution],
  );

  const getLetterColor = useCallback(
    (letter: string, index: number, guess?: string) =>
      getWordleLetterColor(letter, index, solution, guess),
    [solution],
  );

  const canRestart = gameStatus !== "playing" && restartsUsed < MAX_RESTARTS;

  return {
    guesses,
    currentGuess,
    gameStatus,
    history,
    solution,
    SOLUTION: solution,
    restartsUsed,
    maxRestarts: MAX_RESTARTS,
    canRestart,
    maxGuesses: MAX_GUESSES,
    wordLength: WORD_LENGTH,
    submitGuess,
    restartGame,
    handleKeyDown,
    setCurrentGuess,
    getLetterStatus,
    getLetterColor,
  };
};
