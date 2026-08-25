export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
  image: string;
  sort_order: number;
}

export const BUCKET_NAME = "timeline-photos";