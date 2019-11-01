import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MentorProfile from "./components/MentorProfile";
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'devicon/devicon.git/devicon.css'
import 'devicon/devicon.git/devicon-colors.css'
import 'font-mfizz/dist/font-mfizz.css'


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={App} />
                <Route path="/mentor/profile/:mentorId" exact component={MentorProfile} />
            </Switch>
        </BrowserRouter>, 
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(); 
