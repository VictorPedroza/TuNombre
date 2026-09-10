import { useEffect, useState } from "react";

import { useSlidingGame } from "@modules/games/hooks"
import { PuzzlePiece } from "./components/PuzzlePiece";
import { SlidingCompletion } from "./components/SlidingCompletion";
import { GameHead } from "../head/GameHead";

export const SlidingGame = () => {
    const { tiles, moves, won, puzzleImage, moveTile, shuffle } = useSlidingGame();
    const [isCompletionOpen, setIsCompletionOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (won) setIsCompletionOpen(true);
    }, [won]);

    return (
        <div className="max-w-lg mx-auto px-6 py-12">
            <GameHead
                title="Quebra-cabeça"
                description="Reorganize os pedaços para revelar a imagem completa."
            />

            {/* Tabuleiro e Controles */}
            <div className="flex flex-col items-center">
                <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 120px)`, gap: 2, background: "rgba(26,26,26,0.08)", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                    {tiles.map((v, gi) => (
                        puzzleImage && (
                            <PuzzlePiece key={gi} value={v} image={puzzleImage} onClick={() => moveTile(gi)} />
                        )
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-10">
                    <span className="text-sm text-muted-foreground">{moves} movimentos</span>
                    <button onClick={shuffle} className="text-sm text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                        Embaralhar
                    </button>
                </div>
            </div>

            {isCompletionOpen && puzzleImage && (
                <SlidingCompletion
                    moves={moves}
                    image={puzzleImage}
                    setIsOpen={setIsCompletionOpen}
                    onShuffle={shuffle}
                />
            )}

        </div>
    );
};