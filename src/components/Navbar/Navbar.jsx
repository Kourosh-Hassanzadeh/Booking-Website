import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/Login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-bg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white navbar-home" to="/home">
                <i className="fa-solid fa-house text-white mr-2"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/flights">
                <i className="fa-solid fa-plane text-white mr-2"></i>
                Flights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/trains">
                <i className="fa-solid fa-train text-white mr-2"></i>
                Trains
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/hotels">
                <i className="fa-solid fa-bed text-white mr-2"></i>
                Hotels and Suits
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div id="google_translate_element"></div> */}
        <button className="btn btn-light" onClick={navigateToLogin}>
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;
