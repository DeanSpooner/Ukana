import React from "react";
import "../styles/KanjiMiniCard.css";

const KanjiMiniCard = ({ kanji }) => {
  return (
    <div className="KanjiMiniCard">
      <h1 className="KanjiMiniCardKanji">{kanji}</h1>
    </div>
  );
};

export default KanjiMiniCard;
