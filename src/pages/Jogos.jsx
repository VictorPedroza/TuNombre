import React, { useEffect, useState } from "react";
import { Crossword, ThemeProvider } from "@jaredreisinger/react-crossword";
import "./Jogos.css";

const Jogos = () => {
  const [crosswordData, setCrosswordData] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = {
      across: {
        1: {
          clue: "Te dizia mesmo antes de saber o real significado",
          answer: "TEQUIERO",
          row: 3,
          col: 0,
        },
        2: {
          clue: "Aparentemente ganhei uma...",
          answer: "MORAL",
          row: 8,
          col: 0,
        },
        3: {
          clue: "Metade da minha...",
          answer: "LARANJA",
          row: 6,
          col: 5,
        },
        4: {
          clue: "Tu Nombre",
          answer: "RAFAELA",
          row: 10,
          col: 3,
        },
      },
      down: {
        1: {
          clue: "Seu sobrenome",
          answer: "PEDROZA",
          row: 0,
          col: 6,
        },
        2: {
          clue: "Te digo em libras",
          answer: "TESINTO",
          row: 2,
          col: 1,
        },
        3: {
          clue: "Tu eres minha...",
          answer: "PRINCESA",
          row: 3,
          col: 9,
        },
        4: {
          clue: "Quantidade crias",
          answer: "QUATRO",
          row: 6,
          col: 3,
        },
      },
    };

    setTimeout(() => {
      setCrosswordData(data);
    }, 100);
  }, []);

  // UseEffect para alterar ACROSS e DOWN
  useEffect(() => {
    const headers = document.querySelectorAll(".kCzJEc .direction .header");
    headers.forEach(header => {
      if (header.textContent === "ACROSS") {
        header.textContent = "HORIZONTAL";
      } else if (header.textContent === "DOWN") {
        header.textContent = "VERTICAL";
      }
    });
  }, [crosswordData]); // Dependência em crosswordData

  if (!crosswordData) {
    return <div>Carregando...</div>;
  }

  const handleCorrect = (direction, number, answer) => {
    console.log(`A resposta ${answer} para a pista ${number} está correta!`);
    setMessage(`A resposta ${answer} para a pista ${number} está correta!`);
  };

  const theme = {
    numberColor: "rgb(214, 62, 36)",
    gridBackground: "rgb(255, 255, 255)",
    cellBackground: "transparent",
    textColor: "rgb(39, 48, 67)",
    highlightBackground: "rgba(52, 136, 9, 0.3)",
    focusBackground: "rgba(52, 136, 9, 0.5)",
    cellBorder: "rgb(0, 0, 0)",
    columnBreakpoint: "768px",
  };

  return (
    <main>
      <div>
        <ThemeProvider theme={theme}>
          <div className="crossword-wrapper">
            <Crossword data={crosswordData} onCorrect={handleCorrect} />
            {message && <div className="feedback">{message}</div>}
          </div>
        </ThemeProvider>
      </div>
    </main>
  );
};

export default Jogos;
