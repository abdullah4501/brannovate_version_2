import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css';
import image from '../../assets/images/screens/screen-1.png';
import svg from '../../assets/images/shapes/blurry-shape-1.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import solutions2 from "../../assets/images/illustrations/ill_hero_2.png";
const HeroSection = () => {
  // Create a ref for the element that will be typed
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize AOS with your options
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 50,
      easing: "cubic-bezier(0.77, 0, 0.175, 1)",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom"
    });

    // Initialize Typed.js on the referenced element if it exists
    if (typedElement.current) {
      const options = {
        strings: JSON.parse(typedElement.current.dataset.strings),
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 1000,
        fadeOut: true,
        loop: true,
      };
      const typed = new Typed(typedElement.current, options);

      // Clean up Typed.js instance on unmount
      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="hero-section style-1 overflow-hidden gradient-bg pt-30 pb-15 pb-lg-20 pt-xl-36">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-12">
            <div className="text-center">
              <div className="position-relative z-1">
                <p className="color-topheading" data-aos="fade-up-sm">
                Your LinkedIn Growth Partner
                </p>
                <h1 className="text-dark mb-8" data-aos="fade-up-sm" data-aos-delay="150">
                Build Your LinkedIn Presence<br />Without Overthinking <br />
                  <span
                    ref={typedElement}
                    className="fw-bold text-gradient-1 typed-animation"
                    data-strings='["Your Brand", "Your Voice", "One AI Agent to Make It All Happen"]'
                  >
                    Product Description
                  </span>
                </h1>
                <a
                  href="https://ai.brannovate.com/"
                  className="btn btn-lg btn-gradient-1"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  Start Posting - It's Free
                </a>
              </div>
              <div data-aos="fade-up-sm" data-aos-delay="300">
                <div className="image-with-shape">
                  <img
                    src={svg}
                    alt=""
                    className="shape animate-scale"
                  />
                  <div className="mt-12 rounded-5 border border-primary shadow-lg overflow-hidden position-relative z-1">
                    <img
                      className="img-fluid d-inline-block"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0 hero_section_list">
                <li>Fetch Trending Topics Across 28+ Countries</li>
                <li>Generate Posts in One Click</li>
                <li>Schedule and Publish Posts Instantly</li>
              </ul>
            </div>
            <div className="additional_hero_sec wow fadeInUp" data-wow-delay="100ms">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="">
                    <h3>
                    You're a professional. You know the value of being active on <span style={{color:'#0000ff'}}>LinkedIn.</span>
                    </h3>
                    <p>Growing your reach, shaping your professional brand, building credibility in your circle.</p>
                    <p style={{color:'#0000ff', fontWeight: '600'}}>But there's a catch.</p>
                    <div className='box'>
                      <h4>
                        You ask yourself:
                      </h4>
                      <ul className="solutions-two__content-one-points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>
                            What should I post today?
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>
                            Is this topic even relevant?
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>
                            How do I write something that actually gets noticed?
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="solutions-two__content-one-btn-box">
                      <Link to="https://ai.brannovate.com/" className="thm-btn solutions-two__content-one-btn">
                        <FontAwesomeIcon icon={faPlus} /> Get Started
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="">
                      <div className="solutions-two__content-one-img">
                        <img src={solutions2} alt="" />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default HeroSection;
