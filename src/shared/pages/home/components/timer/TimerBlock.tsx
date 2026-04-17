import { motion } from "motion/react";

/**
 * TimerBlock - Bloco do componente de contagem de tempo juntos
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-04-15
 * @version 1.0.0
 *
 **/
export const TimerBlock = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const displayValue = value.toString().padStart(2, "0");

  return (
    <div className="group relative flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl">
      {/* A AURA GIRATÓRIA (Invisível por padrão, aparece no hover) */}
      <motion.div
        className="absolute inset-full z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #16a34a 120deg, transparent 180deg, #ef4444 300deg, transparent 360deg)",
          filter: "blur(30px)", // Shadow giratório bem difuso
        }}
      />

      {/* OVERLAY DE CONTRASTE 
          Garante que o fundo do card continue sólido enquanto a aura brilha atrás
      */}
      <div className="absolute inset-0.5 z-10 bg-stone-50/90 rounded-[15px] group-hover:bg-white transition-colors duration-500" />

      {/* CONTEÚDO (Texto) */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.span
          // Um pequeno "pulo" no número quando entra no hover
          whileHover={{ scale: 1.1 }}
          className="text-2xl md:text-4xl font-extrabold text-red-500 tabular-nums transition-colors duration-500 group-hover:text-red-600"
        >
          {displayValue}
        </motion.span>

        <span className="text-[10px] md:text-xs text-stone-400 font-bold tracking-widest uppercase mt-1 group-hover:text-stone-600 transition-colors duration-500">
          {label}
        </span>
      </div>

      {/* BORDA INTERNA DE BRILHO (Opcional, dá um toque de acabamento) */}
      <div className="absolute inset-0 z-30 rounded-2xl border-2 border-transparent group-hover:border-green-500/10 transition-colors duration-700 pointer-events-none" />
    </div>
  );
};
