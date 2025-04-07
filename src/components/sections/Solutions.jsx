import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

// Import images used in this component
import shapeOne from "../../assets/images/shapes/solutions-two-shape-1.png";
import solutions1 from "../../assets/images/shapes/solutions-two-shape-2.png";
import solutions2 from "../../assets/images/resource/solutions-two-content-one-img-1.jpg";
import solutions3 from "../../assets/images/shapes/solutions-two-content-two-shape-1.png";
import solutions4 from "../../assets/images/resource/solutions-two-content-two-img-1.jpg";
import solutions5 from "../../assets/images/resource/solutions-two-content-two-img-2.jpg";
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
            <span className="section-title__tagline">Pur AI Solutions</span>
          </div>
          <h2 className="section-title__title">
            Generative AI Designed for creators. Make <br /> your Life Easier with <span>AIMug</span>
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
                  <p>AI Writing Tools</p>
                  <h3>
                    Write ✍️ Better Content Faster, The Future of AI Writing Tools is Finally here
                  </h3>
                </div>
                <p className="solutions-two__content-one-text-1">
                  Mastering the Art of AI Content Writing: Unleashing the <br />
                  Power of Automated Creativity"
                </p>
                <ul className="solutions-two__content-one-points">
                  <li>
                    <div className="icon">
                      <i class="fa fa-check"> </i>
                    </div>
                    <div className="text">
                      <p>
                        There are more than <span>60+</span> use cases and templates to pick from to meet all of your writing demands.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i class="fa fa-check"> </i>
                    </div>
                    <div className="text">
                      <p>Let's Communicate with your customers with emotions</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i class="fa fa-check"> </i>
                    </div>
                    <div className="text">
                      <p>Choose the best AI copy for your message &amp; save as a document</p>
                    </div>
                  </li>
                </ul>
                <div className="solutions-two__content-one-btn-box">
                  <Link to="/about" className="thm-btn solutions-two__content-one-btn">
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
        <div className="solutions-two__content-two">
          <div className="row">
            {/* Solutions Two Single Start */}
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
            {/* Solutions Two Single End */}

            {/* Solutions Two Single Start */}
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
            {/* Solutions Two Single End */}
          </div>
        </div>

        {/* Content Three */}
        <div className="solutions-two__content-three wow fadeInUp" data-wow-delay="100ms">
          <div
            className="solutions-two__content-three-shape-1"
            style={{ backgroundImage: `url(${shapeContentThree})` }}
          ></div>
          <div className="row">
            <div className="col-xl-6">
              <div className="solutions-two__content-three-left">
                <ul className="solutions-two__browser-dot">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="solutions-two__content-three-shape-2"></div>
                <ul className="row solutions-two__content-three-img-list">
                  <li className="col-xl-3 col-lg-3 col-md-3">
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg1} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg2} alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="col-xl-3 col-lg-3 col-md-3">
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg3} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg4} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg5} alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="col-xl-3 col-lg-3 col-md-3">
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg6} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg7} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg8} alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="col-xl-3 col-lg-3 col-md-3">
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg9} alt="" />
                      </div>
                    </div>
                    <div className="solutions-two__content-three-img-single">
                      <div className="solutions-two__content-three-img">
                        <img src={solThreeImg10} alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="solutions-two__content-three-right">
                <div className="solutions-two__content-three-title-box">
                  <p>AI Writing Tools</p>
                  <h3>Generate Outstanding AI Images Just Using Prompt 🌄</h3>
                </div>
                <p className="solutions-two__content-three-text-1">
                  <span>AIMug</span> is an artificial art generator that turns your ideas into one-of-a kind artwork and photographs in seconds. Finally, you'll have the perfect image to go with your statement.
                </p>
                <div className="solutions-two__content-three-points-box">
                  <ul className="solutions-two__content-three-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>1000+ Styles</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Custom Sizes</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Oil Painting</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>+ And Much More</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="solutions-two__content-three-points solutions-two__content-three-points-2 list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Photo-realistic scenes</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Graphics</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Isometric Vector Graphics</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="solutions-two__content-three-btn-box">
                  <Link to="/about" className="thm-btn solutions-two__content-three-btn">
                    <FontAwesomeIcon icon={faPlus} /> Generate AI Image
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Box */}
        <div className="feature-one__rating-box">
          <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
            <img className="img-fluid" src={reviewLogo1} alt="" />
            <img className="img-fluid" src={reviewLogo2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
