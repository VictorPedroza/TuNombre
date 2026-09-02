import type { TimelineEvent } from "@modules/timeline/constants"

interface TimelineCardProps {
    event: TimelineEvent;
}

/**
 * Card de visualização de momentos
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-26
 * @version 1.0.0
 * 
 **/
export const TimelineCard = ({ event }: TimelineCardProps) => {
    return (
        <div className="rounded-2xl bg-card border border-border overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
            {event.image && (
                <div className="aspect-video bg-muted overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
            )}
            <div className="p-5">
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{event.date}</span>
                <h3 className="text-lg text-foreground mt-1.5 mb-2 serif font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
        </div>
    )
}