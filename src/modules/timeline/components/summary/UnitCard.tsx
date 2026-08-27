interface UnitCardProps {
    label: string;
    value: number;
}

/**
 * Componente do Card principal de informações
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-26
 * @version 1.0.0 
 * 
 **/
export const UnitCard = ({ label, value }: UnitCardProps) => {
    return (
        <div className="flex-1 min-w-[78px] rounded-2xl border border-stone-200 bg-white px-2 py-5 text-center shadow-sm">
            <div className="font-serif text-3xl font-medium leading-none text-[#a8322f]">
                {value.toString().padStart(2, "0")}
            </div>
            <div className="mt-2 text-[0.62rem] font-semibold uppercase tracking-widest text-slate-400">
                {label}
            </div>
        </div>
    )
}