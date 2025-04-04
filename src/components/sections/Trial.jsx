import React from 'react';
import image from "../../assets/images/shapes/free-trail-start-1.png";
import image2 from "../../assets/images/shapes/free-trail-start-2.png";
import image3 from "../../assets/images/shapes/free-trail-start-3.png";
import image4 from "../../assets/images/shapes/free-trail-start-4.png";
const Trial = () => {
  return (
    <section className="free-trail">
      <div className="container">
        <div className="free-trail__wrap">
          <div
            className="free-trail__shape-3"
            style={{ backgroundImage: "url(src/assets/images/shapes/free-trail-shape-3.png)" }}
          ></div>
          <div className="free-trail__shape-1 float-bob-x"></div>
          <div className="free-trail__start-1 zoominout">
            <img src={image} alt="" />
          </div>
          <div className="free-trail__start-2 float-bob-y">
            <img src={image2} alt="" />
          </div>
          <div className="free-trail__start-3 float-bob-x">
            <img src={image3} alt="" />
          </div>
          <div className="free-trail__start-4 zoominout">
            <img src={image4} alt="" />
          </div>
          <div className="free-trail__inner">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline-dark">14 Day’s Free Trail</span>
              </div>
              <h2 className="section-title__title2">
                Be part of the future of BrandBot Let’s <br /> Create Something
              </h2>
            </div>
            <p className="free-trail__text">
              Choose a topic &amp; create something better than before, get started from today. <br />
              No Credit Card Required
            </p>
            <div className="free-trail__btn-box">
              <a href="contact.html" className="thm-btn-two free-trail__btn">
                Get Started Free <i className="icon-up-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trial;
