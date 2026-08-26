export interface SummaryCardProps {
  text: string;
  children: React.ReactNode;
}

/**
 * Componente visual do sumário de informações
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-26
 * @version 1.0.0 
 * 
 **/
export const SummaryCard = ({ text, children }: SummaryCardProps) => {
  return (
    <div className="flex-1 min-w-[220px] rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
      <div className="mb-1.5 text-[0.62rem] font-semibold uppercase tracking-widest text-slate-400">
        {text}
      </div>
      {children}
    </div>
  );
};