import { motion } from "framer-motion";
import { RotateCcw, Sparkles, X } from "lucide-react";

import type { MemCard } from "@modules/games/constants";

interface MemoryCompletionProps {
    moves: number;
    total: number;
    cards: MemCard[];
    setIsOpen: (isOpen: boolean) => void;
    onRestart: () => void;
}

export const MemoryCompletion = ({
    moves,
    total,
    cards,
    setIsOpen,
    onRestart,
}: MemoryCompletionProps) => {
    const pairs = cards.filter(
        (card, index, allCards) =>
            card.matched && allCards.findIndex((item) => item.id === card.id) === index,
    );

    const handleRestart = () => {
        onRestart();
        setIsOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-500/50 p-4 backdrop-blur-[2px]"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative flex w-full max-w-[400px] flex-col items-center rounded-3xl bg-[#FDFAF5] p-7 pt-9 shadow-xl sm:p-8"
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Fechar resultado"
                    className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
                >
                    <X size={20} />
                </button>

                <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, -4, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className="mb-4 text-green-600"
                >
                    <Sparkles size={46} strokeWidth={1.5} />
                </motion.div>

                <h2 className="serif mb-2 text-2xl text-foreground">Memória perfeita!</h2>
                <p className="mb-6 text-center text-sm leading-6 text-zinc-600">
                    Você encontrou os {total} pares em {moves} {moves === 1 ? "tentativa" : "tentativas"}.
                </p>

                <div className="mb-8 grid w-full grid-cols-4 gap-2 rounded-2xl bg-[#F8EFE3] p-3 shadow-inner">
                    {pairs.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, rotateY: 90, scale: 0.7 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            transition={{ delay: index * 0.07, duration: 0.45, ease: "backOut" }}
                            className="flex aspect-square items-center justify-center rounded-xl border-2 border-[#3D6B4F] bg-white text-2xl shadow-sm"
                            title={card.label}
                        >
                            {card.emoji}
                        </motion.div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleRestart}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                    <RotateCcw size={16} />
                    Jogar novamente
                </button>
            </motion.div>
        </motion.div>
    );
};