import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles.css";

import "../assets/githublogo.png";


class Footer extends Component {


    render() {
        return (
            <div className="Footer">


                <Link to="/" >  Coding-AI </Link>


                {/* <p>Check us out on <a>GitHub</a></p> */}
            </div>
        );
    }
}
export default Footer;