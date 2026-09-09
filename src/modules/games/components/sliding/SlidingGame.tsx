import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

import { useSlidingGame } from "@modules/games/hooks"
import { PuzzlePiece } from "./components/PuzzlePiece";

export const SlidingGame = () => {
    const { tiles, moves, won, puzzleImage, moveTile, shuffle } = useSlidingGame();

    return (
        <div className="max-w-lg mx-auto px-6 py-12">
            
            {/* Cabeçalho */}
            <div className="mb-16">
                <NavLink to="/games" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-green-600 mb-10 transition-colors">
                    <ArrowLeft size={14} /> Voltar
                </NavLink>
                <h1 className="text-4xl md:text-5xl text-foreground mb-3 serif font-semibold">Foto Puzzle</h1>
                <p className="text-muted-foreground text-sm italic">Reorganize os pedaços para revelar a imagem completa.</p>
            </div>

            {/* Mensagem de Vitória */}
            {won && (
                <div className="mb-6 px-5 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium text-center">
                    Parabéns! Resolvido em {moves} movimentos 🎉
                </div>
            )}

            {/* Tabuleiro e Controles */}
            <div className="flex flex-col items-center">
                <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 120px)`, gap: 2, background: "rgba(26,26,26,0.08)", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                    {tiles.map((v, gi) => (
                        <PuzzlePiece key={gi} value={v} image={puzzleImage} onClick={() => moveTile(gi)} />
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-10">
                    <span className="text-sm text-muted-foreground">{moves} movimentos</span>
                    <button onClick={shuffle} className="text-sm text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                        Embaralhar
                    </button>
                </div>
            </div>
            
        </div>
    );
};