import React from "react";
import "../styles/GenkiChapter.css";

const GenkiChapter = ({ chapter }) => {
  return (
    <div className="GenkiChapter">
      <h1>Chapter {chapter}</h1>
    </div>
  );
};

export default GenkiChapter;
