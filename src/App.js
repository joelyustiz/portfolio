import React from "react";
import logo from "./logo.svg";
import "./css/Reset-styles.css";
import "./App.css";
import Home from "./view/Home/Home";
import { language } from "./util/data";

function App(props) {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
