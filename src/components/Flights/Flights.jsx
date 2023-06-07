import React from "react";
import "./style.css";
const Flights = () => {
  return (
    <>
      <div className="bg-img">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 justify-content-start pl-5">
              <form className="form p-4 mt-5" method="post" action="#">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="from">From?</label>
                      <input
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
                      <label for="to">To?</label>
                      <input
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
                      <label for="departure">departure Date</label>
                      <input
                        type="date"
                        name="departure"
                        id="departure"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="return">Return Date</label>
                      <input type="date" name="return" id="return" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <label for="passengers">Passengers</label>
                    <input
                      type="number"
                      name="passengers"
                      id="passengers"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group">
                    <button class="btn btn-light test" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 justify-content-center">
              <div className="text">
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
