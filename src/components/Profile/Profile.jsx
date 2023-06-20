import React from "react";
import "./style.css";
import avatar from "../../assets/images/signUp.jpg";

const Profile = () => {
  function selectImage() {
    var file = document.getElementById("inImg");
    var img = document.getElementById("image");
    file.addEventListener(
      "change",
      (e) => (img.src = URL.createObjectURL(e.target.files[0]))
    );
  }
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#C3BEB9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mb-5">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      id="image"
                      className="img-fluid my-5 rounded-circle"
                    />
                    <input
                      className="btn-sm"
                      type="file"
                      name="inImg"
                      id="inImg"
                      accept="image/png, image/gif, image/jpeg"
                      onClick={selectImage}
                    />
                    <h5>Kourosh Hassanzadeh</h5>
                    <a
                      href="/login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <i className="far fa-edit mb-5 mr-2"></i>
                      Edit Profile
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">info@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <hr className="mt-3 mb-4" />
                      <div className="row d-flex">
                        <div className="col-12">
                          <h6>Address</h6>
                          <p>
                            <pre className="text-muted">
                              Mashhad, Sajjad BLVD, Yasaman St{" "}
                            </pre>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
