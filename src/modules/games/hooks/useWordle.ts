import { useCallback, useEffect, useMemo, useState } from "react";

import {
  EPOCH,
  MAX_GUESSES,
  MAX_RESTARTS,
  WORD_LENGTH,
  WORDLE_DAILY_GAME_STORAGE_KEY,
  WORDLE_HISTORY_STORAGE_KEY,
  WORDLE_LAST_RESULT_STORAGE_KEY,
  WORDS,
  type GameStatus,
  type LetterStatus,
  type SavedDailyGame,
  type WordleHistoryEntry,
} from "@modules/games/constants";

const MS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * Retorna uma chave de data baseada no calendário local.
 *
 * Exemplo:
 * 2026-09-03
 */
const getDateKey = (): string => {
  const date = new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((part) => String(part).padStart(2, "0"))
    .join("-");
};

/**
 * Calcula a palavra diária.
 *
 * O índice é circular, portanto quando chegar ao final de WORDS,
 * volta para o início.
 */
const getDailyWord = (): string => {
  const now = Date.now();

  const daysPassed = Math.floor((now - EPOCH) / MS_IN_DAY);

  const index = ((daysPassed % WORDS.length) + WORDS.length) % WORDS.length;

  return WORDS[index].toUpperCase();
};

/**
 * Valida se o valor possui uma estrutura mínima de jogo diário.
 *
 * Como localStorage pode ser alterado manualmente pelo usuário,
 * nunca devemos confiar diretamente no JSON salvo.
 */
const isValidDailyGame = (value: unknown): value is SavedDailyGame => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const game = value as Partial<SavedDailyGame>;

  if (typeof game.date !== "string") {
    return false;
  }

  if (typeof game.word !== "string") {
    return false;
  }

  if (!Array.isArray(game.guesses)) {
    return false;
  }

  if (typeof game.currentGuess !== "string") {
    return false;
  }

  if (
    game.gameStatus !== "playing" &&
    game.gameStatus !== "won" &&
    game.gameStatus !== "lost"
  ) {
    return false;
  }

  if (
    typeof game.restartsUsed !== "number" ||
    !Number.isInteger(game.restartsUsed) ||
    game.restartsUsed < 0
  ) {
    return false;
  }

  if (game.guesses.length > MAX_GUESSES) {
    return false;
  }

  if (game.currentGuess.length > WORD_LENGTH) {
    return false;
  }

  if (
    !game.guesses.every(
      (guess) => typeof guess === "string" && guess.length === WORD_LENGTH,
    )
  ) {
    return false;
  }

  return true;
};

/**
 * Carrega o estado diário salvo.
 */
const loadDailyGame = (
  today: string,
  solution: string,
): SavedDailyGame | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = localStorage.getItem(WORDLE_DAILY_GAME_STORAGE_KEY);

  if (!saved) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(saved);

    if (!isValidDailyGame(parsed)) {
      localStorage.removeItem(WORDLE_DAILY_GAME_STORAGE_KEY);

      return null;
    }

    /**
     * Se o estado pertence a outro dia ou outra solução,
     * começamos uma nova partida.
     */
    if (parsed.date !== today || parsed.word !== solution) {
      return null;
    }

    /**
     * Corrige estados inconsistentes.
     */
    const lastGuess = parsed.guesses[parsed.guesses.length - 1];

    const isValidWon = parsed.gameStatus === "won" && lastGuess === solution;

    const isValidLost =
      parsed.gameStatus === "lost" &&
      parsed.guesses.length >= MAX_GUESSES &&
      lastGuess !== solution;

    return {
      ...parsed,
      gameStatus: isValidWon || isValidLost ? parsed.gameStatus : "playing",
    };
  } catch {
    localStorage.removeItem(WORDLE_DAILY_GAME_STORAGE_KEY);

    return null;
  }
};

/**
 * Carrega o histórico.
 */
const loadHistory = (): WordleHistoryEntry[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem(WORDLE_HISTORY_STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      localStorage.removeItem(WORDLE_HISTORY_STORAGE_KEY);

      return [];
    }

    return parsed.filter((entry): entry is WordleHistoryEntry => {
      if (!entry || typeof entry !== "object") {
        return false;
      }

      const item = entry as Partial<WordleHistoryEntry>;

      return (
        typeof item.word === "string" &&
        typeof item.guesses === "number" &&
        (item.status === "won" || item.status === "lost") &&
        typeof item.playedAt === "string"
      );
    });
  } catch {
    localStorage.removeItem(WORDLE_HISTORY_STORAGE_KEY);

    return [];
  }
};

/**
 * Avalia uma tentativa seguindo a lógica real do Wordle,
 * incluindo letras repetidas.
 */
