import { TimelineCard } from "@timeline/components"
import { type TimelineEvent } from "@timeline/constants"

interface TimelineMobileProps {
    events: TimelineEvent[];
}

/**
 * Visualização da Linha do Tempo para Desktop
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-26
 * @version 1.0.0
 * 
 **/
export const TimelineMobile = ({ events }: TimelineMobileProps) => {
    return (
        <div className="block md:hidden">
            <div className="md:hidden relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/20" />
                <div className="space-y-10">
                    {events.map((event) => (
                        <div key={event.id} className="relative flex gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-10 h-10 rounded-full bg-background border-2 border-foreground-muted/10 flex items-center justify-center text-lg" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                                    {event.emoji}
                                </div>
                            </div>
                            <div className="flex-1 pb-2"><TimelineCard event={event} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}