import { useEffect, useMemo, useState } from "react";
import type { Elapsed } from "../types";

interface useRelationshipCounterResult {
  daysUntilAnniversary: number;
  totalDaysTogether: number;
  elapsed: Elapsed;
}

/**
 * Hook gerar os valores do contador da aplicação
 *
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-08-19
 * @version 1.0.0
 **/
export const useRelationshipCounter = (
  startDate: string | Date,
): useRelationshipCounterResult => {
  // Converte a data recebida do Hook
  const start = useMemo(
    () => (startDate instanceof Date ? startDate : new Date(startDate)),
    [startDate],
  );

  // Inicia a variável da momento "atual"
  const [now, setNow] = useState<Date>(new Date());

  // Atualiza o momento "atual"
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  /**
   * Função auxiliar para buscar qual o próximo aniversário de namoro
   *
   * @param {Date} start Data inicial da contagem
   * @param {Date} now Data do momento "atual"
   *
   * @returns {Date} Data do próximo aniversário
   **/
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

  /**
   * Função auxiliar para buscar quanto tempo se passou
   *
   * @param {Date} start Data inicial da contagem
   * @param {Date} now Data do momento "atual"
   *
   * @returns {Elapsed} Dados de Ano, Mês, Dias, Horas, Minutos e Segundos que se passaram desde a data inicial
   **/
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

  // Memoriza o quanto se passou, e atualiza a cada tick do relógio
  const elapsed = useMemo(() => getElapsed(start, now), [start, now]);

  // Total de dias que se passaram desde a data inicial
  const totalDaysTogether = useMemo(() => {
    const diffMs = now.getTime() - start.getTime();
    return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  // Total de dias para quando será o próximo aniversário
  const daysUntilAnniversary = useMemo(() => {
    const next = getNextAnniversary(start, now);
    const diffMs = next.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  }, [start, now]);

  return { daysUntilAnniversary, totalDaysTogether, elapsed };
};
