import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import rest from "../assets/images/rest.jpg";
import foods from "../assets/images/foods.jpg";
import resort from "../assets/images/resort.jpg";
import hotel from "../assets/images/hotelroom.jpg";
import yatch from "../assets/images/yatch.jpg";
import singleRoom from "../assets/images/single-room.jpg";
import doubleRoom from "../assets/images/double-room.jpg";
import familyRoom from "../assets/images/family-room.jpg";
import avatar from "../assets/images/avatar.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";

const Home = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={slide1}
                alt="First slide"
                style={{ height: "92.2vh" }}
              />
              <div class="carousel-caption">
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
            <div class="carousel-item">
              <img
                class="d-block w-100 h100"
                src={slide2}
                alt="Second slide"
                style={{ height: "92.2vh" }}
              />
              <div class="carousel-caption">
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
            <div class="carousel-item">
              <img
                class="d-block w-100 h100"
                src={slide3}
                alt="Third slide"
                style={{ height: "92.2vh" }}
              />
              <div class="carousel-caption">
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
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            ></span>
            <span class="sr-only">Next</span>
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

        <div className="container" style={{ paddingTop: "100px" }}>
          <h1 className="text-center mb-4">Commments</h1>
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
              <h3>Jean Smith</h3>
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
              <h3>Lia Fox</h3>
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
              <h3>John Doe</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
