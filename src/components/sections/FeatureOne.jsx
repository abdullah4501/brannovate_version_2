import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icon images
import icon1 from "../../assets/images/icons/ai-content-writing.png";
import icon2 from "../../assets/images/icons/ai-image.png";
import icon3 from "../../assets/images/icons/ai-code.png";
import icon4 from "../../assets/images/icons/cpu.png";
import icon5 from "../../assets/images/icons/ai-chat.png";
import aiAudioIcon from "../../assets/images/icons/ai-audio.png";
import aiSpeechIcon from "../../assets/images/icons/ai-speech.png";

// Star images for middle section (numbers: 1,2,3,5,6,7)
import star1 from "../../assets/images/shapes/feature-one-star-1.png";
import star2 from "../../assets/images/shapes/feature-one-star-2.png";
import star3 from "../../assets/images/shapes/feature-one-star-3.png";
import star5 from "../../assets/images/shapes/feature-one-star-5.png";
import star6 from "../../assets/images/shapes/feature-one-star-6.png";
import star7 from "../../assets/images/shapes/feature-one-star-7.png";

// Star images for bottom section
import star4 from "../../assets/images/shapes/feature-one-star-4.png";
import star8 from "../../assets/images/shapes/feature-one-star-8.png";

// Optionally, if you have additional images to import for shapes, you can import them here as well.
// For example, if your "solutions-two-shape-2.png" is used elsewhere.

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
          <h2 className="feature-one__title">
            Transform Your LinkedIn Presence <br /> With Our 🤖 <span>AI Tool</span>
          </h2>
          <div className="feature-one__btn-box">
            <a href="contact.html" className="thm-btn feature-one__btn">
              <i className="fa fa-plus"></i> Get Started Free
            </a>
          </div>
          <div className="feature-one__main-content-box">
            <div className="feature-one__color-overly-1 flaot-bob-y"></div>
            <div className="feature-one__color-overly-2 flaot-bob-x"></div>
            <div className="feature-one__color-overly-3 img-bounce"></div>
            <div className="feature-one__main-content-top">
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon1} alt="AI Content Writing Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Write LinkedIn Posts</a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon2} alt="AI Image Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Schedule Posts</a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            {/* Middle Section */}
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
                      <img src={icon3} alt="AI Code Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Select Any Topic</a>
                    </h5>
                  </div>
                </li>
                <li className="sm-hide">
                  <div className="feature-one__cpu-icon-box">
                    <img src={icon4} alt="CPU Icon" />
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={icon5} alt="AI Chat Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Pick Trending News</a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            {/* Bottom Section */}
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
                      <img src={aiAudioIcon} alt="AI Audio Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">AI Generates Posts</a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src={aiSpeechIcon} alt="AI Speech Icon" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Post Directly or Schedule</a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
