import { useState, useEffect } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import RandomKanji from "./RandomKanji";
import Grade from "./Grade";
import KanjiLookup from "./KanjiLookup";
import Hiragana from "./Hiragana";
import Katakana from "./Katakana";
import Genki from "./Genki";
import SearchedWord from "./SearchedWord";
import GetKanji from "../requests/GetKanji";
import AddVocab from "./admin/AddVocab";
import AddKanji from "./admin/AddKanji";

function App() {
  const [kanji, setKanji] = useState(["一"]);
  const [searchedWord, setSearchedWord] = useState("");

  useEffect(() => {
    async function fetchKanji() {
      setKanji(await GetKanji());
    }
    return fetchKanji();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setSearchedWord={setSearchedWord} />
        <Switch>
          <Route
            exact
            path="/ukana"
            render={props => <Home {...props} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/login"
            render={props => <Login {...props} />}
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
            path="/ukana/gradeS"
            render={props => <Grade {...props} gradeNum={8} kanji={kanji} />}
          />
          <Route
            exact
            path="/ukana/kanji"
            render={props => <KanjiLookup {...props} />}
          />
          <Route
            exact
            path="/ukana/hiragana"
            render={props => <Hiragana {...props} />}
          />
          <Route
            exact
            path="/ukana/katakana"
            render={props => <Katakana {...props} />}
          />
          <Route
            exact
            path="/ukana/genki"
            render={props => <Genki {...props} />}
          />
          <Route
            exact
            path="/ukana/searchedWord"
            render={props => (
              <SearchedWord {...props} searchedWord={searchedWord} />
            )}
          />
          <Route
            exact
            path="/ukana/addvocab"
            render={props => <AddVocab {...props} />}
          />
          <Route
            exact
            path="/ukana/addkanji"
            render={props => <AddKanji {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
