import { motion, AnimatePresence } from "framer-motion";
import { useWordle } from "@/modules/games/hooks";
import { type GameStatus } from "@modules/games/constants";

interface WordleFeedbackProps {
    gameStatus: GameStatus;
    onRestart?: () => void;
    onViewHistory?: () => void;
}

export const WordleFeedback = ({
    gameStatus,
    onRestart,
    onViewHistory
}: WordleFeedbackProps) => {
    const { SOLUTION } = useWordle();
    const isGameOver = gameStatus === "won" || gameStatus === "lost";
    const isWinner = gameStatus === "won";

    return (
        <AnimatePresence>
            {isGameOver && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-500/50 backdrop-blur-[2px] p-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-[#FDFAF5] w-full max-w-[400px] rounded-3xl p-8 pt-10 flex flex-col items-center shadow-xl"
                    >
                        {/* Ícone Gamepad (Topo) */}
                        <div className="mb-4">
                            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="36" height="24" rx="6" stroke="#C82828" strokeWidth="2.5" />
                                <path d="M12 14H18M15 11V17" stroke="#C82828" strokeWidth="2.5" strokeLinecap="round" />
                                <circle cx="27" cy="14" r="2.5" fill="#C82828" />
                            </svg>
                        </div>

                        {/* Textos */}
                        <h2 className="text-[32px] text-[#C82828] mb-2" style={{ fontFamily: 'Merriweather, Georgia, serif' }}>
                            {isWinner ? "Você venceu!" : "Fim de Jogo!"}
                        </h2>

                        <p className="text-zinc-600 text-sm mb-5">
                            {isWinner ? "Parabéns, você descobriu:" : "A palavra secreta era:"}
                        </p>

                        {/* Display da Palavra com Cubo Decorativo */}
                        <div className="relative mb-10 w-full flex justify-center">
                            {/* Cubo Verde Flutuante Direita */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                className="absolute -right-1 top-0 w-4 h-4 bg-[#329D4B] rounded-[3px] rotate-[15deg] shadow-sm z-10"
                            />

                            <div className="bg-[#F8EFE3] px-10 py-2.5 rounded-lg">
                                <span className="text-[32px] tracking-[0.15em] text-[#C82828] uppercase" style={{ fontFamily: 'Merriweather, Georgia, serif' }}>
                                    {SOLUTION}
                                </span>
                            </div>
                        </div>

                        {/* Botões com Cubos Decorativos */}
                        <div className="flex gap-4 w-full relative mt-2">
                            {/* Cubo Vermelho Flutuante (Botão Esquerdo) */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                                className="absolute -top-3 left-6 w-4 h-4 bg-[#C82828] rounded-[3px] -rotate-12 shadow-sm z-10"
                            />

                            <button
                                onClick={onRestart}
                                className="flex-1 bg-[#C82828] text-white py-3.5 px-4 rounded-full text-sm font-medium hover:bg-[#A31D1D] transition-colors relative z-0"
                            >
                                Tentar Novamente
                            </button>

                            {/* Cubo Verde Flutuante (Botão Direito) */}
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-3 right-6 w-4 h-4 bg-[#329D4B] rounded-[3px] rotate-12 shadow-sm z-10"
                            />

                            <button
                                onClick={onViewHistory}
                                className="flex-1 bg-[#329D4B] text-white py-3.5 px-4 rounded-full text-sm font-medium hover:bg-[#257838] transition-colors relative z-0"
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