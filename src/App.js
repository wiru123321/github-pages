import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cv from "./components/CV/Cv";
import About from "./components/About/About";
import CoverLetter from "./components/CoverLetter/CoverLetter";
import MainPage from "./components/Main/MainPage";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cv" component={Cv} />
          <Route path="/about" component={About} />
          <Route path="/coverletter" component={CoverLetter} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
