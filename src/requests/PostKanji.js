/* eslint-disable no-console */

import axios from "axios";

const PostKanji = kanjiObject => {
  const endpoint = `https://ukana.herokuapp.com/genki/1/manyKanji`;
  console.log("Axios running");
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
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error", error);
    });
};

export default PostKanji;
