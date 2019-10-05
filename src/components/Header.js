import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <p>
                    <Link to="/">Home</Link> | 
                    <Link to="/login">Login</Link> | 
                    <Link to="/about">About</Link> | 
                    <Link to="/topics">Topics</Link> |
                </p>
            </div>
        );
    }
}
export default Header;