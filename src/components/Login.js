import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  canBeSubmitted() {
    const { password } = this.state;
    if (password.length > 4) {
      return true;
    }
    return false;
  }

  handleOnChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value, emailError: false });
  };


  //debe de ir en un action
  handleLoginSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser(email,password,this.props.closeModal);
   
  };

  render() {
    let { error } = this.props.user;
    return (
      <div className="login-form">
        <div className="row">
          <div className="col-6 mx-auto mt-5">
            <h1>Login Form </h1>
            <div className="col-12">
              <form onSubmit={this.handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="10seconds@gmail.com"
                    name="email"
                    onChange={this.handleOnChange}
                  />
                  <small id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleOnChange}
                  />
                  <small id="emailHelp" className="form-text">
                    Minimum password length should be greater than 4.
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!this.canBeSubmitted()}
                  onClick={this.handleLoginSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
