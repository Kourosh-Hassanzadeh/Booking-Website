import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="mt-2"
        style={{ height: "300px", backgroundColor: "#7a706f" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-4 border-right"
              style={{ marginTop: "70px", color: "white", height: "150px" }}
            >
              <h2 className="text-white">KOUROSH HSZ</h2>
              <i class="fa-solid fa-location-dot text-white"></i> 125 WEST 26TH
              STREET
              <br /> SUITE 600 NEW YORK, NY 10011
            </div>
            <div
              className="col-4 border-right"
              style={{ marginTop: "70px", color: "white" }}
            >
              <h2>CONTACT</h2>
              <i class="fa-solid fa-phone text-white mr-1"></i>
              TELEPHONE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (012)
              345-6789
              <hr color="white" />
              <i class="fa-solid fa-envelope text-white mr-1"></i>
              Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Bookin@gmail.com
            </div>
            <div
              className="col-4"
              style={{ marginTop: "70px", color: "white" }}
            >
              <h2>NEWSLETTER</h2>
              <p style={{ fontSize: "0.75rem" }}>
                SIGN UP FOR OUR NEWSLETTER, AND WE’LL KEEP YOU UPDATED ON ALL
                EVENTS AT FLAWLES!
              </p>
              <div className="row ml-1">
                <input
                  type="email"
                  placeholder="your email"
                  style={{ borderRadius: "5px", height: "40px" }}
                ></input>
                <button className="btn" type="submit">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row text-white justify-content-center mt-4">
            <h3 className="mr-2 mt-1">FOLLOW US</h3>
            <div></div>
            <a href="facebook.com" style={{ fontSize: "30px" }}>
              <i class="fa-brands fa-facebook text-white mr-2"></i>
            </a>
            <a href="twitter.com" style={{ fontSize: "30px" }}>
              <i class="fa-brands fa-twitter text-white mr-2"></i>
            </a>
            <a href="telegram.com" style={{ fontSize: "30px" }}>
              <i class="fa-brands fa-telegram text-white mr-2"></i>
            </a>
            <a href="instagram.com" style={{ fontSize: "30px" }}>
              <i class="fa-brands fa-instagram text-white mr-2"></i>
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
