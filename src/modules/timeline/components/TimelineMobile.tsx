import type { TimelineEvent } from "@/shared/types"
import { TimelineCard } from "./TimelineCard"

export const TimelineMobile = ({ events }: { events: TimelineEvent[] }) => {
    return (
        <div className="md:hidden relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-foreground/20" />
            <div className="space-y-10">
                {events.map((ev, i) => (
                    <div key={i} className="relative flex gap-8">
                        <div className="flex-shrink-0 z-10">
                            <div className="w-10 h-10 rounded-full bg-background border-2 border-foreground-muted/10 flex items-center justify-center text-lg" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                                {ev.emoji}
                            </div>
                        </div>
                        <div className="flex-1 pb-2"><TimelineCard event={ev} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}