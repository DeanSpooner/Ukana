import React from "react";
import KanaMiniCard from "./KanaMiniCard";
import { kanaArray } from "../data/Kana";
import "../styles/Kana.css";

const Hiragana = () => {
  return (
    <div className="Hiragana">
      {kanaArray.map(kana =>
        kana.romaji !== "" ? (
          <KanaMiniCard kana={kana.hiragana} romaji={kana.romaji} />
        ) : (
          <div className="emptyCard" />
        )
      )}
    </div>
  );
};

export default Hiragana;
