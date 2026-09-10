import { useEffect, useRef, useState } from "react";

import { MAX_GUESSES, WORD_LENGTH } from "@modules/games/constants";
import { useWordle } from "@modules/games/hooks";

import { WordleBoard } from "./components/WordleBoard";
import { WordleFeedback } from "./components/WordleFeedback";
import { WordleHistory } from "./components/WordleHistory";
import { GameHead } from "../head/GameHead";

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
        <div className="max-w-lg mx-auto px-6 py-12">
            <GameHead
                title="Wordle"
                description={`Adivinhe a palavra em ${MAX_GUESSES} tentativas.`}
            />

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
    );
};
