import React, { useState, useEffect } from "react";
import "../styles/KanjiCard.css";
import KanjiCard from "./KanjiCard";
import GetRandomKanji from "../requests/GetRandomKanji";

const RandomKanji = ({ kanji }) => {
  const [randomKanji, setRandomKanji] = useState({});

  const handleRandomRefresh = () => {
    GetRandomKanji(kanji, setRandomKanji);
  };

  useEffect(() => {
    function fetchRandomKanji() {
      GetRandomKanji(kanji, setRandomKanji);
    }
    return fetchRandomKanji();
  }, [kanji]);

  return (
    <div className="RandomKanji">
      {randomKanji !== {} && (
        <>
          <KanjiCard
            kanji={randomKanji.kanji}
            key={randomKanji.kanji}
            grade={randomKanji.grade}
            meanings={randomKanji.meanings}
            heisig={randomKanji.heisig_en}
            kun={randomKanji.kun_readings}
            on={randomKanji.on_readings}
            stroke={randomKanji.stroke_count}
            jlpt={randomKanji.jlpt}
            name={randomKanji.name_readings}
          />
          <p className="refreshRandom" onClick={handleRandomRefresh}>
            Click for another kanji!
          </p>
        </>
      )}
    </div>
  );
};

export default RandomKanji;
