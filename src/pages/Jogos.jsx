import React, { useState, useEffect } from "react";
import axios from "axios";

function Jogos() {
  const [tabuleiro, setTabuleiro] = useState([]);
  const [palavras, setPalavras] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.razzlepuzzles.com/wordsearch?locale=pt")
      .then((response) => {
        setTabuleiro(response.data.board);
        setPalavras(response.data.words);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div>
      <h1>Caça-Palavras</h1>
      <div className="tabuleiro">
        {tabuleiro.map((linha, index) => (
          <div key={index} className="linha">
            {linha.map((letra, i) => (
              <span key={i} className="letra">
                {letra}
              </span>
            ))}
          </div>
        ))}
      </div>
      <ul>
        {palavras.map((palavra, index) => (
          <li key={index}>{palavra}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jogos;
