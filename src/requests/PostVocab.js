/* eslint-disable no-console */

import axios from "axios";

const PostVocab = vocab => {
  const endpoint = `https://ukana.herokuapp.com/genki/1/manyVocab`;
  console.log("Axios running");
  const finalVocab = {
    vocabArray: vocab,
  };
  console.log(JSON.stringify(finalVocab));

  axios
    .post(endpoint, JSON.stringify(finalVocab), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default PostVocab;
