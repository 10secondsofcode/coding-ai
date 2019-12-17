import React, { Component } from "react";
import "./styles.css";

import Header from "./components/Header";
import Router from "./components/Router";
import Mentor from "./components/Mentor";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  search = val => {
    this.setState({ search: val });
  };

  render() {
    return (
      <div className="App">
        <Header handleSearch={this.search} />
        <Router />
        <Mentor search={this.state.search} />
        <Footer />
      </div>
    );
  }
}
export default App;
