import { motion } from "motion/react";

/**
 * TimerBlock - Bloco do componente de contagem de tempo juntos
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-04-15
 * @version 1.1.0
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
    <motion.div
      whileHover={{ scale: 1.02, rotate: 10 }}
      whileFocus={{ scale: 1.02, rotate: 10 }}
      transition={{ type: "spring" }}
      tabIndex={0}
      className="group relative flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden outline-none transition-all duration-500 hover:shadow-md cursor-pointer"
    >
      {/* A AURA GIRATÓRIA - Velocidade aumentada para 1s */}
      <motion.div
        className="absolute z-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          background:
            "conic-gradient(from 0deg, transparent 0deg, #16a34a 120deg, transparent 180deg, #ef4444 300deg, transparent 360deg)",
          filter: "blur(40px)",
        }}
      />

      <div className="absolute inset-0.5 z-10 bg-stone-50/95 rounded-[15px] group-hover:bg-white group-focus:bg-white transition-colors duration-500" />

      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.span className="text-2xl md:text-4xl font-extrabold text-red-500 tabular-nums transition-colors duration-500 group-hover:text-red-600">
          {displayValue}
        </motion.span>

        <span className="text-[10px] md:text-xs text-stone-400 font-bold tracking-widest uppercase mt-1 group-hover:text-stone-600 transition-colors duration-500">
          {label}
        </span>
      </div>

      <div className="absolute inset-0 z-30 rounded-2xl border-2 border-transparent group-hover:border-green-500/20 group-focus:border-green-500/20 transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );
};
