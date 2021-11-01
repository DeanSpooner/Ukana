import React from "react";
import "../styles/GenkiBar.css";
import { Link } from "react-router-dom";

const GenkiBar = ({ setChapter }) => {
  const handleChapterSelect = event => {
    setChapter(event.target.id.replace(/[^0-9]/g, "")); //parsing only digits from id name
  };

  return (
    <div className="GenkiBar">
      <ul className="genkiLinks">
        <li className="genkiLinksItem">
          <Link
            className="genkiItem"
            to="/ukana/genki/chapter"
            id="chapter1"
            onClick={handleChapterSelect}
          >
            Chapter 1
          </Link>
        </li>
        <li className="genkiLinksItem">
          <Link
            className="genkiItem"
            to="/ukana/genki/chapter"
            id="chapter2"
            onClick={handleChapterSelect}
          >
            Chapter 2
          </Link>
        </li>
        <li className="genkiLinksItem">
          <Link
            className="genkiItem"
            to="/ukana/genki/chapter"
            id="chapter3"
            onClick={handleChapterSelect}
          >
            Chapter 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GenkiBar;
