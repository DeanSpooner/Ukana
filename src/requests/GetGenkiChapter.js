/* eslint-disable no-console */

import axios from "axios";

const GetGenkiChapter = genkiChapter => {
  const endpoint = `https://ukana.herokuapp.com/genki/${genkiChapter}`;

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

export default GetGenkiChapter;
