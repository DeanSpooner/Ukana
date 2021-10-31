import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link, useHistory } from "react-router-dom";
import ukanaLogo from "../images/ukana-logo2.png";

const NavBar = ({ setSearchedWord }) => {
  const [typedWord, setTypedWord] = useState("");
  const [isHover, setIsHover] = useState(null);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchedWord(typedWord);
    setTypedWord("");
    history.push({
      pathname: "/ukana/searchedWord",
    });
  };

  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li>
          <Link className="item" to="/ukana">
            <img src={ukanaLogo} alt="Ukana logo" className="ukanaLogo"></img>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink worded">Random Kanji</p>
          </Link>
        </li>
        <li className="item non-home">
          <p className="navLink gradedKanji">Graded Kanji:</p>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade1">
            <p className="navLink numbered">1</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade2">
            <p className="navLink numbered">2</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade3">
            <p className="navLink numbered">3</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade4">
            <p className="navLink numbered">4</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade5">
            <p className="navLink numbered">5</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/grade6">
            <p className="navLink numbered">6</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/gradeS">
            <p className="navLink numbered">S</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/hiragana">
            <p
              className={`navLink worded ${
                isHover === "hiragana" && "hiraganaHover"
              }`}
              onMouseEnter={e => {
                setIsHover("hiragana");
              }}
              onMouseLeave={e => {
                setIsHover(null);
              }}
            >
              H{isHover === "hiragana" && "iragana"}
            </p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/katakana">
            <p
              className={`navLink worded ${
                isHover === "katakana" && "katakanaHover"
              }`}
              onMouseEnter={e => {
                setIsHover("katakana");
              }}
              onMouseLeave={e => {
                setIsHover(null);
              }}
            >
              K{isHover === "katakana" && "atakana"}
            </p>
          </Link>
        </li>
        <li className="finalSpacer"></li>
        <li>
          <form className="wordSearchForm non-home" onSubmit={handleSubmit}>
            <input
              className="wordSearchInput"
              type="text"
              name="wordSearch"
              placeholder="Search English word..."
              onChange={event => setTypedWord(event.target.value)}
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