const evaluateGuess = (guess: string, solution: string): LetterStatus[] => {
  const result: LetterStatus[] = Array(WORD_LENGTH).fill("absent");

  const remainingLetters = solution.split("");

  /**
   * Primeira passagem:
   * encontra letras na posição correta.
   */
  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (guess[index] === solution[index]) {
      result[index] = "correct";

      remainingLetters[index] = "";
    }
  }

  /**
   * Segunda passagem:
   * encontra letras existentes em posição incorreta.
   */
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

export const useWordle = () => {
  /**
   * A solução e a data são calculadas uma vez por montagem.
   */
  const solution = useMemo(() => getDailyWord(), []);

  const today = useMemo(() => getDateKey(), []);

  const initialGame = useMemo(
    () => loadDailyGame(today, solution),
    [today, solution],
  );

  const [guesses, setGuesses] = useState<string[]>(initialGame?.guesses ?? []);

  const [currentGuess, setCurrentGuess] = useState<string>(
    initialGame?.currentGuess ?? "",
  );

  const [gameStatus, setGameStatus] = useState<GameStatus>(
    initialGame?.gameStatus ?? "playing",
  );

  const [restartsUsed, setRestartsUsed] = useState<number>(
    initialGame?.restartsUsed ?? 0,
  );

  const [history, setHistory] = useState<WordleHistoryEntry[]>(loadHistory);

  /**
   * Salva o resultado da partida.
   */
  const saveResult = useCallback(
    (status: Exclude<GameStatus, "playing">, guessesCount: number) => {
      const entry: WordleHistoryEntry = {
        word: solution,
        guesses: guessesCount,
        status,
        playedAt: new Date().toISOString(),
      };

      setHistory((previousHistory) => {
        /**
         * Evita registrar o mesmo resultado várias vezes
         * para a mesma partida diária.
         */
        const alreadyRecorded = previousHistory.some(
          (item) =>
            item.word === solution &&
            item.status === status &&
            item.guesses === guessesCount &&
            item.playedAt &&
            item.playedAt.slice(0, 10) === entry.playedAt.slice(0, 10),
        );

        if (alreadyRecorded) {
          return previousHistory;
        }

        const updatedHistory = [...previousHistory, entry];

        if (typeof window !== "undefined") {
          localStorage.setItem(
            WORDLE_HISTORY_STORAGE_KEY,
            JSON.stringify(updatedHistory),
          );

          localStorage.setItem(
            WORDLE_LAST_RESULT_STORAGE_KEY,
            JSON.stringify({
              ...entry,
              date: today,
            }),
          );
        }

        return updatedHistory;
      });
    },
    [solution, today],
  );

  /**
   * Envia uma tentativa.
   */
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

  /**
   * Reinicia a partida, respeitando MAX_RESTARTS.
   */
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

  /**
   * Processa o teclado físico.
   */
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

  /**
   * Registra o listener do teclado.
   */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  /**
   * Persiste o estado atual da partida.
   */
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const dailyGame: SavedDailyGame = {
      date: today,
      word: solution,
      guesses,
      currentGuess,
      gameStatus,
      restartsUsed,
    };

    localStorage.setItem(
      WORDLE_DAILY_GAME_STORAGE_KEY,
      JSON.stringify(dailyGame),
    );
  }, [currentGuess, gameStatus, guesses, restartsUsed, solution, today]);

  /**
   * Retorna o estado visual de uma letra.
   *
   * A função usa a avaliação completa da tentativa,
   * portanto funciona corretamente com letras repetidas.
   */
  const getLetterStatus = useCallback(
    (guess: string, index: number): LetterStatus => {
      if (index < 0 || index >= guess.length) {
        return "absent";
      }

      const statuses = evaluateGuess(guess.toUpperCase(), solution);

      return statuses[index];
    },
    [solution],
  );

  /**
   * Mantém compatibilidade com uma UI que já espera
   * uma classe CSS em getLetterColor().
   */
  const getLetterColor = useCallback(
    (letter: string, index: number, guess?: string): string => {
      /**
       * Se a tentativa completa for informada,
       * usa o algoritmo correto de letras repetidas.
       */
      if (guess) {
        const status = getLetterStatus(guess, index);

        switch (status) {
          case "correct":
            return "bg-green-600 text-white border-green-600";

          case "present":
            return "bg-red-600 text-white border-red-600";

          default:
            return "bg-foreground text-white border-foreground";
        }
      }

      /**
       * Fallback para compatibilidade com a assinatura
       * antiga da função.
       */
      if (solution[index] === letter.toUpperCase()) {
        return "bg-green-600 text-white border-green-600";
      }

      if (solution.includes(letter.toUpperCase())) {
        return "bg-red-600 text-white border-red-600";
      }

      return "bg-foreground text-white border-foreground";
    },
    [getLetterStatus, solution],
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
    getLetterStatus,
    getLetterColor,
  };
};
