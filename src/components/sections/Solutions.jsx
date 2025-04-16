import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

// Import images used in this component
import shapeOne from "../../assets/images/shapes/solutions-two-shape-1.png";
import solutions1 from "../../assets/images/shapes/solutions-two-shape-2.png";
import solutions2 from "../../assets/images/screens/screen-2.png";
import solutions3 from "../../assets/images/shapes/solutions-two-content-two-shape-1.png";
import solutions4 from "../../assets/images/screens/screen-1.png";
import solutions5 from "../../assets/images/screens/screen-3.png";
import shapeContentThree from "../../assets/images/shapes/solutions-two-content-three-shape-1.png";

// Content Three image list imports
import solThreeImg1 from "../../assets/images/resource/solutions-two-content-three-img-1-1.jpg";
import solThreeImg2 from "../../assets/images/resource/solutions-two-content-three-img-1-2.jpg";
import solThreeImg3 from "../../assets/images/resource/solutions-two-content-three-img-1-3.jpg";
import solThreeImg4 from "../../assets/images/resource/solutions-two-content-three-img-1-4.jpg";
import solThreeImg5 from "../../assets/images/resource/solutions-two-content-three-img-1-5.jpg";
import solThreeImg6 from "../../assets/images/resource/solutions-two-content-three-img-1-6.jpg";
import solThreeImg7 from "../../assets/images/resource/solutions-two-content-three-img-1-7.jpg";
import solThreeImg8 from "../../assets/images/resource/solutions-two-content-three-img-1-8.jpg";
import solThreeImg9 from "../../assets/images/resource/solutions-two-content-three-img-1-9.jpg";
import solThreeImg10 from "../../assets/images/resource/solutions-two-content-three-img-1-10.jpg";

// Rating logos
import reviewLogo1 from "../../assets/images/review-logos/trustpilot_reviews_2.svg";
import reviewLogo2 from "../../assets/images/review-logos/capterra_reviews_2.svg";

const Solutions = () => {
  return (
    <section className="solutions-two" id="tools">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Dominate LinkedIn</span>
          </div>
          <h2 className="feature-one__title">
            Build Consistency. Gain Visibility.<br /> Grow Your <span>Brand.</span>
          </h2>
          <p>No more staring at the blinking cursor. No more overthinking what to say. Your professional voice deserves to be heard — without the hassle.</p>
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
                    Generate ✍️ Better LinkedIn Posts Instantly, The Future of AI-Powered Presence is Here
                  </h3>
                </div>
                <p className="solutions-two__content-one-text-1">
                  Mastering the Art of LinkedIn Engagement: Unleash AI to generate, schedule, and post directly while previewing content before it goes live.
                </p>
                <ul className="solutions-two__content-one-points">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                        Generate high-quality posts automatically from trending LinkedIn news.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                        Schedule and post directly to LinkedIn with just one click.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>
                        Preview and customize your post before publishing to ensure perfection.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="solutions-two__content-one-btn-box">
                  <Link to="https://ai.brannovate.com/" className="thm-btn solutions-two__content-one-btn">
                    <FontAwesomeIcon icon={faPlus} /> Get Started
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
  
        {/* Content Two */}
        {/* <div className="solutions-two__content-two">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="solutions-two__content-two-single">
                <div className="solutions-two__content-two-top">
                  <div className="solutions-two__content-two-title-box">
                    <p>AI Content Assistant</p>
                    <h3>Streamline Your LinkedIn Content with AI</h3>
                  </div>
                  <p className="solutions-two__content-two-text-1">
                    Generate relevant and engaging content for your LinkedIn network based on global trends, while keeping your voice intact.
                  </p>
                  <div className="solutions-two__content-two-btn">
                    <Link to="/contact">
                      Start Generating<span className="icon-up-right-arrow"></span>
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
                    <p>AI Post Preview</p>
                    <h3>Preview Your Post Before Publishing to Ensure Perfection</h3>
                  </div>
                  <p className="solutions-two__content-two-text-1">
                    See exactly how your post will appear on LinkedIn and make edits before going live.
                  </p>
                  <div className="solutions-two__content-two-btn">
                    <Link to="/about">
                      Try Post Preview<span className="icon-up-right-arrow"></span>
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
