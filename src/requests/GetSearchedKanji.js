/* eslint-disable no-console */

import axios from "axios";

const GetSearchedKanji = (kanji, setSearchedKanji) => {
  const endpoint = `https://kanjiapi.dev/v1/kanji/${kanji}`;

  axios
    .get(endpoint)
    .then(response => {
      setSearchedKanji(response.data);
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetSearchedKanji;
