import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
//import logo from "./logo.svg";

import Header from "./components/Header";
import Router from "./components/Router";
import Status from "./components/Status";
import Blink from 'react-blink-text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        {/* <Status /> */}
      </div>
    );
  }
}
export default App;