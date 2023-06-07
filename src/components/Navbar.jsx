import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <nav
        class="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ backgroundColor: "#8c8873" }}
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a
                class="nav-link text-white"
                href="/Home"
                style={{ fontWeight: "bold" }}
              >
                <i class="fa-solid fa-house text-white mr-2"></i>
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="/Flights">
                <i class="fa-solid fa-plane text-white mr-2"></i>
                Flights
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="/Trains">
                <i class="fa-solid fa-train text-white mr-2"></i>
                Trains
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link text-white" href="/Hotels">
                <i class="fa-solid fa-bed text-white mr-2"></i>
                Hotels and Suits
              </a>
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
