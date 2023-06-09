import React from "react";
import "./style.css";

const Trains = () => {
  return (
    <>
      <div className="train-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 justify-content-center">
              <div className="text-train">
                Experience the joy of traveling
                <br />
                with us
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6 justify-content-end pr-md-5">
              <form className="form p-4 mt-5" method="post" action="#">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="from">From?</label>
                      <input
                        className="train-inp"
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
                      <label className="train-lb" for="to">
                        To?
                      </label>
                      <input
                        className="train-inp"
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
                      <label className="train-lb" for="departure">
                        Departure Date
                      </label>
                      <input
                        className="train-inp"
                        type="date"
                        name="departure"
                        id="departure"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="train-lb" for="return">
                        Return Date
                      </label>
                      <input
                        className="train-inp"
                        type="date"
                        name="return"
                        id="return"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <label className="train-lb" for="passengers">
                      Passengers
                    </label>
                    <input
                      className="train-inp"
                      type="number"
                      name="passengers"
                      id="passengers"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <button className="btn btn-light train-btn" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trains;
