import React from "react";
import "../styles/Kana.css";

const KanaMiniCard = ({ kana, romaji }) => {
  return (
    <div className="KanaMiniCard">
      <h1 className="KanaMiniCardKana">{kana}</h1>
      <h1 className="KanaMiniCardRomaji">{romaji}</h1>
    </div>
  );
};

export default KanaMiniCard;
