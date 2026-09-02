import { WORD_LENGTH } from "@modules/games/constants";

import { useWordle } from "@modules/games/hooks";

import { WordleCell } from "./WordleCell";

interface WordleRowProps {
    word: string;
    isPastRow: boolean;
}

export const WordleRow = ({
    word,
    isPastRow,
}: WordleRowProps) => {
    const { getLetterColor } = useWordle();

    return (
        <div className="flex gap-2">
            {Array.from({ length: WORD_LENGTH }).map((_, index) => {
                const letter = word[index] || "";

                let color =
                    "bg-transparent border-border text-foreground";

                if (isPastRow) {
                    color = getLetterColor(letter, index);
                } else if (letter) {
                    color =
                        "border-foreground text-foreground";
                }

                return (
                    <WordleCell
                        key={index}
                        letter={letter}
                        color={color}
                    />
                );
            })}
        </div>
    );
};
