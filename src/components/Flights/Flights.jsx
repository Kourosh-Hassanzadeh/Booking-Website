import React from "react";
import "./style.css";
const Flights = () => {
  return (
    <>
      <div className="flight-img">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 justify-content-start pl-5">
              <form className="form p-4 mt-5" action="#">
                {/* method = post */}
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="flight-lb" for="from">
                        From?
                      </label>
                      <input
                        className="flight-inp"
                        type="text"
                        name="from"
                        id="from"
                        placeholder="from?"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="flight-lb" for="to">
                        To?
                      </label>
                      <input
                        className="flight-inp"
                        type="text"
                        name="to"
                        id="to"
                        placeholder="to?"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="flight-lb" for="departure">
                        Departure Date
                      </label>
                      <input
                        className="flight-inp"
                        type="date"
                        name="departure"
                        id="departure"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="flight-lb" for="return">
                        Return Date
                      </label>
                      <input
                        className="flight-inp"
                        type="date"
                        name="return"
                        id="return"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <label className="flight-lb" for="passengers">
                      Passengers
                    </label>
                    <input
                      className="flight-inp"
                      type="number"
                      name="passengers"
                      id="passengers"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <button class="btn btn-light flight-btn" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 justify-content-center">
              <div className="text-flight">
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

export default Flights;
