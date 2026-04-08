import { Heart } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
        style={{
          background: "rgba(220,38,38,0.1)",
          border: "1px solid rgba(220,38,38,0.2)",
        }}
      >
        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
        <span className="text-xs text-red-600 font-semibold tracking-widest uppercase">
          Desde 13 de Maio de 2024
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-3 leading-none">
        Tu<span style={{ color: "#DC2626" }}>Nombre</span>
      </h1>
      <p className="text-stone-500 text-lg md:text-xl mt-4 max-w-md mx-auto leading-relaxed">
        Cada segundo ao seu lado é um presente que guardo com todo o meu coração
        💚
      </p>
    </>
  );
};
