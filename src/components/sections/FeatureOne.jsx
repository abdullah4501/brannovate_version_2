import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
            {/* Top Section */}
            <div className="feature-one__main-content-top">
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-content-writing.png" alt="" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Write LinkedIn Posts</a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-image.png" alt="" />
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
              {[1, 2, 3, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className={`feature-one__start-${num} ${num % 2 === 0 ? "float-bob-x" : "float-bob-y"}`}
                >
                  <img src={`src/assets/images/shapes/feature-one-star-${num}.png`} alt="" />
                </div>
              ))}
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-code.png" alt="" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Select Any Topic</a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__cpu-icon-box">
                    <img src="src/assets/images/icons/cpu.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-chat.png" alt="" />
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
                <img src="src/assets/images/shapes/feature-one-star-4.png" alt="" />
              </div>
              <div className="feature-one__start-8 float-bob-x">
                <img src="src/assets/images/shapes/feature-one-star-8.png" alt="" />
              </div>
              <ul className="feature-one__list">
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-audio.png" alt="" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">AI Generates Posts</a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="feature-one__single">
                    <div className="feature-one__icon">
                      <img src="src/assets/images/icons/ai-speech.png" alt="" />
                    </div>
                    <h5 className="feature-one__title-2">
                      <a href="about.html">Post Directly or Schedule</a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="feature-one__rating-box">
            <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
              <img
                className="img-fluid"
                src="src/assets/images/review-logos/trustpilot_reviews_2.svg"
                alt=""
              />
              <img
                className="img-fluid"
                src="src/assets/images/review-logos/capterra_reviews_2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
