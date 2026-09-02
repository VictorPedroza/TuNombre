import {
    SOLUTION,
    type GameStatus,
} from "@modules/games/constants";

interface WordleFeedbackProps {
    gameStatus: GameStatus;
}

export const WordleFeedback = ({
    gameStatus,
}: WordleFeedbackProps) => {
    if (gameStatus === "won") {
        return (
            <div className="mt-10 text-center text-green-500 font-bold text-2xl">
                Você venceu! 🎉
            </div>
        );
    }

    if (gameStatus === "lost") {
        return (
            <div className="mt-10 text-center text-red-500 font-bold text-2xl">
                Fim de jogo! A palavra era {SOLUTION}.
            </div>
        );
    }

    return null;
};
