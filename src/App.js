import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cv from "./components/CV/Cv";
import About from "./components/About/About";
import MainPage from "./components/Main/MainPage";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/github-pages/">
        <Switch>
          <Route path="/cv" component={Cv} />
          <Route path="/about" component={About} />
          <Route path="/" component={MainPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
