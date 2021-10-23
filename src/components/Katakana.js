import React from "react";
import KanaMiniCard from "./KanaMiniCard";
import { kanaArray } from "../data/Kana";
import "../styles/Kana.css";

const Katakana = () => {
  return (
    <div className="Katakana">
      {kanaArray.map(kana =>
        kana.romaji !== "" ? (
          <KanaMiniCard kana={kana.katakana} romaji={kana.romaji} />
        ) : (
          <div className="emptyCard" />
        )
      )}
    </div>
  );
};

export default Katakana;
