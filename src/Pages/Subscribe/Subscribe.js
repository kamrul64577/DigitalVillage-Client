import React from "react";
import "./Subscribe.css";
import Fade from "react-reveal/Fade";
const Subscribe = () => {
  return (
    <>
      <Fade bottom>
        <div className="container">
          <div className="Subscribe-container ">
            <div className="Subscribe">
              <div className="Subscribe-text">
                <h2 className="fw-bolder">Join To Get Our Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div class="input-group mb-3 subscribe-input">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Put your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary subscribe-btn text-white "
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Subscribe;
