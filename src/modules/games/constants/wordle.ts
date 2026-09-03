export const WORDS = [
  "AFETO", "AGUDO", "ALGOZ", "AMIGO", "AMPLO", "ANDAR", "ANEXO", "ANIMA", "ANUAL", "APOIO",
  "ARDIL", "AREIA", "AROMA", "ARTIGO", "ASILO", "ASSIM", "ASTUTO", "ATLAS", "ATRAIR", "AUTOR",
  "AVISO", "AZUL", "BACIA", "BAILE", "BAIXO", "BALDE", "BALSA", "BANCO", "BANDA", "BANHO",
  "BARCO", "BARRA", "BASTA", "BATOM", "BEBIDA", "BEIRA", "BENTO", "BERÇO", "BESTA", "BICHO",
  "BLUSA", "BOLAS", "BOLSA", "BORDA", "BOTÃO", "BRASA", "BREVE", "BRISA", "BRUTO", "BUCAL",
  "BUSCA", "CABEL", "CABIN", "CAIXA", "CALMO", "CALOR", "CAMPO", "CANAL", "CANTO", "CAPAZ",
  "CARGA", "CARRO", "CARTA", "CASTO", "Causa", "CELAS", "CENTO", "CERTO", "CHAVE", "CHEFE",
  "CHUVA", "CINZA", "CLARO", "CLIMA", "COBRA", "COFRE", "COISA", "CORPO", "CORRE", "CORTAR",
  "CORVO", "COSTA", "CRAVO", "CREDO", "CRIME", "CRISE", "CUIDA", "CULPA", "CURTO", "DADOS"
];

export const EPOCH = new Date("2026-01-01T00:00:00-03:00").getTime();

export const MAX_GUESSES: number = 6;
export const WORD_LENGTH: number = 5;

export type GameStatus = "playing" | "won" | "lost";