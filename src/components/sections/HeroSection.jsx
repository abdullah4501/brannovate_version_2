import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css';
import image from '../../assets/images/screens/screen-6.png';
import svg from '../../assets/images/shapes/blurry-shape-1.svg';
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
          <div className="col-lg-9">
            <div className="text-center">
              <div className="position-relative z-1">
                <p className="color-topheading" data-aos="fade-up-sm">
                  Best AI Copywriting Tool
                </p>
                <h1 className="text-dark mb-8" data-aos="fade-up-sm" data-aos-delay="150">
                  A 10X Faster Way To Write Your <br />
                  <span
                    ref={typedElement}
                    className="fw-bold text-gradient-1 typed-animation"
                    data-strings='["Linkedin Posts", "News Article", "SEO Content", "Product Description"]'
                  >
                    Product Description
                  </span>
                </h1>
                <a
                  href="login.html"
                  className="btn btn-lg btn-gradient-1"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  Start Writing - It's Free
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
              <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                <li>Fetchi Trending News 10X Faster</li>
                <li>Write Higher Converting Linkedin Posts</li>
                <li>Schedule Linkedin Posts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
