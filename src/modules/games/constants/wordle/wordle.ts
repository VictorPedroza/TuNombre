export const WORDS = [
  "AFETO",
  "AGUDO",
  "AMOR",
  "AMIGO",
  "AMPLO",
  "ANDAR",
  "ANEXO",
  "ANIMA",
  "ANUAL",
  "APOIO",
  "ARDIL",
  "AREIA",
  "AROMA",
  "ARTIGO",
  "ASILO",
  "ASSIM",
  "ASTUTO",
  "ATLAS",
  "ATRAIR",
  "AUTOR",
  "AVISO",
  "AZUL",
  "BACIA",
  "BAILE",
  "BAIXO",
  "BALDE",
  "BALSA",
  "BANCO",
  "BANDA",
  "BANHO",
  "BARCO",
  "BARRA",
  "BASTA",
  "BATOM",
  "BEBIDA",
  "BEIRA",
  "BENTO",
  "BERÇO",
  "BESTA",
  "BICHO",
  "BLUSA",
  "BOLAS",
  "BOLSA",
  "BORDA",
  "BOTÃO",
  "BRASA",
  "BREVE",
  "BRISA",
  "BRUTO",
  "BUCAL",
  "BUSCA",
  "CABEL",
  "CABIN",
  "CAIXA",
  "CALMO",
  "CALOR",
  "CAMPO",
  "CANAL",
  "CANTO",
  "CAPAZ",
  "CARGA",
  "CARRO",
  "CARTA",
  "CASTO",
  "Causa",
  "CELAS",
  "CENTO",
  "CERTO",
  "CHAVE",
  "CHEFE",
  "CHUVA",
  "CINZA",
  "CLARO",
  "CLIMA",
  "COBRA",
  "COFRE",
  "COISA",
  "CORPO",
  "CORRE",
  "CORTAR",
  "CORVO",
  "COSTA",
  "CRAVO",
  "CREDO",
  "CRIME",
  "CRISE",
  "CUIDA",
  "CULPA",
  "CURTO",
  "DADOS",
];

export const EPOCH = new Date("2026-01-01T00:00:00-03:00").getTime();

export const WORD_LENGTH: number = 5;
export const MAX_GUESSES: number = 6;
export const MAX_RESTARTS: number = 3;

export type GameStatus = "playing" | "won" | "lost";
export type LetterStatus = "correct" | "present" | "absent";

export interface WordleDailyGame {
  date: string;
  word: string;
  guesses: string[];
  currentGuess: string;
  gameStatus: GameStatus;
}

export interface SavedDailyGame extends WordleDailyGame {
  restartsUsed: number;
}

export interface WordleHistoryEntry {
  word: string;
  guesses: number;
  status: Exclude<GameStatus, "playing">;
  playedAt: string;
}

export const WORDLE_HISTORY_STORAGE_KEY = "wordle-history";
export const WORDLE_DAILY_GAME_STORAGE_KEY = "wordle-daily-game";
export const WORDLE_LAST_RESULT_STORAGE_KEY = "wordle-last-result";

export const piece = "absolute w-4 h-4 rounded-[3px] shadow-sm z-10";
