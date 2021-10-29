/* eslint-disable no-console */

import axios from "axios";

const GetSearchedWord = (word, setWordResults) => {
  const finalWord = word.toLowerCase();
  const endpoint = `https://secret-ocean-49799.herokuapp.com/https://jisho.org/api/v1/search/words?keyword=${finalWord}`;

  axios
    .get(endpoint)
    .then(response => {
      console.log(response.data.data);
      setWordResults(response.data.data);
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetSearchedWord;
