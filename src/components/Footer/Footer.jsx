import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 border-right footer-columns">
              <h2 className="text-white">KOUROSH HSZ</h2>
              <i className="fa-solid fa-location-dot text-white"></i> 125 WEST
              26TH STREET
              <br /> SUITE 600 NEW YORK, NY 10011
            </div>
            <div className="col-md-4 border-right footer-columns">
              <h2>CONTACT</h2>
              <i className="fa-solid fa-phone text-white mr-1"></i>
              TELEPHONE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (012)
              345-6789
              <hr color="white" />
              <i className="fa-solid fa-envelope text-white mr-1"></i>
              Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Bookin@gmail.com
            </div>
            <div className="col-md-4 footer-columns">
              <h2>NEWSLETTER</h2>
              <p className="footer-email-text">
                SIGN UP FOR OUR NEWSLETTER, AND WE’LL KEEP YOU UPDATED ON ALL
                EVENTS AT FLAWLES!
              </p>

              <form className="text-center" action="">
                <div className="form-group">
                  <input
                    className="form-control footer"
                    type="email"
                    placeholder="your email"
                  />
                </div>
                <button className="btn w-100" type="submit">
                  Submit
                  <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="row text-white justify-content-center mt-4">
            <h3 className="mr-2 mt-1">FOLLOW US</h3>
            <div></div>
            <a className="footer-logos" href="facebook.com">
              <i className="fa-brands fa-facebook text-white mr-2"></i>
            </a>
            <a className="footer-logos" href="twitter.com">
              <i className="fa-brands fa-twitter text-white mr-2"></i>
            </a>
            <a className="footer-logos" href="telegram.com">
              <i className="fa-brands fa-telegram text-white mr-2"></i>
            </a>
            <a className="footer-logos" href="instagram.com">
              <i className="fa-brands fa-instagram text-white mr-2"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
<>
  <footer></footer>
</>;
