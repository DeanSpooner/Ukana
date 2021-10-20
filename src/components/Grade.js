import React, { useState, useEffect } from "react";
import GetGradedKanji from "../requests/GetGradedKanji";
import KanjiMiniCard from "./KanjiMiniCard";
import { Link } from "react-router-dom";

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
      <p>Click on a kanji for detailed information</p>
      <div className="GradedKanjiMiniCards">
        {gradedKanji.length > 0 &&
          gradedKanji.map(kanji => (
            <Link
              className="item non-home"
              to={{ pathname: "/ukana/kanji", state: { kanji: kanji } }}
              key={kanji}
            >
              <KanjiMiniCard kanji={kanji} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Grade;
