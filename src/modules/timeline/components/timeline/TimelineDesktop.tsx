import type { TimelineEvent } from "../../types";
import { TimelineCard } from "./TimelineCard";

export const TimelineDesktop = ({ events }: { events: TimelineEvent[] }) => {
    return (
        <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/20 -translate-x-1/2" />
            <div className="space-y-20">
                {events.map((ev, i) => {
                    const left = i % 2 === 0;
                    return (
                        <div key={i} className="relative flex items-center">
                            <div className="w-1/2 pr-12 flex justify-end">
                                {left && <div className="w-full max-w-xs"><TimelineCard event={ev} /></div>}
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                <div className="w-11 h-11 rounded-full bg-background border-2 border-foreground-muted/10 flex items-center justify-center text-xl" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                                    {ev.emoji}
                                </div>
                            </div>
                            <div className="w-1/2 pl-12 flex justify-start">
                                {!left && <div className="w-full max-w-xs"><TimelineCard event={ev} /></div>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}