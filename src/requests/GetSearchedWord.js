/* eslint-disable no-console */

import axios from "axios";

const GetSearchedWord = word => {
  const endpoint = `https://jisho.org/api/v1/search/words?keyword=banana`;

  axios
    .get(endpoint)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetSearchedWord;
