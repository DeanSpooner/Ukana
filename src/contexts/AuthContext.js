// RootContext.js
import React, { useState } from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUkanaUser, setCurrentUkanaUser] = useState("");

  if (localStorage.getItem("ukanaUser") && currentUkanaUser === "") {
    setCurrentUkanaUser(JSON.parse(localStorage.getItem("user")));
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        username,
        setUsername,
        password,
        setPassword,
        currentUkanaUser,
        setCurrentUkanaUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
