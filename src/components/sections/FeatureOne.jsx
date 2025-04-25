import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icon images
import icon1 from "../../assets/images/icons/ai-content-writing.png";
import icon2 from "../../assets/images/icons/schedule.png";
import icon3 from "../../assets/images/icons/countries.png";
import icon4 from "../../assets/images/glitch.gif";
import icon5 from "../../assets/images/icons/ai-chat.png";
import icon6 from "../../assets/images/icons/trending.png";
import icon7 from "../../assets/images/icons/post.png";
import star1 from "../../assets/images/shapes/feature-one-star-1.png";
import star2 from "../../assets/images/shapes/feature-one-star-2.png";
import star3 from "../../assets/images/shapes/feature-one-star-3.png";
import star5 from "../../assets/images/shapes/feature-one-star-5.png";
import star6 from "../../assets/images/shapes/feature-one-star-6.png";
import star7 from "../../assets/images/shapes/feature-one-star-7.png";
import star4 from "../../assets/images/shapes/feature-one-star-4.png";
import star8 from "../../assets/images/shapes/feature-one-star-8.png";
import solutions3 from "../../assets/images/illustrations/ill_hero_1.png";
import q3 from "../../assets/images/illustrations/q3new.png";
import q2 from "../../assets/images/illustrations/q2new.png";
import q1 from "../../assets/images/illustrations/q1new.png";


const starMapping = {
  1: star1,
  2: star2,
  3: star3,
  5: star5,
  6: star6,
  7: star7,
};

const FeatureOne = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="feature-one">
      <div className="container">
        <div className="feature-one__inner">
          <p className="color-topheading text-center" data-aos="fade-up-sm">
            Sound familiar?
          </p>
          <h2 className="feature-one__title">
          You’re not alone & <br />you don’t have to guess <span>anymore</span>
          </h2>
          <p className="text-center">
            Introducing our personal AI LinkedIn Agent, built for professionals like you<br /> who want to show up — smartly, consistently, and authentically.
          </p>
          <div className="feature-one__btn-box">
            <a href="https://ai.brannovate.com/sign-up" className="thm-btn feature-one__btn">
              <i className="fa fa-plus"></i> Get Started Free
            </a>
          </div>
          <div className="row" style={{marginTop: '45px', marginBottom: '25px'}}>
            <div className="col-lg-4 mb-4">
              <div className="usp-card p-5 ">
                <div className='illustration'>
                  <img src={q1} alt="" />
                </div>
                <div className='head '>
                  <div className="d-flex">
                    <div className="icon">
                          <i className="fa fa-check"></i>
                    </div>
                    <h3>Find Trending Topics in Seconds</h3>
                  </div>
                  <p>Instantly browse top topics from 7+ categories in 28+ countries—so you always know exactly what to post next.</p>
                  <h5>Find Your Perfect Topic </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="usp-card p-5 " style={{borderColor:'#f2cf19'}}>
                <div className='illustration'>
                  <img src={q2} alt="" 
                  />
                </div>
                <div className='head '>
                  <div className="d-flex">
                    <div className="icon">
                          <i className="fa fa-check"></i>
                    </div>
                    <h3>Create Posts with One Click</h3>
                  </div>
                  <p>
                  Our AI agent transforms any topic into a complete LinkedIn post in seconds—just hit “Generate” and skip the writing headache.
                  </p>

                  <h5>Generate Your Post</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="usp-card p-5 " style={{borderColor:'#0000ff4f'}}>
                <div className='illustration'>
                  <img src={q3} alt="" />
                </div>
                <div className='head text-left'>
                  <div className="d-flex">
                    <div className="icon">
                          <i className="fa fa-check"></i>
                    </div>
                    <h3>Stand Out with Influencer Posts</h3>
                  </div>
                  <p>Write in the style of leading LinkedIn voices so your content feels authentic and engaging—no generic AI fluff.</p>
                  <h5>Publish with Confidence</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <div data-aos="fade-up-sm" data-aos-delay="300">
            <div className="image-with-shape">
                <img
                  className="img-fluid d-inline-block"
                  src={solutions3}
                  alt=""
                />
            </div>
          </div> */}
          {/* <h2 className="feature-one__title mt-12">
          From content struggle to <br />LinkedIn <span style={{color:'#ff0000'}}>success</span>
          </h2>
          <p className="text-center">
            Let our AI agent handle the heavy lifting while you focus on building meaningful professional relationships.
          </p>
          <div className="feature-one__main-content-box">
            <div className="feature-one__color-overly-1 flaot-bob-y"></div>
            <div className="feature-one__color-overly-2 flaot-bob-x"></div>
            <div className="feature-one__color-overly-3 img-bounce"></div>
            <div className="feature-one__main-content-top">
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon6} alt="Trending Topics Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      Global Trending <br />Topics
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon1} alt="Content Generation Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      One-Click Post <br />Generation
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="feature-one__main-content-middle">
              { [1, 2, 3, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className={`feature-one__start-${num} ${num % 2 === 0 ? "float-bob-x" : "float-bob-y"}`}
                >
                  <img src={starMapping[num]} alt={`Star ${num}`} />
                </div>
              ))}
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon3} alt="Select Topic Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      28+ <br />Countries
                    </h5>
                  </div>
                </li>
                <li className="sm-hide">
                  <div className="feature-one__cpu-icon-box">
                    <img src={icon4} alt="Scheduling Icon" />
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon2} alt="Schedule Posts Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      Schedule & Automate
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            <div className="feature-one__main-content-bottom">
              <div className="feature-one__start-4 zoominout">
                <img src={star4} alt="Star 4" />
              </div>
              <div className="feature-one__start-8 float-bob-x">
                <img src={star8} alt="Star 8" />
              </div>
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon5} alt="Post Generation Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      Preview & <br />Publish
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon7} alt="Post Scheduling Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      Post Directly <br />or Schedule
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
  
};

export default FeatureOne;
