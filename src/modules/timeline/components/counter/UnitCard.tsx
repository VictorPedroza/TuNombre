export const UnitCard = ({ label, value }: { label: string, value: number }) => {
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