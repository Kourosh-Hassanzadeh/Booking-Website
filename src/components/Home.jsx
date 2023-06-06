import React, { useState } from "react";
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";

const Home = () => {
  return (
    <>
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
            <div class="carousel-caption d-none d-md-block">
              <h1>Special Room</h1>
              <h2>Italy</h2>
              <p>
                Greetings from your friends at the Island Hotel! Last year you
                told me how much you enjoyed your dinner at Little Italy Café
                down the street. Would you like me to make you a reservation for
                Saturday night?
              </p>
              <a
                className="btn btn-dark"
                href="https://www.expedia.com/Hotel-Search?regionId=86&locale=en_US&siteid=1&semcid=US.UB.GOOGLE.DT-c-EN.HOTEL&semdtl=a114081206034.b1124958296283.g1kwd-302131476227.e1c.m1CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE.r157ab4a9c0ee993575c8dbf08b1ad02d8495bc09d2db43b35e0546e3098b5e29b.c1.j12364.k12380.d1617908600926.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gad=1&gclid=CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE"
                target="_blank"
                rel="noreferrer"
              >
                SEE MORE...
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
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-primary">Special Location</h1>
              <h2>Hawai</h2>
              <p className="text-white bg-dark">
                Greetings from your friends at the Island Hotel! Last year you
                told me how much you enjoyed your dinner at Little Italy Café
                down the street. Would you like me to make you a reservation for
                Saturday night?
              </p>
              <a
                className="btn btn-dark"
                href="https://www.expedia.com/Hotel-Search?regionId=86&locale=en_US&siteid=1&semcid=US.UB.GOOGLE.DT-c-EN.HOTEL&semdtl=a114081206034.b1124958296283.g1kwd-302131476227.e1c.m1CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE.r157ab4a9c0ee993575c8dbf08b1ad02d8495bc09d2db43b35e0546e3098b5e29b.c1.j12364.k12380.d1617908600926.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gad=1&gclid=CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE"
                target="_blank"
                rel="noreferrer"
              >
                SEE MORE...
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
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-white">Special Holidays</h1>
              <h2>Antalia</h2>
              <p className="text-white">
                Greetings from your friends at the Island Hotel! Last year you
                told me how much you enjoyed your dinner at Little Italy Café
                down the street. Would you like me to make you a reservation for
                Saturday night?
              </p>
              <a
                className="btn btn-dark"
                href="https://www.expedia.com/Hotel-Search?regionId=86&locale=en_US&siteid=1&semcid=US.UB.GOOGLE.DT-c-EN.HOTEL&semdtl=a114081206034.b1124958296283.g1kwd-302131476227.e1c.m1CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE.r157ab4a9c0ee993575c8dbf08b1ad02d8495bc09d2db43b35e0546e3098b5e29b.c1.j12364.k12380.d1617908600926.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gad=1&gclid=CjwKCAjwsvujBhAXEiwA_UXnAGRb-TyVSBtbl342iZDtovxd06hMEcv9avtXxr2VjW-WoUOTEJgm7BoC52wQAvD_BwE"
                target="_blank"
                rel="noreferrer"
              >
                SEE MORE...
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
          <span class="carousel-control-prev-icon bg-info" aria-hidden="true" style={{width:"30px", height:"30px"}}></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon bg-info" aria-hidden="true" style={{width:"30px", height:"30px"}}></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Home;
