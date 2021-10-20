import React, { useState, useEffect } from "react";
import GetGradedKanji from "../requests/GetGradedKanji";
import KanjiMiniCard from "./KanjiMiniCard";

const Grade = ({ gradeNum }) => {
  const [gradedKanji, setGradedKanji] = useState([]);

  useEffect(() => {
    async function fetchGradedKanji() {
      setGradedKanji(await GetGradedKanji(gradeNum));
    }
    return fetchGradedKanji();
  }, [gradeNum]);

  return (
    <div className="Grade">
      <h1>Grade {gradeNum} Kanji</h1>
      <div className="GradedKanjiMiniCards">
        {gradedKanji.length > 0 &&
          gradedKanji.map(kanji => <KanjiMiniCard kanji={kanji} />)}
      </div>
    </div>
  );
};

export default Grade;
