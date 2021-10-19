import { useState, useEffect } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import RandomKanji from "./RandomKanji";
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
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/ukana"
            render={props => <Home {...props} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/random"
            render={props => <RandomKanji {...props} kanji={kanji} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
