import React from "react";
import "../styles/KanjiCard.css";

const KanjiCard = ({
  kanji,
  grade,
  meanings,
  heisig,
  kun,
  on,
  stroke,
  jlpt,
  name,
}) => {
  return (
    <div className="KanjiCard">
      <div className="KanjiCardHeader">
        <h1 className="KanjiCardKanji">{kanji}</h1>
        <h1 className="KanjiCardMeaning">{meanings && meanings[0]}</h1>
      </div>
      <p>Grade: {grade === 8 ? "S" : grade}</p>
      <p>
        Meanings:{" "}
        {meanings &&
          meanings.map(element => (
            <>
              {meanings[meanings.length - 1] !== element
                ? " " + element + ","
                : " " + element}
            </>
          ))}
      </p>
      <p>
        Kun readings:{" "}
        {kun && kun.length > 0
          ? kun.map(element => (
              <>
                {kun[kun.length - 1] !== element
                  ? " " + element + ","
                  : " " + element}
              </>
            ))
          : "none"}
      </p>
      <p>
        On readings:{" "}
        {on && on.length > 0
          ? on.map(element => (
              <>
                {on[on.length - 1] !== element
                  ? " " + element + ","
                  : " " + element}
              </>
            ))
          : "none"}
      </p>
      <p>
        Name readings:{" "}
        {name && name.length > 0
          ? name.map(element => (
              <>
                {name[name.length - 1] !== element
                  ? " " + element + ","
                  : " " + element}
              </>
            ))
          : "none"}
      </p>
      <p>Stroke count: {stroke}</p>
      <p>Old JLPT grade: {jlpt}</p>
      <p>Heisig keyname: {heisig}</p>
    </div>
  );
};

export default KanjiCard;
