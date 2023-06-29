import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("");
  const [strengthColor, setStrengthColor] = useState("");
  const [isIconClicked, setIsIconClicked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !!password &&
      !!repeatPassword &&
      !!phoneNum &&
      !!email &&
      password === repeatPassword
    ) {
      setError("");
      navigate("/profile");
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

    if (value.length >= 6) {
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
        setStrength("Weak");
        setStrengthColor("red");
        break;
      case 1:
        setStrength("Weak");
        setStrengthColor("red");
        break;
      case 2:
        setStrength("Fair");
        setStrengthColor("yellow");
        break;
      case 3:
        setStrength("Fair");
        setStrengthColor("yellow");
        break;
      case 4:
        setStrength("Strong");
        setStrengthColor("green");
        break;
      case 5:
        setStrength("Very Strong");
        setStrengthColor("green");
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

  const handleClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  return (
    <>
      <div className="signUp-bg">
        <div className="signUp-box mb-5">
          <form className="signUp-form" onSubmit={handleSubmit}>
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
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <span className="signUp-sp">Phone Number</span>
              <i></i>
            </div>

            <div className="signUp-inputBox">
              <input
                className="signUp-inp"
                name="password"
                id="password"
                type={isIconClicked ? "text" : "password"}
                required
                onChange={handlePasswordChange}
              />

              <span className="signUp-sp">Password</span>

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
            {password !== "" && strength !== "" ? (
              <div
                className="text-center mt-3"
                style={{ color: strengthColor }}
              >
                password strength : {strength}
              </div>
            ) : null}

            <input className="signUp-sb" type="submit" value="Sign Up" />

            <div className="signUp-links justify-content-center">
              <a className="signUp-a" href="/login">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
