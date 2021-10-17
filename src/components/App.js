import { useState, useEffect } from "react";
import "../styles/App.css";
import Home from "./Home";
import react from "react";
import GetKanji from "../requests/GetKanji";

function App() {
  const [kanji, setKanji] = useState(["一"]);

  useEffect(() => {
    async function fetchKanji() {
      setKanji(await GetKanji());
    }
    return fetchKanji();
  }, []);

  return (
    <div className="App">
      <Home kanji={kanji}></Home>
    </div>
  );
}

export default App;
