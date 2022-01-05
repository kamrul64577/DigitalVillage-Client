import React from "react";
import "./AboutRoute.css";
import img from "../../images/news-2.jpg";
import whyChooseUs from "../../images/why-choose-us.jpg";
const AboutRoute = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="about-route-main">
          <div className="about-route-content-wrapper">
            <div className="about-route-content-first">
              <p className="Little-sub">About Digital Village</p>
              <h1 className="fw-bolder">We Help you creat your selfbetter one</h1>
              <p>
                <i>
                  “Each color evokes different emotions for each individual. Your
                  emotions still depend on your individual life experience and how
                  you associate each color”.
                </i>
              </p>
              <div>
                <div>
                  <div></div>
                  <div>
                    <h5 className="fw-bolder">
                      {" "}
                      <i className="fas fa-paint-roller"></i> Professional Painting
                      Company
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
                <div>
                  <div>{/* //icon */}</div>
                  <div>
                    <h5 className="fw-bolder">
                      <i className="fas fa-brush"></i> Better Wallpapering Solution
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-route-content-second">
              <div className="about-route-content-second-content">
                <div className="d-flex shadow first-card">
                  <img src={img} alt="" />
                  <div className="first-card-text">
                    <h5>Exterior Painting</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                      eiusmod tempor incididunt.
                    </p>
                    <button className="view-details">
                      Read More <i className="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
                <div className="about-route-content-second-cards d-flex">
                  <div className="second-card shadow me-4">
                    <h3>Wall Painting</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipi scing elit sed
                      doeiusmod tempor ipsum dolor.
                    </p>
                    <button className="view-details">
                      Vew Details <i className="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                  <div className="second-card shadow">
                    <h3>Wall Painting</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipi scing elit sed
                      doeiusmod tempor ipsum dolor.
                    </p>
                    <button className="view-details">
                      Vew Details <i className="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="why-choose-us-main">
            <div className="why-choose-us-left">
              <img src={whyChooseUs} className="img-fluid" alt="" />
            </div>
            <div className="why-choose-us-right">
              <p className="Little-sub">Why Choose Us</p>
              <h1>
                We're The Best <br />
                Village In this area
              </h1>
              <p>
                <i>Big, bustling cities teeming with life and bright lights make fantastic places to visit, but small lesser-known villages often make even better ones. That being said, below is our list of the most beautiful villages around the world.</i>
              </p>
              <div className="why-choose-us-right-cards">
                <div className=" shadow me-4 why-choose-us-right-card1">
                  <h3>Modern Teaching Technology</h3>
                  <p>
                    In an interesting twist, one of the most beautiful villages around the world is a vamped up ’80s movie set. Abandoned not long after the filming of the.
                  </p>
                  <button className="view-details">
                    Vew Details <i className="fas fa-angle-double-right"></i>
                  </button>
                </div>
                <div className="second-card shadow why-choose-us-right-card1">
                  <h3>Expert on digital technology</h3>
                  <p>
                    1980 musical Popeye which featured the late comedian Robin Williams, Popeye Village is now home to quaint, colorful clusters of wooden buildings
                  </p>
                  <button className="view-details">
                    Vew Details <i className="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRoute;
