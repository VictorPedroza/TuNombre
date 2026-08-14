export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
  image: string;
}

export const BUCKET_NAME = "timeline-photos";