import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { MAX_GUESSES, WORD_LENGTH } from "@modules/games/constants";
import { useWordle } from "@modules/games/hooks";

import { WordleBoard } from "./components/WordleBoard";
import { WordleFeedback } from "./components/WordleFeedback";
import { WordleHistory } from "./components/WordleHistory";

export const WordleGame = () => {
    const {
        guesses,
        currentGuess,
        gameStatus,
        restartGame,
        canRestart,
        SOLUTION,
        handleKeyDown,
        setCurrentGuess,
    } = useWordle();
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (gameStatus === "playing") {
            inputRef.current?.focus();
        }
    }, [gameStatus]);

    const focusGameInput = () => inputRef.current?.focus();

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

                <div onClick={focusGameInput}>
                    <WordleBoard
                        guesses={guesses}
                        currentGuess={currentGuess}
                    />
                </div>
                <input
                    ref={inputRef}
                    value={currentGuess}
                    onChange={(event) => {
                        const nextGuess = event.target.value
                            .replace(/[^a-zA-ZÀ-ÿ]/g, "")
                            .slice(0, WORD_LENGTH)
                            .toUpperCase();

                        setCurrentGuess(nextGuess);
                    }}
                    onKeyDown={handleKeyDown}
                    type="text"
                    inputMode="text"
                    autoCapitalize="characters"
                    autoComplete="off"
                    aria-label="Digite sua tentativa"
                    className="absolute h-px w-px opacity-0"
                />
                <WordleFeedback
                    gameStatus={gameStatus}
                    solution={SOLUTION}
                    canRestart={canRestart}
                    isOpen={isFeedbackOpen}
                    onClose={() => setIsFeedbackOpen(false)}
                    onRestart={() => {
                        restartGame();
                        setIsFeedbackOpen(true);
                    }}
                    onViewHistory={() => setIsHistoryOpen(true)}
                />

                {isHistoryOpen && (
                    <WordleHistory setIsOpen={setIsHistoryOpen} />
                )}
            </div>
        </div>
    );
};
