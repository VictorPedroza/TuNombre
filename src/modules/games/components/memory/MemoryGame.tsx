import { Heart } from "lucide-react";

import { useMemory } from "@modules/games/hooks";
import { GameHead } from "../head/GameHead";

export const MemoryGame = () => {
    const { flip, moves, won, restart, total, matched, cards } = useMemory();

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

            {won ? (
                <div className="py-12 text-center">
                    <div className="mb-5 text-5xl">🏆</div>

                    <h2 className="serif mb-2 text-2xl text-foreground">
                        Memória Perfeita!
                    </h2>

                    <p className="mb-8 text-sm text-muted-foreground">
                        Você encontrou todos os {total} pares em {moves} tentativas.
                    </p>

                    <button
                        onClick={restart}
                        className="
                            rounded-full bg-primary px-8 py-3.5
                            text-sm font-medium text-primary-foreground
                            shadow-[0_4px_20px_rgba(200,55,45,0.25)]
                            transition-opacity hover:opacity-90
                        "
                    >
                        Jogar novamente
                    </button>
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
