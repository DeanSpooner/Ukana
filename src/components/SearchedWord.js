import React, { useState, useEffect } from "react";
import GetSearchedWord from "../requests/GetSearchedWord";

const SearchedWord = ({ searchedWord }) => {
  const [wordResults, setWordResults] = useState([
    {
      slug: "",
      senses: [{ english_definitions: "" }],
      japanese: [{ reading: "" }],
    },
  ]);

  useEffect(() => {
    async function fetchWord() {
      await GetSearchedWord(searchedWord, setWordResults);
    }
    return fetchWord();
  }, [searchedWord]);

  return (
    <div className="SearchedWord">
      <h1>
        {searchedWord}:{" "}
        {wordResults.length === 0 ? "Search failed!" : wordResults[0].slug}
      </h1>
      <p>
        Japanese reading:{" "}
        {wordResults.length === 0
          ? "Ukana cannot find your word. Please check your spelling!"
          : wordResults[0].japanese[0].reading}
      </p>
      <p>
        Definition:{" "}
        {wordResults.length === 0
          ? "Ukana cannot find your word. Please check your spelling!"
          : wordResults[0].senses[0].english_definitions[0]}
      </p>
    </div>
  );
};

export default SearchedWord;
