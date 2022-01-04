import React from "react";
import "./News.css";
import Fade from "react-reveal/Fade";
import paint from "../../../images/news-2.jpg";
import recent1 from "../../../images/news-1.jpg";
import recent2 from "../../../images/news-2.jpg";
import recent3 from "../../../images/news-3.jpg";
import recent4 from "../../../images/news-1.jpg";
const News = () => {
  return (
    <div className="latest-news-main">
      <div className="">
        <p className="text-center">Our News</p>
        <h1 className="text-center">Latest News</h1>
        <p className="text-center">
          Here we have our all latest news. you will get
            Here we have our all latest news. you will get 
          Here we have our all latest news. you will get
        </p>
      </div>
      <div className="latest-news-card-wrapper">
        <div className="latest-news-card">
          <Fade left>
            <div className="card">
              <img src={paint} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5>'The village wouldn't have burned if the administration'</h5>
                <small className="small">3 june 2021</small>
                <p className="card-text">It was raining from 12 noon on Wednesday in Pirganj, Rangpur. I reached Borokarimpur of</p>
                <button className="read-more-btn">
                  Read More <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
            </div>
          </Fade>
        </div>
        <div className="latest-news-card">
          <div className="card">
            <img src={recent3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>Desolate villages face famine in Madagascar drought</h5>
              <small className="small">3 june 2021</small>
              <p className="card-text">
                Nothing to eat, nothing to plant. The last rain in Ifotaka fell in May, for two hours.
              </p>
              <button className="read-more-btn">
                Read More <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Fade right>
          <div className="recent-news-main">
            <h5 className="mb-4">Rcent News</h5>
            <div className="recent-news-content">
              <div className="recent-news d-flex">
                <div>
                  <img src={recent1} alt="" />
                </div>
                <div className="recent-news-text">
                  <p>How to protect your damage wall</p>
                  <small className="small">3 june 2021</small>
                </div>
              </div>

              <div className="recent-news d-flex">
                <div>
                  <img src={recent2} alt="" />
                </div>
                <div className="recent-news-text">
                  {" "}
                  <p>How to protect your damage wall</p>
                  <small className="small">3 june 2021</small>
                </div>
              </div>

              <div className="recent-news d-flex">
                <div>
                  <img src={recent3} alt="" />
                </div>
                <div className="recent-news-text">
                  <p>How to protect your damage wall</p>
                  <small className="small">3 june 2021</small>
                </div>
              </div>

              <div className="recent-news d-flex">
                <div>
                  <img src={recent4} alt="" />
                </div>
                <div className="recent-news-text">
                  <p>How to protect your damage wall</p>
                  <small className="small">3 june 2021</small>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default News;
