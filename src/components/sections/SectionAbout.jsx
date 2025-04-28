import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

const starMapping = {
  1: star1,
  2: star2,
  3: star3,
  5: star5,
  6: star6,
  7: star7,
};


const FeaturesSection = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <section className="py-10 py-lg-15" id="section-about">
      <div className="container">

      {/* <div className="container">
        <div className="text-center mb-18">
          <h1 className="feature-one__title mb-0" data-aos="fade-up-sm" data-aos-delay="50">
          What our AI Agent can do for you<br className="d-none d-lg-block" />
          
          </h1>
        </div>
        <div className="row g-6 g-xl-14">
          {features.map((feature, index) => (
            <div className="col-lg-4" data-aos="fade-up-sm" data-aos-delay={200 + index * 50} key={index}>
              <div className="d-flex flex-column gap-6 flex-lg-row">
                <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-primary bg-opacity-10 text-primary border-primary border-opacity-25">
                  {feature.icon}
                </div>
                <div className="content">
                  <h4 className="mb-4">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="https://ai.brannovate.com/sign-up" className="btn btn-primary">
            Try Now - It's Free to Start <HiMiniArrowLongRight />
          </a>
        </div>
      </div> */}
          <h2 className="feature-one__title ">
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
          </div>
      </div>
    </section>
  );
};

// const features = [
//   {
//     title: "Stay Ahead With Trending Topics",
//     description:
//       "Get top-performing topics across 7+ categories from 28+ countries — always fresh, always relevant. Pick one. Done.",
//     icon: (
//       <FiTrendingUp size={20}/>
//     ),
//   },
//   {
//     title: "Create Magnetic Posts — Instantly",
//     description:
//       "One click = one polished, professional post. No brainstorming. No writer’s block. No fluff.",
//     icon: (
//       <LuSparkles size={20}/>
//     ),
//   },
//   {
//     title: "Tailor Content to Reflect You",
//     description:
//       "Tell the agent your thoughts or personal perspective — and watch your post get rewritten with your voice, your ideas, your tone.",
//     icon: (
//       <RxTarget size={20}/>
//     ),
//   },
//   {
//     title: "Edit & Format Like a Pro",
//     description:
//       "Want to tweak it? Add emojis, bullet points, or bold highlights? You’re in full control of how it looks.",
//     icon: (
//       <RiEditBoxLine size={20}/>
//     ),
//   },
//   {
//     title: "Got an Idea? Say It.",
//     description:
//       "Have a topic in mind? Just tell the agent — it'll shape your raw thought into a polished, engaging post that stands out.",
//     icon: (
//       <FaRegMessage size={20}/>
//     ),
//   },
//   {
//     title: "Posts That Don't Feel AI-Written",
//     description:
//       "Inspired by the top LinkedIn voices in your industry, your content is generated to feel real, relevant, and relatable. No robotic text — only posts worth reading.",
//     icon: (
//       <TbTableSpark size={20}/>
//     ),
//   },
// ];

export default FeaturesSection;
