export const TimerBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-stone-50/60 rounded-2xl border border-stone-200/50 shadow-sm hover:border-green-400 transition-colors">
    <span className="text-2xl md:text-4xl font-extrabold text-red-500">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] md:text-xs text-stone-400 font-bold tracking-widest uppercase mt-1">
      {label}
    </span>
  </div>
);