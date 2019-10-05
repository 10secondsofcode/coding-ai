import React, { Component } from "react";
import { Route } from "react-router-dom";
//import logo from "./logo.svg";

import Home from "../components/Home";
import About from "../components/About";
import Topics from "../components/Topics";
import Topic from "../components/Topic";
import Login from "../components/Login";

class Router extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/topics/:Id" exact component={Topic} />        
      </div>
    );
  }
}
export default Router;