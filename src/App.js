import React, { Component } from "react";
import {Provider} from 'react-redux';
import store from './store';
import "./styles.css";

import Header from "./components/Header";
import Router from "./components/Router";
import Mentor from "./components/Mentor";
import Footer from "./components/Footer";

const App =()=>{
    return (
      <Provider store={store}>
      <div className="App">
        <Header/>
        <Router />
        <Mentor />
        <Footer />
      </div>
      </Provider>
    );
}
export default App;
