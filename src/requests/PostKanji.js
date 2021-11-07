/* eslint-disable no-console */

import axios from "axios";

const PostKanji = (kanjiObject, setKanjiObject, setSuccess) => {
  const endpoint = `https://ukana.herokuapp.com/genki/1/manyKanji`;
  const finalKanji = {
    kanjiArray: kanjiObject,
  };
  console.log(JSON.stringify(finalKanji));

  axios
    .post(endpoint, JSON.stringify(finalKanji), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      setSuccess(response.data);
      setKanjiObject([]);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default PostKanji;
