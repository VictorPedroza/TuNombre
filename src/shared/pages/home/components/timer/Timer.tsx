import { useEffect, useState } from "react";

import { TimerBlock } from './TimerBlock' 

/**
 * Timer - Componente de contagem de tempo juntos
 * 
 * @author Victor Pedroza <victor.pedroza@protonmail.com>
 * @since 2026-04-15
 * @version 1.0.0
 * 
 **/
export const Timer = () => {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 13 de Maio de 2024 às 23:01
    const startDate = new Date(2024, 4, 13, 23, 1, 0);

    const calcDiff = () => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const lastDayMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0,
        ).getDate();
        days += lastDayMonth;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTime({ years, months, days, hours, minutes, seconds });
    };

    calcDiff();
    const interval = setInterval(calcDiff, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
        <TimerBlock value={time.years} label="Anos" />
        <TimerBlock value={time.months} label="Meses" />
        <TimerBlock value={time.days} label="Dias" />
        <TimerBlock value={time.hours} label="Horas" />
        <TimerBlock value={time.minutes} label="Minutos" />
        <TimerBlock value={time.seconds} label="Segundos" />
      </div>
    </div>
  );
};
