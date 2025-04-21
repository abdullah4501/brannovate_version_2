import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

// Import images used in this component
import shapeOne from "../../assets/images/shapes/solutions-two-shape-1.png";
import solutions1 from "../../assets/images/shapes/solutions-two-shape-2.png";
import solutions2 from "../../assets/images/screens/screen-2.png";


const Solutions = () => {
  return (
    <section className="solutions-two py-10 py-lg-15" id="tools">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Dominate LinkedIn</span>
          </div>
          <h2 className="feature-one__title">
            Build Consistency. Gain Visibility.<br /> Grow Your <span>Brand.</span>
          </h2>
        </div>
  
        {/* Content One */}
        <div className="solutions-two__content-one wow fadeInUp" data-wow-delay="100ms">
          <div
            className="solutions-two__shape-1"
            style={{ backgroundImage: `url(${shapeOne})` }}
          ></div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-left">
                <div className="solutions-two__shape-2 zoominout">
                  <img src={solutions1} alt="" />
                </div>
                <div className="solutions-two__content-one-title-box">
                  <p>AI LinkedIn Presence</p>
                  <h3>
                    Plan, Schedule & Post Like a Boss
                  </h3>
                </div>
                <p className="solutions-two__content-one-text-1">
                Publish instantly or schedule for later. Track performance and build your LinkedIn presence effortlessly.
                </p>
                <ul className="solutions-two__content-one-points">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                      No more staring at the blinking cursor
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                      No more overthinking what to say
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                      Your professional voice deserves to be heard — without the hassle
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="solutions-two__content-one-btn-box">
                  <Link to="https://ai.brannovate.com/sign-up" className="thm-btn solutions-two__content-one-btn">
                    <FontAwesomeIcon icon={faPlus} /> Get Started Now - It's Free
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-right">
                <div className="solutions-two__content-one-img-box">
                  <div className="solutions-two__content-one-img">
                    <img src={solutions2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="solutions-two__content-two">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="solutions-two__content-two-single">
                <div className="solutions-two__content-two-top">
                  <div className="solutions-two__content-two-title-box">
                    <p>AI Chat Bot</p>
                    <h3>With FlowAI, you can chat 🤖 smarter, not harder.</h3>
                  </div>
                  <p className="solutions-two__content-two-text-1">
                    Mastering the Art of AI Content Writing: Unleashing the Power of Automated Creativity"
                  </p>
                  <div className="solutions-two__content-two-btn">
                    <Link to="/contact">
                      Start Chat<span className="icon-up-right-arrow"></span>
                    </Link>
                  </div>
                </div>
                <div className="solutions-two__content-two-img-box">
                  <div className="solutions-two__content-two-shape-1">
                    <img src={solutions3} alt="" />
                  </div>
                  <div className="solutions-two__content-two-img">
                    <img src={solutions4} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="100ms">
              <div className="solutions-two__content-two-single solutions-two__content-two-single-2">
                <div className="solutions-two__content-two-top">
                  <div className="solutions-two__content-two-title-box">
                    <p>AI Video Generator</p>
                    <h3>A wonderful video may be created by anyone. That includes you.</h3>
                  </div>
                  <p className="solutions-two__content-two-text-1">
                    By listening to our leading AI text to speech reader, you can breeze through papers, articles, PDFs, and emails.
                  </p>
                  <div className="solutions-two__content-two-btn">
                    <Link to="/about">
                      Try AI Video<span className="icon-up-right-arrow"></span>
                    </Link>
                  </div>
                </div>
                <div className="solutions-two__content-two-img-box">
                  <div className="solutions-two__content-two-img">
                    <img src={solutions5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
  
  
};

export default Solutions;
