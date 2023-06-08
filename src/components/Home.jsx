import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import rest from "../assets/images/rest.jpg";
import foods from "../assets/images/foods.jpg";
import resort from "../assets/images/resort.jpg";
import hotel from "../assets/images/hotel.jpg";
import yatch from "../assets/images/yatch.jpg";
import singleRoom from "../assets/images/single-room.jpg";
import doubleRoom from "../assets/images/double-room.jpg";
import familyRoom from "../assets/images/family-room.jpg";
import avatar from "../assets/images/avatar.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";

const Home = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                style={{ height: "92.2vh" }}
              />
              <div className="carousel-caption">
                <h1>Montana Resort</h1>
                <h2>Unlock to enjoy the view of Martine</h2>
                <a
                  className="btn btn-dark"
                  href="https://discoveringmontana.com/best-luxury-resorts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEE MORE ...
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h100"
                src={slide2}
                alt="Second slide"
                style={{ height: "92.2vh" }}
              />
              <div className="carousel-caption">
                <h1 className="text-white">Life Is Beautiful</h1>
                <h2>Unlock to enjoy the view of Martine</h2>
                <a
                  className="btn btn-dark"
                  href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmrhudsonexplores.com%2Fmr-hudson-on%2Fthe-most-beautiful-waterfalls-in-the-world%2F&psig=AOvVaw2tIWWUO_PyCHXmhVCwqGZp&ust=1686156170484000&source=images&cd=vfe&ved=0CBMQjhxqFwoTCIC9n6-Lr_8CFQAAAAAdAAAAABAO"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEE MORE ...
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 h100"
                src={slide3}
                alt="Third slide"
                style={{ height: "92.2vh" }}
              />
              <div className="carousel-caption">
                <h1 className="text-white">Live In Paradise</h1>
                <h2>Unlock to enjoy the view of Martine</h2>
                <a
                  className="btn btn-dark"
                  href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.earth%2Fbeautiful-natural-places-in-the-world%2F&psig=AOvVaw38K9_uNSI6HxfJJyjjXPRB&ust=1686154713164000&source=images&cd=vfe&ved=0CBMQjhxqFwoTCPjWi_iFr_8CFQAAAAAdAAAAABAQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  SEE MORE ...
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="container" style={{ paddingTop: "100px" }}>
          <div className="row">
            <div className="col-md-4 mt-5">
              <h2 style={{ fontWeight: "bold" }}>Hey There!</h2>
              <p>
                Far far away, behind the word mountains, far
                <br /> from the countries Vokalia and Consonantia,
                <br /> there live the blind texts. Separated they live in
                <br /> Bookmarksgrove right at the coast of the
                <br /> Semantics, a large language ocean.
              </p>
              <a
                className="btn btn-danger mt-3 mb-2 text-white"
                style={{ borderRadius: "2rem" }}
                href="https://www.freepik.com/premium-video/a-young-mother-with-a-girl-with-two-pigtails-resting-in-nature-playing-with-an-air-kite_53765"
                target={"_blank"}
                rel="noreferrer"
              >
                Watch The Video
              </a>
            </div>
            <div className="col-2"></div>
            <div className="col-md-6">
              <img
                src={rest}
                alt="rest"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingTop: "100px" }}>
          <p>You Can Visit</p>
          <div className="row">
            <div className="col-md-3">
              <a
                className="btn btn-light"
                href="https://canadianbudgetbinder.com/2017/01/24/25-popular-hotel-food-ideas-save-money/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img
                  className="img-fluid"
                  src={foods}
                  alt="food"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p>Suggested Foods</p>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn btn-light"
                href="https://www.cntraveler.com/gallery/best-resorts-in-the-world"
              >
                <img
                  className="img-fluid"
                  src={resort}
                  alt="resort"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p>Suggested Resorts</p>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn btn-light"
                href="https://www.cntraveler.com/gallery/best-new-hotels-in-the-world-hot-list"
              >
                <img
                  className="img-fluid"
                  src={hotel}
                  alt="hotel"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p>Suggested Hotels</p>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="btn btn-light"
                href="https://www.travelandleisure.com/trip-ideas/luxury-travel/hotels-with-in-house-yacht-programs"
              >
                <img
                  className="img-fluid"
                  src={yatch}
                  alt="yatch"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p>Suggested Yatch</p>
              </a>
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingTop: "100px" }}>
          <h1>Rooms</h1>
          <div className="row mt-3">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={singleRoom}
                alt="singleRoom"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 mt-5">
              <h1>Single Room</h1>
              <p className="mt-3">
                A single room is a room intended for one person
                <br /> to stay in. Choose from twin or single rooms, all
                <br /> of which are comfortable. Each guest has her own
                <br /> single room, or shares a double room.
                <br /> Single rooms are available at a supplement of $25.
              </p>
            </div>
          </div>

          <div className="row mt-5" style={{ direction: "rtl" }}>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={doubleRoom}
                alt="familyRoom"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-5 mt-5">
              <h1>Double Room</h1>
              <p className="mt-3">
                A double room is a hotel room with a double bed that can
                <br />
                accommodate two people. Double rooms come in different
                <br /> sizes, and the room size can affect the room rate. A
                double room can be a good option for couples or solo travelers
                who want more space than a single room.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={familyRoom}
                alt="familyRoom"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 mt-5">
              <h1>Family Room</h1>
              <p className="mt-3">
                Generally a family room means the room is larger than the
                standard room and will accommodate 4- 6 people, usually with an
                extra twin bed or sleeper sofa.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "100px", backgroundColor: "#f2f4fb" }}>
          <div className="text-center mb-5">
            <h2>Events</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia,
              <br /> there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the
              <br /> Semantics, a large language ocean.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card h-100" style={{ width: "20rem" }}>
                  <img className="card-img-top" src={event1} alt="event1" />
                  <div className="card-body">
                    <h6 style={{ color: "grey" }}>FEBRUARY 26, 2023</h6>
                    <h5 className="card-title mb-4">
                      <a
                        className="text-dark"
                        href="https://www.kiwi.com/stories/10-top-tips-for-a-long-haul-flight/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        Travel Hacks to Make Your Flight More Comfortable
                      </a>
                    </h5>
                    <p className="card-text">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100" style={{ width: "20rem" }}>
                  <img className="card-img-top" src={event2} alt="event2" />
                  <div className="card-body">
                    <h6 style={{ color: "grey" }}>FEBRUARY 26, 2023</h6>
                    <h5 className="card-title mb-4">
                      <a
                        className="text-dark"
                        href="https://www.oberlo.com/blog/best-travel-jobs-to-make-money-traveling"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        5 Job Types That Aallow You To Earn As You Travel The
                        World
                      </a>
                    </h5>
                    <p className="card-text">
                      Separated they live in Bookmarksgrove right at the coast
                      of the Semantics, a large language ocean.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100" style={{ width: "20rem" }}>
                  <img className="card-img-top" src={event3} alt="event3" />
                  <div className="card-body">
                    <h6 style={{ color: "grey" }}>FEBRUARY 26, 2023</h6>
                    <h5 className="card-title mb-4">
                      <a
                        className="text-dark"
                        href="https://www.nytimes.com/wirecutter/gifts/best-for-travelers/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        30 Great Ideas On Gifts For Travelers
                      </a>
                    </h5>
                    <p className="card-text">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. t is a
                      paradisematic country, in which roasted parts of
                      sentences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "100px" }}>
          <h2>Your Questions</h2>
          <div id="accordion">
            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseOne"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  How many days before the flight should we buy the plane
                  ticket?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseOne" className="collapse">
                <div className="card-body">
                  It is possible to book plane tickets months in advance. But
                  sometimes the price of plane tickets becomes cheaper in the
                  days close to the flight. Therefore, if your situation allows,
                  postpone the online booking of plane tickets to the days near
                  the flight. Of course, if you plan to travel during busy
                  periods such as holidays, you should book your plane tickets
                  as soon as possible.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseTwo"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="collapsed card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  What is the allowed amount of baggage per flight?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseTwo" className="collapse">
                <div className="card-body">
                  The amount of baggage allowance depends on the flight class
                  and the fare class of the ticket. When buying a plane ticket
                  online, you can see the amount of baggage allowance in the
                  ticket information. Of course, if you exceed the limit, you
                  will have to pay a fine.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseThree"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  When can rail tickets be booked in Tatkal?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseThree" className="collapse">
                <div className="card-body">
                  Tatkal rail ticketing enables you to purchase train tickets at
                  the last minute. The Tatkal quota opens one day before the
                  departure date from the station where the train will depart.
                  Tatkal booking begins at 10 a.m. for air-conditioned (AC)
                  classes and 11 a.m. for non-air-conditioned (Non-AC) classes.
                  When booking Tatkal tickets, keep in mind that you must select
                  the Tatkal quota.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseFour"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="collapsed card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  What is Premium Tatkal booking?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseFour" className="collapse">
                <div className="card-body">
                  The Indian railways have introduced Premium Tatkal tickets,
                  which feature dynamic rates, for booking online train tickets.
                  It’s worth noting that ticket costs rise as the number of
                  reservations grows. Ticket prices are determined by the number
                  of seats available and the cost of reserving.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseFive"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="collapsed card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseFive"
                >
                  At what time is the check-in for the room?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseFive" className="collapse">
                <div className="card-body">
                  Normally our rooms are available from 14:00 pm. For all our
                  guest booking from this web site, we offer the possibility of
                  an early check-in (except when the room is still busy by the
                  previous guest due to other requests). We also offer the
                  luggage storage service in the hotel at the arrival.
                </div>
              </div>
            </div>

            <div className="card">
              <div
                className="d-flex card-header header"
                data-toggle="collapse"
                href="#collapseSix"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <a
                  className="collapsed card-link collapse-text text-dark"
                  data-toggle="collapse"
                  href="#collapseSix"
                >
                  At what time is the check-out for the room?
                </a>
                <i className="fa-sharp fa-solid fa-angle-down ml-auto"></i>
              </div>
              <div id="collapseSix" className="collapse">
                <div className="card-body">
                  Check-out is at 12:00 pm. For all the guests booking directly
                  from our website, there is the possibility to postpone the
                  check-out at 11.00 am on request if it is possible for us as
                  well. We allow every guest to leave the luggage in our storage
                  for free, with no time restriction.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container mb-3"
          style={{
            marginTop: "100px",
            backgroundColor: "#e8e8e8",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-center mb-4">Comments</h1>
          <div className="row">
            <div className="col-md-4">
              <img
                className="rounded-circle mx-auto mb-2"
                src={avatar}
                alt="avatar"
                style={{ borderRadius: "50%", width: "30%", display: "block" }}
              />
              <p>
                “A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.”
              </p>
              <h3 className="text-center mb-5">Jean Smith</h3>
            </div>

            <div className="col-md-4">
              <img
                className="rounded-circle mx-auto mb-2"
                src={avatar2}
                alt="avatar2"
                style={{ borderRadius: "50%", width: "30%", display: "block" }}
              />
              <p>
                i would recommend this site to anyone thinking of making a
                booking. absolutely spot on. could not ask for anything else
                great site easy and fast.
                <br />
                <br />
              </p>
              <h3 className="text-center mb-5">Lia Fox</h3>
            </div>
            <div className="col-md-4">
              <img
                className="rounded-circle mx-auto mb-2"
                src={avatar3}
                alt="avatar3"
                style={{ borderRadius: "50%", width: "30%", display: "block" }}
              />
              <p>
                This is absolutely the best and easiest booking service ever! It
                is the only one I use. On a recent trip within France I met a
                woman who also uses it and was of the same opinion.
                <br />
              </p>
              <h3 className="text-center">John Doe</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
