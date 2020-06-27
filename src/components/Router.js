import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";

import Home from "../components/Home";
import About from "../components/About";
import Topics from "../components/Topics";
import Topic from "../components/Topic";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/topics" exact component={Topics} />
        <Route path="/topics/:Id" exact component={Topic} />
      </Switch>
    );
  }
}
export default Router;
