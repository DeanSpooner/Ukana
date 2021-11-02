import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
