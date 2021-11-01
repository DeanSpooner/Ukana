import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import GenkiBar from "./GenkiBar";
import GenkiChapter from "./GenkiChapter";

const Genki = () => {
  const [chapter, setChapter] = useState("");

  return (
    <div className="Genki">
      <BrowserRouter>
        <GenkiBar setChapter={setChapter} />
        <Switch>
          <Route
            exact
            path="/ukana/genki/chapter"
            render={props => <GenkiChapter {...props} chapter={chapter} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Genki;
