import { motion, AnimatePresence } from "framer-motion";
import { piece, type GameStatus } from "@modules/games/constants";
import { Gamepad, X } from "lucide-react";

interface WordleFeedbackProps {
    gameStatus: GameStatus;
    solution: string;
    canRestart: boolean;
    isOpen: boolean;
    onClose?: () => void;
    onRestart?: () => void;
    onViewHistory?: () => void;
}


export const WordleFeedback = ({
    gameStatus,
    solution,
    canRestart,
    isOpen,
    onClose,
    onRestart,
    onViewHistory,
}: WordleFeedbackProps) => {
    const won = gameStatus === "won";
    const gameOver = won || gameStatus === "lost";
    const showSolution = !canRestart;

    const message = showSolution
        ? won ? "Parabéns, você descobriu:" : "A palavra secreta era:"
        : won ? "Parabéns, você descobriu a palavra!" : "Você não descobriu a palavra.";

    if (!gameOver) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-500/50 p-4 backdrop-blur-[2px]"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative flex w-full max-w-[400px] flex-col items-center rounded-3xl bg-[#FDFAF5] p-8 pt-10 shadow-xl"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Fechar feedback"
                            className="absolute right-5 top-5 text-muted-foreground hover:text-foreground"
                        >
                            <X size={20} />
                        </button>

                        <Gamepad className="mb-4 h-12 w-12 text-green-600" />

                        <h2
                            className="mb-2 text-md text-foreground"
                            style={{ fontFamily: "Merriweather, Georgia, serif" }}
                        >
                            {won ? "Você venceu!" : "Fim de Jogo!"}
                        </h2>

                        <p className="mb-5 text-sm text-zinc-600">{message}</p>

                        {showSolution && (
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                className="relative mb-10 rounded-lg bg-[#F8EFE3] px-10 py-2.5"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                    className={`${piece} -right-1 top-0 rotate-[15deg] bg-red-600`}
                                />
                                <span
                                    className="text-[32px] uppercase tracking-[0.15em] text-red-600"
                                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                                >
                                    {solution}
                                </span>
                            </motion.div>
                        )}

                        <div className="relative flex w-full gap-4">
                            <motion.div
                                animate={{ y: [0, -12, 0], x: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
                                className={`${piece} -top-3 left-6 -rotate-12 bg-green-600`}
                            />

                            <button
                                onClick={onRestart}
                                disabled={!canRestart || won}
                                className="relative z-0 flex-1 rounded-full bg-red-600 px-4 py-3.5 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {won ? "Você já conseguiu" : canRestart ? "Tentar Novamente" : "Limite atingido"}
                            </button>

                            <motion.div
                                animate={{ y: [0, -7, 0], x: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.5 }}
                                className={`${piece} -top-3 right-6 rotate-12 bg-foreground`}
                            />

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                                className={`${piece} -top-20 -left-1 rotate-12 bg-red-600`}
                            />

                            <button
                                onClick={onViewHistory}
                                className="relative z-0 flex-1 rounded-full bg-[#329D4B] px-4 py-3.5 text-sm font-medium text-white hover:bg-[#257838]"
                            >
                                Ver Histórico
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
