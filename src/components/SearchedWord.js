import React, { useState, useEffect } from "react";
import GetSearchedWord from "../requests/GetSearchedWord";
import "../styles/KanjiCard.css";

const SearchedWord = ({ word }) => {
  const [wordResults, setWordResults] = useState({});

  useEffect(() => {
    async function fetchWord() {
      setWordResults(await GetSearchedWord());
    }
    return fetchWord();
  }, []);

  return (
    <div className="SearchedWord">
      <h1>{word}</h1>
    </div>
  );
};

export default SearchedWord;
