import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import ukanaLogo from "../images/ukana-logo2.png";

const NavBar = () => {
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
            <p className="navLink">Random Kanji</p>
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
            <p className="navLink">Hiragana</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/katakana">
            <p className="navLink">Katakana</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
