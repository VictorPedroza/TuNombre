interface WordleCellProps {
    letter: string;
    color: string;
}

export const WordleCell = ({
    letter,
    color,
}: WordleCellProps) => {
    return (
        <div
            className={`
                w-14 h-14
                border-2
                flex items-center justify-center
                text-2xl font-bold uppercase
                transition-colors
                ${color}
            `}
        >
            {letter}
        </div>
    );
};
