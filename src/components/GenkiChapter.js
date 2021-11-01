import React, { useState, useEffect } from "react";
import GetGenkiChapter from "../requests/GetGenkiChapter";
import GenkiVocabTable from "./GenkiVocabTable";
import GenkiKanjiTable from "./GenkiKanjiTable";
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
      {genkiChapterData.vocab.length > 0 && (
        <GenkiVocabTable vocab={genkiChapterData.vocab} />
      )}
      {genkiChapterData.kanji.length > 0 && (
        <GenkiKanjiTable kanji={genkiChapterData.kanji} />
      )}
    </div>
  );
};

export default GenkiChapter;
