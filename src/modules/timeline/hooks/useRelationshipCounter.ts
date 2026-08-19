import { useEffect, useMemo, useState } from "react";
import type { Elapsed } from "../types";

interface useRelationshipCounterResult {
  daysUntilAnniversary: number;
  totalDaysTogether: number;
  elapsed: Elapsed;
}

export const useRelationshipCounter = (
  startDate: string | Date,
): useRelationshipCounterResult => {
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
      start.getSeconds(),
    );

    if (next.getTime() <= now.getTime()) {
      next.setFullYear(next.getFullYear() + 1);
    }

    return next;
  };

  const getElapsed = (start: Date, now: Date): Elapsed => {
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonthDate.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  const elapsed = useMemo(() => getElapsed(start, now), [start, now]);

  const totalDaysTogether = useMemo(() => {
    const diffMs = now.getTime() - start.getTime();
    return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  const daysUntilAnniversary = useMemo(() => {
    const next = getNextAnniversary(start, now);
    const diffMs = next.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  return { daysUntilAnniversary, totalDaysTogether, elapsed };
};
