import { MAX_GUESSES } from "@modules/games/constants";
import { WordleRow } from "./WordleRow";

interface WordleBoardProps {
    guesses: string[];
    currentGuess: string;
}

export const WordleBoard = ({
    guesses,
    currentGuess,
}: WordleBoardProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
                const isCurrentRow = rowIndex === guesses.length;
                const isPastRow = rowIndex < guesses.length;

                const rowWord = isPastRow
                    ? guesses[rowIndex]
                    : isCurrentRow
                        ? currentGuess
                        : "";

                return (
                    <WordleRow
                        key={rowIndex}
                        word={rowWord}
                        isPastRow={isPastRow}
                    />
                );
            })}
        </div>
    );
};
