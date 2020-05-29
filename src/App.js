import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Cv from "./components/CV/Cv";
import About from "./components/About/About";
import MainPage from "./components/Main/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cv" component={Cv} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;