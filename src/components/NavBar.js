import React, { useState, useContext } from "react";
import "../styles/NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import ukanaLogo from "../images/ukana-logo2.png";
import userIcon from "../images/user.png";

const NavBar = ({ setSearchedWord }) => {
  const [typedWord, setTypedWord] = useState("");
  const [isHover, setIsHover] = useState(null);
  const history = useHistory();
  const ukanaUser = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchedWord(typedWord);
    setTypedWord("");
    history.push({
      pathname: "/ukana/searchedWord",
    });
  };

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("ukanaToken");
    ukanaUser.setCurrentUkanaUser("");
    localStorage.removeItem("ukanaUser");
    ukanaUser.setAuth(false);
    history.push("/ukana");
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
        <li>
          <Link className="item non-home" to="/ukana/genki">
            <p
              className={`navLink worded ${
                isHover === "genki" && "genkiHover"
              }`}
              onMouseEnter={e => {
                setIsHover("genki");
              }}
              onMouseLeave={e => {
                setIsHover(null);
              }}
            >
              G{isHover === "genki" && "enki"}
            </p>
          </Link>
        </li>
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
        {ukanaUser.currentUkanaUser.userType === "admin" && (
          <>
            <li>
              <Link className="item non-home" to="/ukana/addvocab">
                <p
                  className={`navLink worded ${
                    isHover === "vocab" && "vocabHover"
                  }`}
                  onMouseEnter={e => {
                    setIsHover("vocab");
                  }}
                  onMouseLeave={e => {
                    setIsHover(null);
                  }}
                >
                  単{isHover === "vocab" && "語"}
                </p>
              </Link>
            </li>
            <li>
              <Link className="item non-home" to="/ukana/addkanji">
                <p
                  className={`navLink worded ${
                    isHover === "kanji" && "kanjiHover"
                  }`}
                  onMouseEnter={e => {
                    setIsHover("kanji");
                  }}
                  onMouseLeave={e => {
                    setIsHover(null);
                  }}
                >
                  漢{isHover === "kanji" && "字"}
                </p>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link className="item non-home" to="/ukana/login">
            <img src={userIcon} className="userIcon worded" alt="User" />
          </Link>
        </li>
        {localStorage.getItem("ukanaToken") && (
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
