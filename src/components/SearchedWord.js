import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { kanaArray } from "../data/Kana";
import { toRomaji } from "kana-romaji";
import KanjiMiniCard from "./KanjiMiniCard";
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
        Romaji:{" "}
        {wordResults.length === 0
          ? "Ukana cannot find your word. Please check your spelling!"
          : toRomaji(wordResults[0].japanese[0].reading).toLowerCase()}
      </p>
      <p>
        Definition:{" "}
        {wordResults.length === 0
          ? "Ukana cannot find your word. Please check your spelling!"
          : wordResults[0].senses[0].english_definitions[0]}
      </p>
      <p>
        Click on a kanji for its info:{" "}
        {wordResults[0].slug.split("").map(
          kanji =>
            kanaArray.filter(e => e.hiragana === kanji).length === 0 &&
            kanaArray.filter(e => e.katakana === kanji).length === 0 &&
            kanji !== "ゃ" &&
            kanji !== "ゅ" &&
            kanji !== "ょ" &&
            kanji !== "ぁ" &&
            kanji !== "ぃ" &&
            kanji !== "ぅ" &&
            kanji !== "ぇ" &&
            kanji !== "ぉ" &&
            kanji !== "っ" &&
            kanji !== "ャ" &&
            kanji !== "ュ" &&
            kanji !== "ョ" &&
            kanji !== "ァ" &&
            kanji !== "ィ" &&
            kanji !== "ゥ" &&
            kanji !== "ェ" &&
            kanji !== "ォ" &&
            kanji !== "ッ" &&
            kanji !== "ー" && (
              <Link
                className="item non-home"
                to={{ pathname: "/ukana/kanji", state: { kanji: kanji } }}
                key={kanji}
              >
                <KanjiMiniCard kanji={kanji} />
              </Link>
            )
        )}
      </p>
    </div>
  );
};

export default SearchedWord;
