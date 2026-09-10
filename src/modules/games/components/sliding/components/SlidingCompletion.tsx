import { motion } from "framer-motion";
import { Image, RotateCcw, X } from "lucide-react";

interface SlidingCompletionProps {
  moves: number;
  image: string;
  setIsOpen: (isOpen: boolean) => void;
  onShuffle: () => void;
}

export const SlidingCompletion = ({
  moves,
  image,
  setIsOpen,
  onShuffle,
}: SlidingCompletionProps) => {
  const handleShuffle = () => {
    onShuffle();
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-500/50 p-4 backdrop-blur-[2px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative flex w-full max-w-[400px] flex-col items-center rounded-3xl bg-[#FDFAF5] p-8 pt-10 shadow-xl"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar resultado"
          className="absolute right-5 top-5 text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>

        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, -3, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <Image className="mb-4 h-12 w-12 text-green-600" />
        </motion.div>

        <h2
          className="mb-2 text-md text-foreground"
          style={{ fontFamily: "Merriweather, Georgia, serif" }}
        >
          Você venceu!
        </h2>

        <p className="mb-5 text-sm text-zinc-600">
          Você revelou a imagem em {moves} {moves === 1 ? "movimento" : "movimentos"}.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="mb-8 overflow-hidden rounded-lg bg-[#F8EFE3] shadow-sm"
        >
          <img
            src={image}
            alt="Imagem revelada no Foto Puzzle"
            className="h-60 w-60 object-cover"
          />
        </motion.div>

        <button
          type="button"
          onClick={handleShuffle}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#329D4B] px-4 py-3.5 text-sm font-medium text-white hover:bg-[#257838]"
        >
          <RotateCcw size={16} />
          Embaralhar novamente
        </button>
      </motion.div>
    </motion.div>
  );
};
