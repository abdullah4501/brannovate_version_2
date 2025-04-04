import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const solutions = [
  { img: "src/assets/images/icons/ai-speech.png", title: "Speech To Text" },
  { img: "src/assets/images/icons/ai-content-writing.png", title: "AI Writing Tools" },
  { img: "src/assets/images/icons/ai-chat.png", title: "AI Chat Bot" },
  { img: "src/assets/images/icons/ai-image.png", title: "AI Image Generator" },
  { img: "src/assets/images/icons/ai-audio.png", title: "Text To Audio" },
  { img: "src/assets/images/icons/ai-code.png", title: "AI Code Generator" },
];

const Carousel = () => {
  return (
    <section className="solutions-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-dark">All AI Platform</span>
          </div>
          <h2 className="section-title__title2">
            All Possible Generative AI Solutions <br /> at One Place
          </h2>
        </div>
        <OwlCarousel
          className="solutions-one__carousel owl-theme"
          loop
          autoplay
          margin={24}
          nav={false}
          dots={false}
          smartSpeed={500}
          autoplayTimeout={10000}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1350: { items: 4 },
          }}
        >
          {solutions.map((solution, index) => (
            <div className="item" key={index}>
              <div className="solutions-one__single">
                <div className="solutions-one__icon">
                  <img src={solution.img} alt={solution.title} />
                </div>
                <h4 className="solutions-one__title">
                  <a href="about.html">{solution.title}</a>
                </h4>
                <p className="solutions-one__text">
                  Mastering the Art of AI Content Writing: Unleashing the Power of Automated Creativity
                </p>
                <a href="about.html" className="solutions-one__btn">
                  Explore More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Carousel;
