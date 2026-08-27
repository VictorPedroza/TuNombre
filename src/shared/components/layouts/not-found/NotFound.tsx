import { Link } from "react-router-dom"; 

/**
 * Componente de visualização de Página Não Encontrada
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-07-02
 * @version 1.1.0
 * 
 **/
export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col">
      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-emerald-700 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Ops, algo se perdeu
        </p>

        <h1 className="font-serif text-5xl md:text-7xl text-neutral-900 leading-tight">
          Página
        </h1>
        <h2 className="font-serif italic font-semibold text-5xl md:text-7xl text-red-600 leading-tight mb-6">
          Não Encontrada
        </h2>

        <p className="text-neutral-500 text-base md:text-lg max-w-md leading-relaxed mb-10">
          Procuramos em cada cantinho da nossa história, mas essa página não
          existe — ou já não está mais aqui.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 transition-colors text-white text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-full"
        >
          Voltar para o início
        </Link>
      </main>
    </div>
  );
};
