import React from "react";
import "./style.css";

const Hotels = () => {
  return (
    <>
      <div className="hotel-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 justify-content-start pl-5 mt-5">
              <form className="form p-4 mt-5" method="post" action="#">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="hotel-lb" for="city">
                        City
                      </label>
                      <input
                        className="hotel-inp"
                        type="text"
                        name="city"
                        id="city"
                        placeholder="city"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="hotel-lb" for="passengers">
                        Passengers
                      </label>
                      <input
                        className="hotel-inp"
                        type="number"
                        name="passengers"
                        id="passengers"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="hotel-lb" for="Check-in Date">
                        Check-in Date
                      </label>
                      <input
                        className="hotel-inp"
                        type="date"
                        name="Check-in Date"
                        id="Check-in Date"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="hotel-lb" for="Check-out Date">
                        Check-out Date
                      </label>
                      <input
                        className="hotel-inp"
                        type="date"
                        name="Check-out Date"
                        id="Check-out Date"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <button className="btn btn-light hotel-btn" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 justify-content-center test">
              <div className="text-hotel">
                Experience the joy of traveling
                <br />
                with us
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
