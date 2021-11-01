import React, { useState, useEffect } from "react";
import GetGenkiChapter from "../requests/GetGenkiChapter";
import "../styles/GenkiChapter.css";

const GenkiChapter = ({ chapter }) => {
  const [genkiChapterData, setGenkiChapterData] = useState({
    kanji: [],
    vocab: [],
  });

  useEffect(() => {
    async function fetchGenkiChapterData() {
      setGenkiChapterData(await GetGenkiChapter(chapter));
    }
    return fetchGenkiChapterData();
  }, [chapter]);

  return (
    <div className="GenkiChapter">
      <h1>Chapter {chapter}</h1>
      <h2>Vocabulary</h2>
      {genkiChapterData.vocab.map(vocab => (
        <>
          <p>{vocab.word}</p>
          <p>{vocab.reading}</p>
          <p>{vocab.meaning}</p>
        </>
      ))}
      <h2>Kanji</h2>
      {genkiChapterData.kanji.map(kanji => (
        <>
          <p>{kanji.kanji}</p>
          <p>{kanji.reading}</p>
          <p>{kanji.meaning}</p>
          <p>{kanji.examples}</p>
        </>
      ))}
    </div>
  );
};

export default GenkiChapter;
