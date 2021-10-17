import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import KanjiCard from "./KanjiCard";
import GetRandomKanji from "../requests/GetRandomKanji";

const Home = ({ kanji }) => {
  const [randomKanji, setRandomKanji] = useState({});

  useEffect(() => {
    function fetchRandomKanji() {
      GetRandomKanji(kanji, setRandomKanji);
    }
    return fetchRandomKanji();
  }, [kanji]);

  return (
    <div className="Home">
      <h1 className="UkanaHeader">Ukana</h1>
      <h1 className="UkanaHeaderJp">言う仮名</h1>
      <h3 className="Subheader">Your place for Japanese language-learning!</h3>
      {randomKanji !== {} && (
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
      )}
    </div>
  );
};

export default Home;
