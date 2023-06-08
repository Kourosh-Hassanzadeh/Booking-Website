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
                      <label className="train-from" for="from">
                        From?
                      </label>
                      <input
                        className="train"
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
                      <label className="train" for="to">
                        To?
                      </label>
                      <input
                        className="train"
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
                      <label className="train" for="departure">
                        departure Date
                      </label>
                      <input
                        className="train"
                        type="date"
                        name="departure"
                        id="departure"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="train" for="return">
                        Return Date
                      </label>
                      <input
                        className="train"
                        type="date"
                        name="return"
                        id="return"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <label className="train" for="passengers">
                      Passengers
                    </label>
                    <input
                      className="train"
                      type="number"
                      name="passengers"
                      id="passengers"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <button className="btn btn-light train" type="submit">
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
