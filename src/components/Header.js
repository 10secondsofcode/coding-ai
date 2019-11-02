import React, { Component } from "react";
// import Login from './Login';
import { Link } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Hi!",
      search: "",
      menu: true
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    const mobileNavState = this.state.menu === true ? false : true;
    
    this.setState({
      menu: mobileNavState
    });

    const navMenu = document.querySelector('.navbar-collapse');
    if (this.state.menu === true){
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
  };

  user = val => {
    this.setState({ username: val });
  };

  search = event => {
    this.setState({ search: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.search);
  };

  render() {
    return (
      <div className="main thememain-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light thememain-header">
            <Link to="/" className="navbar-brand" title="Coding-AI">  Coding-AI </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.showMenu}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" href="void" title="Coding-AI"> Home  <span className="sr-only">(current)</span> </Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link" href="void" title="Find a mentor"> Mentors  <span className="sr-only">(current)</span> </Link>
                
                </li>
                <li className="nav-item">
                <Link to="#" className="nav-link" href="void" title="Find a mentor"> About  <span className="sr-only">(current)</span> </Link>
                  
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" onSubmit={this.submit}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  onChange={this.search}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <Link to="/login">
                <button className="btn btn-login ml-2 whiteColor">Login</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
