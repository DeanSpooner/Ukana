import { useState, useEffect } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import RandomKanji from "./RandomKanji";
import Grade from "./Grade";
import KanjiLookup from "./KanjiLookup";
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
          <Route
            exact
            path="/ukana/grade1"
            render={props => <Grade {...props} gradeNum={1} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade2"
            render={props => <Grade {...props} gradeNum={2} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade3"
            render={props => <Grade {...props} gradeNum={3} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade4"
            render={props => <Grade {...props} gradeNum={4} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade5"
            render={props => <Grade {...props} gradeNum={5} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade6"
            render={props => <Grade {...props} gradeNum={6} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/grade8"
            render={props => <Grade {...props} gradeNum={8} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/kanji"
            render={props => <KanjiLookup {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
