export const MEMORY_PAIRS = [
    { id: "a", emoji: "🍝", label: "Pasta" },
    { id: "b", emoji: "🌹", label: "Rosa" },
    { id: "c", emoji: "🎶", label: "Música" },
    { id: "d", emoji: "✈️", label: "Viagem" },
    { id: "e", emoji: "🕯️", label: "Vela" },
    { id: "f", emoji: "💌", label: "Carta" },
    { id: "g", emoji: "🍷", label: "Vinho" },
    { id: "h", emoji: "🌙", label: "Lua" },
];

export interface MemCard { uid: string; id: string; emoji: string; label: string; flipped: boolean; matched: boolean; }
