export interface TimelineEvent {
    id: string;
    date: string;
    title: string; 
    description: string;
    emoji: string;
    image: string;
}

export interface SaveTimelineEventDTO {
    date: string;
    title: string; 
    description: string;
    emoji: string;
    image?: string;
}

export interface UpdadteTimelineEventDTO {
    id: string;
    date?: string;
    title?: string; 
    description?: string;
    emoji?: string;
    image?: string;
}