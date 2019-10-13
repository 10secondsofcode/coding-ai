import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <div className="row"> 
                    <div className="col-6 mx-auto mt-5"> 
                        <h1>Login Form </h1>
                        <div className="col-12">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;