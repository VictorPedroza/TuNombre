import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { MAX_GUESSES } from "@modules/games/constants";
import { useWordle } from "@modules/games/hooks";

import { WordleBoard } from "./components/WordleBoard";
import { WordleFeedback } from "./components/WordleFeedback";

export const WordleGame = () => {
    const {
        guesses,
        currentGuess,
        gameStatus,
    } = useWordle();

    return (
        <div className="pt-10">
            <div className="max-w-4xl mx-auto px-6 py-14">
                <div className="mb-16">
                    <NavLink
                        to="/games"
                        className="
                            flex items-center gap-1.5
                            text-sm text-muted-foreground
                            hover:text-green-600
                            mb-10 transition-colors
                        "
                    >
                        <ArrowLeft size={14} />
                        Voltar
                    </NavLink>
                    <h1 className="text-4xl md:text-5xl text-foreground mb-3 serif font-semibold">Wordle</h1>
                    <p className="text-muted-foreground text-sm italic">Adivinhe a palavra em {MAX_GUESSES} tentativas.</p>
                </div>

                <WordleBoard
                    guesses={guesses}
                    currentGuess={currentGuess}
                />
                <WordleFeedback
                    gameStatus={gameStatus}
                />
            </div>
        </div>
    );
};
