import { Heart } from "lucide-react";

import { useMemory } from "@modules/games/hooks"
import { GameHead } from "../head/GameHead";

export const MemoryGame = () => {
    const { flip, moves, won, restart, total, matched, cards } = useMemory();

    return (
        <div className="max-w-lg mx-auto px-6 py-12">
            <GameHead
                title="Jogo da Memória"
                description="Vire as cartas e encontre todos os pares românticos."
            />

            <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-muted-foreground">{matched}/{total} pares encontrados</span>
                <span className="text-xs font-medium text-primary">{moves} tentativas</span>
            </div>

            {won ? (
                <div className="text-center py-12">
                    <div className="text-5xl mb-5">🏆</div>
                    <h2 className="text-2xl text-foreground mb-2 serif">Memória Perfeita!</h2>
                    <p className="text-sm text-muted-foreground mb-8">Você encontrou todos os {total} pares em {moves} tentativas.</p>
                    <button onClick={restart} className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "0 4px 20px rgba(200,55,45,0.25)" }}>Jogar novamente</button>
                </div>
            ) : (
                <>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                        {cards.map(card => (
                            <button key={card.uid} onClick={() => flip(card.uid)}
                                style={{
                                    aspectRatio: "1", borderRadius: 14, fontSize: 26,
                                    transition: "all 0.3s",
                                    background: card.flipped || card.matched ? "#FFFFFF" : "#C8372D",
                                    border: card.matched ? "2px solid #3D6B4F" : card.flipped ? "2px solid rgba(200,55,45,0.25)" : "2px solid #a8241b",
                                    boxShadow: card.flipped || card.matched ? "0 4px 16px rgba(0,0,0,0.08)" : "0 2px 8px rgba(200,55,45,0.2)",
                                    cursor: card.matched ? "default" : "pointer",
                                    transform: card.flipped || card.matched ? "rotateY(0deg)" : "rotateY(0deg)",
                                }}
                                className="flex items-center justify-center">
                                {(card.flipped || card.matched) ? (
                                    <span style={{ fontSize: 28 }}>{card.emoji}</span>
                                ) : (
                                    <Heart size={16} className="text-white/60" fill="rgba(255,255,255,0.3)" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="mt-6 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${(matched / total) * 100}%` }} />
                    </div>
                </>
            )}
        </div>
    );
}