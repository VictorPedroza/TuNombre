import { useTimeTogether } from "@timeline/hooks"
import { SummaryCard, UnitCard } from "@timeline/components"
import { START_DATE } from "@timeline/constants"

export const Summary = () => {
    const { daysUntilAnniversary, totalDaysTogether, elapsed } = useTimeTogether(START_DATE);

    const units: { value: number; label: string }[] = [
        { value: elapsed.years, label: "anos" },
        { value: elapsed.months, label: "meses" },
        { value: elapsed.days, label: "dias" },
        { value: elapsed.hours, label: "horas" },
        { value: elapsed.minutes, label: "minutos" },
        { value: elapsed.seconds, label: "segundos" },
    ];

    return (
        <div className="rounded-[20px] bg-stone-50 p-6">
            <div className="flex flex-wrap gap-3">
                {units.map((item) => (
                    <UnitCard key={item.label} label={item.label} value={item.value} />
                ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
                <SummaryCard text="dias juntos">
                    <div className="font-serif text-3xl font-medium text-emerald-700">
                        {totalDaysTogether} {" "}
                        <span className="font-sans text-lg text-slate-600">dias</span>
                    </div>
                </SummaryCard>
                <SummaryCard text="próximo aniversário de namoro">
                    <div className="font-serif text-3xl font-medium">
                        <span className="text-[#a8322f]">{daysUntilAnniversary}</span>{" "}
                        <span className="font-sans text-lg text-slate-600">dias</span>
                    </div>
                </SummaryCard>
            </div>
        </div>
    )
}