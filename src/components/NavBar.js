import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import ukanaLogo from "../images/ukana-logo2.png";

const NavBar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/ukana">
            <img src={ukanaLogo} alt="Ukana logo" className="ukanaLogo"></img>
          </Link>
        </li>
        <li>
          <Link className="item non-home" to="/ukana/random">
            <p className="NavLink">Random Kanji</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
