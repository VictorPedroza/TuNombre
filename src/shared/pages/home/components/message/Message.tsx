import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { messages } from "@/shared/pages/home/constants/messages";

export const DailyMessage = () => {
  const [index, setIndex] = useState(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        86400000
    );
    return dayOfYear % messages.length;
  });
  const [visible, setVisible] = useState(true);

  const next = () => {
    setVisible(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % messages.length);
      setVisible(true);
    }, 300);
  };

  return (
    <div className="mt-10 max-w-lg mx-auto px-4">
      <div className="flex items-center gap-2 mb-3 justify-center">
        <Sparkles size={14} className="text-green-500" />
        <span className="text-xs font-bold tracking-widest uppercase text-stone-400">
          Mensagem do dia
        </span>
        <Sparkles size={14} className="text-green-500" />
      </div>
      <div
        className="relative rounded-2xl border border-stone-200 bg-white shadow-sm p-6 text-center overflow-hidden cursor-pointer"
        onClick={next}
      >
        <AnimatePresence mode="wait">
          {visible && (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-stone-600 text-lg leading-relaxed italic"
            >
              "{messages[index]}"
            </motion.p>
          )}
        </AnimatePresence>
        <p className="text-xs text-stone-300 mt-4">toque para a próxima ✨</p>
      </div>
    </div>
  );
};