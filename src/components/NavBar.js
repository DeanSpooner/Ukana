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
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">1</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">2</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">3</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">4</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">5</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">6</p>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="navLink numbered">8</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
