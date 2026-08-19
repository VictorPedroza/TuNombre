import { useEffect, useMemo, useState } from "react";

interface useRelationshipCounterResult {
    daysUntilAnniversary: number;
    totalDaysTogether: number;
}

export const useRelationshipCounter = (startDate: string | Date): useRelationshipCounterResult => {
  const start = useMemo(
    () => (startDate instanceof Date ? startDate : new Date(startDate)),
    [startDate],
  );

  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const getNextAnniversary = (start: Date, now: Date): Date => {
    const next = new Date(
        now.getFullYear(),
        start.getMonth(),
        start.getDate(),
        start.getHours(),
        start.getMinutes(),
        start.getSeconds()
    );

    if (next.getTime() <= now.getTime() ) {
        next.setFullYear(next.getFullYear() + 1);
    }

    return next;
  }

  const totalDaysTogether = useMemo(() => {
    const diffMs = now.getTime() - start.getTime();
    return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  const daysUntilAnniversary = useMemo(() => {
    const next = getNextAnniversary(start, now);
    const diffMs = next.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  return { daysUntilAnniversary, totalDaysTogether }
};
