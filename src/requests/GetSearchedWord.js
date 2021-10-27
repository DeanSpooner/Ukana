/* eslint-disable no-console */

import axios from "axios";

const GetSearchedWord = (word, setWordResults) => {
  const endpoint = `https://thingproxy.freeboard.io/fetch/http://beta.jisho.org/api/v1/search/words?keyword=${word}`;

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
