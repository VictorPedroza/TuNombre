import {useState, useEffect} from "react";

import { Flower } from "../Flower/Flower";
import "./Counter.css";

const Counter = () => {
    const [timeDiff, setTimeDiff] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        // Define a data inicial (13 de maio de 2024, 23:01)
        const startDate = new Date(2024, 4, 13, 23, 1); // mês 4 porque janeiro é 0
        const interval = setInterval(() => {
          // Obtém a data atual
          const currentDate = new Date();
    
          // Calcula a diferença em milissegundos
          const diffInMs = currentDate - startDate;
    
          // Converte a diferença de milissegundos para anos, meses, dias, horas, minutos e segundos
          const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
          const months = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
          const days = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
    
          // Atualiza o estado com a diferença calculada
          setTimeDiff({ years, months, days, hours, minutes, seconds });
        }, 1000); // Atualiza a cada segundo
    
        // Limpeza do intervalo quando o componente for desmontado
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="grid-counter">
                <div className="item-counter">
                    <Flower timeName="Ano(s)" time={timeDiff.years}/>
                </div>
                <div className="item-counter">
                    <Flower timeName="Mes(es)" time={timeDiff.months}/>
                </div>
                <div className="item-counter">
                    <Flower timeName="Dia(s)" time={timeDiff.days} />
                </div>
                <div className="item-counter">
                    <Flower timeName="Hora(s)" time={timeDiff.hours} />
                </div>
                <div className="item-counter">
                    <Flower timeName="Minuto(s)" time={timeDiff.minutes} />
                </div>
                <div className="item-counter">
                    <Flower timeName="Segundos" time={timeDiff.seconds} />
                </div>
            </div>
        </>
    )
}

export default Counter;