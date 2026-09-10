import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { useMemory } from "@modules/games/hooks";
import { GameHead } from "../head/GameHead";
import { MemoryCompletion } from "./components/MemoryCompletion";

export const MemoryGame = () => {
    const { flip, moves, won, restart, total, matched, cards } = useMemory();
    const [isCompletionOpen, setIsCompletionOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (won) setIsCompletionOpen(true);
    }, [won]);

    return (
        <div className="mx-auto max-w-lg px-6 py-12">
            <GameHead
                title="Jogo da Memória"
                description="Vire as cartas e encontre todos os pares românticos."
            />

            <div className="mb-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                    {matched}/{total} pares encontrados
                </span>

                <span className="text-xs font-medium text-primary">
                    {moves} tentativas
                </span>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
                {cards.map((card) => {
                    const isVisible = card.flipped || card.matched;

                    return (
                        <button
                            key={card.uid}
                            type="button"
                            onClick={() => flip(card.uid)}
                            disabled={card.matched}
                            className={`
                                        aspect-square
                                        rounded-[14px]
                                        flex items-center justify-center
                                        text-[26px]
                                        transition-all duration-300
                                        ${isVisible
                                            ? `
                                                bg-white
                                                border-2
                                                ${card.matched
                                                ? "border-[#3D6B4F]"
                                                : "border-primary/25"
                                            }
                                                shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                                            `
                                            : `
                                                bg-[#C8372D]
                                                border-2 border-[#A8241B]
                                                shadow-[0_2px_8px_rgba(200,55,45,0.2)]
                                            `
                                        }
                            `}
                        >
                            {isVisible ? (
                                <span className="text-[28px]">
                                    {card.emoji}
                                </span>
                            ) : (
                                <Heart
                                    size={16}
                                    className="text-white/60"
                                    fill="rgba(255,255,255,0.3)"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-accent transition-all duration-500"
                    style={{
                        width: `${(matched / total) * 100}%`,
                    }}
                />
            </div>

            {won && !isCompletionOpen && (
                <button
                    type="button"
                    onClick={restart}
                    className="mt-5 flex w-full items-center justify-center gap-2 text-sm text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
                >
                    Jogar novamente
                </button>
            )}

            {isCompletionOpen && (
                <MemoryCompletion
                    moves={moves}
                    total={total}
                    cards={cards}
                    setIsOpen={setIsCompletionOpen}
                    onRestart={restart}
                />
            )}
        </div>
    );
};
