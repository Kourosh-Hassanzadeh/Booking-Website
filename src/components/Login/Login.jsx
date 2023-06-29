import React from "react";
import { useState } from "react";
import "./style.css";

const Login = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const handleClick = () => {
    setIsIconClicked(!isIconClicked);
  };
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
                type={isIconClicked ? "text" : "password"}
                required
              />
              <span className="login-sp">Password</span>
              <i></i>
            </div>
            <div
              className="btn text-white"
              onClick={handleClick}
              style={{ minHeight: "1vh" }}
            >
              {isIconClicked ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
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
