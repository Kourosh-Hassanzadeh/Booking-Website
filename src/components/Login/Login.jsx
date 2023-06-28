import React from "react";
import "./style.css";

const Login = () => {
  return (
    <>
      <div className="login-bg">
        <div className="login-box">
          <form className="login-form" action="/home">
            <h2 className="login-h">Login</h2>
            <div className="login-inputBox">
              <input
                className="login-inp"
                name="email"
                id="email"
                type="email"
                required
              />
              <span className="login-sp">email</span>
              <i></i>
            </div>

            <div className="login-inputBox">
              <input
                className="login-inp"
                name="password"
                id="password"
                type="password"
                required
              />
              <span className="login-sp">Password</span>
              <i></i>
            </div>
            <input className="login-sb" type="submit" value="Login" />
            <div className="login-links justify-content-center">
              <a className="login-a" href="/signUp">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
