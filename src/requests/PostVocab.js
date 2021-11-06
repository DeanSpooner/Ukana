/* eslint-disable no-console */

import axios from "axios";

const PostVocab = (vocab, setVocab, setSuccess) => {
  const endpoint = `https://ukana.herokuapp.com/genki/1/manyVocab`;
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
      setSuccess(response.data);
      setVocab([]);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default PostVocab;
