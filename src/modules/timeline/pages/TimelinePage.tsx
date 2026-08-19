import { useTimelineEvents } from "@/modules/timeline/hooks/useTimelineEvents";
import { useRelationshipCounter } from "../hooks/useRelationshipCounter";
import { SummaryCard, TimelineDesktop, TimelineHead, TimelineMobile, UnitCard } from "../components";
import { START_DATE } from "../types";

/**
 * Interface da Página da História
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-14
 * @version 1.1.0
 *
 **/
export const TimelinePage = () => {
    const { events, loading, error } = useTimelineEvents();
    const { daysUntilAnniversary, totalDaysTogether, elapsed } = useRelationshipCounter(START_DATE);

    const units: { value: number; label: string }[] = [
        { value: elapsed.years, label: "anos" },
        { value: elapsed.months, label: "meses" },
        { value: elapsed.days, label: "dias" },
        { value: elapsed.hours, label: "horas" },
        { value: elapsed.minutes, label: "minutos" },
        { value: elapsed.seconds, label: "segundos" },
    ];

    return (
        <div className="pt-16">
            <div className="max-w-4xl mx-auto px-6 py-14">
                {/* Head de História */}
                <TimelineHead />

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


                {loading && (
                    <div className="pt-16 flex justify-center items-center min-h-[200px]">
                        <p className="text-gray-500 animate-pulse">
                            Carregando momentos especiais...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="pt-16 flex justify-center items-center min-h-[200px]">
                        <p className="text-red-500 italic">
                            Erro ao carregar a linha do tempo. Tente novamente mais tarde.
                        </p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <div className="hidden md:block">
                            <TimelineDesktop events={events} />
                        </div>

                        <div className="block md:hidden">
                            <TimelineMobile events={events} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
