import React from "react";
import { motion, type Transition } from "framer-motion";
import { wavesPath } from "./wavesPath";

/**
 * Componente do Rodapé
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com
 * @since 2025-08-07
 * @version 1.0.0
 * 
 **/
export const Footer: React.FC = () => {
  const waveTransition: Transition = {
    duration: 15,
    repeat: Infinity,
    ease: "linear",
  };

  return (
    <footer className="relative w-full overflow-hidden leading-none bg-transparent">
      <svg
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[101%] -ml-[0.5%] h-auto block"
        preserveAspectRatio="none"
      >
        {/* Camada 1 - Fundo */}
        <motion.path
          className={wavesPath[0].className}
          fillOpacity={wavesPath[0].fillOpacity}
          animate={{ d: wavesPath[0].frame }}
          transition={waveTransition}
        />

        {/* Camada 2 - Meio */}
        <motion.path
          className={wavesPath[1].className}
          fillOpacity={wavesPath[1].fillOpacity}
          animate={{ d: wavesPath[1].frame }}
          transition={waveTransition}
        />

        {/* Camada 3 - Frente */}
        <motion.path
          className={wavesPath[2].className}
          fillOpacity={wavesPath[2].fillOpacity}
          animate={{ d: wavesPath[2].frame }}
          transition={waveTransition}
        />
      </svg>
    </footer>
  );
};
