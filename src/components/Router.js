import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";

import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import Mentors from "./Mentors";
import Topic from "./Topic";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/mentors" exact component={Mentors} />
        <Route path="/topics" exact component={Topics} />
        <Route path="/topics/:id" exact component={Topic} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}
export default Router;
