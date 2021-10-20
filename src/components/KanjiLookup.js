import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import KanjiCard from "./KanjiCard";
import GetSearchedKanji from "../requests/GetSearchedKanji";

const KanjiLookup = () => {
  const location = useLocation();
  const { kanji } = location.state;
  const [searchedKanji, setSearchedKanji] = useState({});

  useEffect(() => {
    function fetchSearchedKanji() {
      GetSearchedKanji(kanji, setSearchedKanji);
    }
    return fetchSearchedKanji();
  }, [kanji]);

  return (
    <div className="KanjiLookup">
      {searchedKanji !== {} && (
        <KanjiCard
          kanji={searchedKanji.kanji}
          key={searchedKanji.kanji}
          grade={searchedKanji.grade}
          meanings={searchedKanji.meanings}
          heisig={searchedKanji.heisig_en}
          kun={searchedKanji.kun_readings}
          on={searchedKanji.on_readings}
          stroke={searchedKanji.stroke_count}
          jlpt={searchedKanji.jlpt}
          name={searchedKanji.name_readings}
        />
      )}
    </div>
  );
};

export default KanjiLookup;
