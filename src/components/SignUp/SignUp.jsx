import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState();
  const [phonenNum, setphoneNum] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [error, setError] = useState();
  const [strength, setStrength] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !!password &&
      !!repeatPassword &&
      !!phonenNum &&
      !!email &&
      password === repeatPassword
    ) {
      setError("");
      navigate("/home");
    } else {
      setError("Passwords are not match !");
    }
  };

  const calculatePasswordStrength = (value) => {
    let score = 0;
    value = password;
    if (!value) {
      setStrength("");
      return;
    }

    // Add strength criteria based on your requirements
    if (value.length >= 8) {
      score++;
    }
    if (/[A-Z]/.test(value)) {
      score++;
    }
    if (/[a-z]/.test(value)) {
      score++;
    }
    if (/[0-9]/.test(value)) {
      score++;
    }
    if (/[@#$%^&+=]/.test(value)) {
      score++;
    }

    switch (score) {
      case 0:
        setStrength("Very Weak");
        break;
      case 1:
        setStrength("Weak");
        break;
      case 2:
        setStrength("Fair");
        break;
      case 3:
        setStrength("Good");
        break;
      case 4:
        setStrength("Strong");
        break;
      case 5:
        setStrength("Very Strong");
        break;
      default:
        setStrength("");
        break;
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    calculatePasswordStrength(value);
  };

  return (
    <>
      <div className="signUp-bg">
        <div className="signUp-body">
          <div className="signUp-box">
            <form className="signUp-form" action="" onSubmit={handleSubmit}>
              <h2 className="signUp-h">Sign Up</h2>
              {error && <div class="text-danger">{error}</div>}
              <div className="signUp-inputBox">
                <input
                  className="signUp-inp"
                  name="email"
                  id="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="signUp-sp">Email</span>
                <i></i>
              </div>

              <div className="signUp-inputBox">
                <input
                  className="signUp-inp"
                  name="number"
                  id="phoneNumber"
                  type="tel"
                  required
                  onChange={(e) => setphoneNum(e.target.value)}
                />
                <span className="signUp-sp">Phone Number</span>
                <i></i>
              </div>

              <div className="signUp-inputBox">
                <input
                  className="signUp-inp"
                  name="password"
                  id="password"
                  type="password"
                  required
                  onChange={handlePasswordChange}
                />
                <span className="signUp-sp">Password</span>
                <i></i>
              </div>
              <div className="text-white text-center mt-3 d-none ps-st">
                password strength : {strength}
              </div>
              <div className="signUp-inputBox">
                <input
                  className="signUp-inp"
                  name="repeatPassword"
                  id="repeatPassword"
                  type="password"
                  required
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <span className="signUp-sp">repeatPassword</span>
                <i></i>
              </div>
              <input className="signUp-sb" type="submit" value="Sign Up" />

              <div className="signUp-links justify-content-center">
                <a className="signUp-a" href="/login">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
