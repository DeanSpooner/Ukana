/* eslint-disable no-console */

import axios from "axios";

const GetGradedKanji = gradedNum => {
  const endpoint = `https://kanjiapi.dev/v1/kanji/grade-${gradedNum}`;

  return axios
    .get(endpoint)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default GetGradedKanji;
