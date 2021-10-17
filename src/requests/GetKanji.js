/* eslint-disable no-console */

import axios from "axios";

const GetKanji = () => {
  const endpoint = "https://kanjiapi.dev/v1/kanji/joyo";

  return axios
    .get(endpoint)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetKanji;
