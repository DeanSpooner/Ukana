/* eslint-disable no-console */

import axios from "axios";

const GetRandomKanji = (kanji, setRandomKanji) => {
  const randomNum = Math.floor(Math.random() * 2136);
  const endpoint = `https://kanjiapi.dev/v1/kanji/${kanji[randomNum]}`;

  axios
    .get(endpoint)
    .then(response => {
      setRandomKanji(response.data);
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetRandomKanji;
