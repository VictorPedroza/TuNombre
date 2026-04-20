import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Heart } from "lucide-react";

export const LoveLetter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 max-w-lg mx-auto px-4">
      <div className="flex items-center gap-2 mb-3 justify-center">
        <Mail size={14} className="text-red-400" />
        <span className="text-xs font-bold tracking-widest uppercase text-stone-400">
          Uma carta para você
        </span>
      </div>

      <div className="relative">
        {/* Envelope */}
        <motion.div
          className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring" }}
        >
          {/* Envelope top flap */}
          <motion.div
            className="w-full h-16 bg-red-50 border-b border-stone-200 flex items-center justify-center"
            animate={{ rotateX: open ? -180 : 0 }}
            style={{ transformOrigin: "top", perspective: 600 }}
            transition={{ duration: 0.5 }}
          >
            <Heart
              size={24}
              className={`transition-colors duration-300 ${open ? "text-red-400 fill-red-400" : "text-red-300"}`}
            />
          </motion.div>

          {/* Letter content */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-8 py-6 bg-white"
              >
                <p className="text-stone-500 text-sm leading-relaxed font-serif">
                  Meu amor,
                </p>
                <p className="text-stone-600 text-base leading-relaxed mt-3 font-serif italic">
                  Desde o dia 13 de maio de 2024, minha vida ganhou uma cor que
                  eu não sabia que existia. Você entrou com aquele jeito único
                  seu e ficou — no meu dia, no meu pensamento, no meu coração.
                </p>
                <p className="text-stone-600 text-base leading-relaxed mt-3 font-serif italic">
                  Cada segundo que esse contador marca é um segundo que eu
                  escolho você de novo. Não me arrependo de nenhum.
                </p>
                <p className="text-stone-500 text-sm mt-5 font-serif">
                  Hoje, amanhã e daqui 10 anos nós! 
                </p>
                <p className="text-stone-500 text-sm font-serif font-bold">
                  Victor
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {!open && (
            <div className="px-6 py-4 text-center">
              <p className="text-xs text-stone-300">clique para abrir 💌</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};