import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const ukanaUser = useContext(AuthContext);

  const handleUsernameChange = event => {
    ukanaUser.setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    ukanaUser.setPassword(event.target.value);
  };

  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);

  const username = ukanaUser.username;

  const password = ukanaUser.password;

  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();
    await axios
      .post("https://ukana.herokuapp.com/login", {
        username,
        password,
      })
      .then(res => {
        if (!res.data.auth) {
          ukanaUser.setAuth(false);
          setAlert({ message: "User does not exist", isSuccess: false });
        } else {
          localStorage.setItem("ukanaToken", res.data.token);
          localStorage.setItem("ukanaUser", JSON.stringify(res.data));
          ukanaUser.setCurrentUkanaUser(
            JSON.parse(localStorage.getItem("ukanaUser"))
          );
          console.log(ukanaUser.currentUser);
          ukanaUser.setAuth(true);
          history.push("/ukana");
          ukanaUser.setUsername("");
          ukanaUser.setPassword("");
        }
      });
  };

  return (
    <div className="Home">
      <p className="welcome">Welcome to Ukana!</p>
      {!localStorage.getItem("ukanaToken") && (
        <div>
          <p className="login-message">Please login below:</p>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label htmlFor="ukanaUsername" className="login-input">
                Username:{" "}
              </label>
              <input
                className="login-input input"
                type="text"
                placeholder="Your Username..."
                name="ukanaUsername"
                value={ukanaUser.username}
                onChange={handleUsernameChange}
                required
              />
              <br />
              <label htmlFor="password" className="login-input">
                Password:{" "}
              </label>
              <input
                className="login-input input"
                type="password"
                placeholder="Your Password..."
                name="password"
                value={ukanaUser.password}
                onChange={handlePasswordChange}
                required
              />
              <br />
              <button type="submit" className="login-form-button">
                Login
              </button>
              <Alert message={alert.message} success={alert.isSuccess} />
              <br />
            </form>
          </div>
        </div>
      )}
      {localStorage.getItem("ukanaToken") && (
        <div className="loggedInHome">
          <p className="loggedInAs">
            You are logged in as{" "}
            <p className="loggedInAs loggedInAsUser">
              {" "}
              {ukanaUser.currentUkanaUser.username}
            </p>
            !
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
