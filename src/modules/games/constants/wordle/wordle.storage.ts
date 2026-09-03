import {
  MAX_GUESSES,
  WORD_LENGTH,
  WORDLE_DAILY_GAME_STORAGE_KEY,
  WORDLE_HISTORY_STORAGE_KEY,
  WORDLE_LAST_RESULT_STORAGE_KEY,
  type SavedDailyGame,
  type WordleHistoryEntry,
} from "@modules/games/constants";

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

export const loadDailyGame = (
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

    if (parsed.date !== today || parsed.word !== solution) {
      return null;
    }

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

export const saveDailyGame = (game: SavedDailyGame): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(WORDLE_DAILY_GAME_STORAGE_KEY, JSON.stringify(game));
};

export const loadHistory = (): WordleHistoryEntry[] => {
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

export const saveResult = (
  entry: WordleHistoryEntry,
  today: string,
): void => {
  if (typeof window === "undefined") {
    return;
  }

  const history = loadHistory();

  const alreadyRecorded = history.some(
    (item) =>
      item.word === entry.word &&
      item.status === entry.status &&
      item.guesses === entry.guesses &&
      item.playedAt.slice(0, 10) ===
        entry.playedAt.slice(0, 10),
  );

  if (alreadyRecorded) {
    return;
  }

  const updatedHistory = [...history, entry];

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
};



