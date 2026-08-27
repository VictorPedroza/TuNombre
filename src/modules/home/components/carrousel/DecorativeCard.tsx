import { motion } from "motion/react";

type DecorativeCardProps = {
  src?: string | null;
  alt?: string;
};

export function DecorativeCard({ src = null, alt = "" }: DecorativeCardProps) {
  return (
    <motion.div
      className="relative w-60 shrink-0 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-100/60 border border-rose-200/70 flex flex-col items-center justify-center overflow-hidden"
      style={{
        height: "21rem",
        boxShadow:
          "0 4px 32px rgba(200,55,45,0.10), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,55,45,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.div>
  );
}