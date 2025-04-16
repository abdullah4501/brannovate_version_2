import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/illustrations/feature-illustration-1-blue.svg';
import img2 from '../../assets/images/illustrations/feature-illustration-2-blue.svg';
import img3 from '../../assets/images/illustrations/feature-illustration-3-blue.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

// Import images used in this component
import shapeOne from "../../assets/images/shapes/solutions-two-shape-1.png";
import solutions1 from "../../assets/images/shapes/solutions-two-shape-2.png";
import solutions2 from "../../assets/images/illustrations/feature-illustration-3-blue.svg";


const featuresData = [
  {
    id: 1,
    title: "Rewrite Your Narrative:",
    description:
      "Your profile isn’t just optimized—it’s reimagined as a magnetic storytelling hub, from headline to Featured posts.",
    image: img1,
    linkText: "Get Started Free",
    linkHref: "/contact",
  },
  {
    id: 2,
    title: "Curate Your Crown Jewels",
    description:
      "We mine your career’s defining moments, turning boardroom wins and industry revolutions into iconic carousels and articles that trend for weeks.",
    image: img2,
    linkText: "Get Started Free",
    linkHref: "/contact",
  },
  {
    id: 3,
    title: "Orchestrate Your Audience",
    description:
      "Daily engagement, elite network growth, and strategic comment diplomacy—we turn passive scrollers into devoted followers.",
    image: img3,
    linkText: "Get Started Free",
    linkHref: "/contact",
  },
  {
    id: 4,
    title: "Dominate the Algorithm",
    description:
      "Our experts don’t just post—they hack timelines, ensuring your content lands in feeds of investors, media, and future collaborators.",
    image: img3,
    linkText: "Become Unignorable in 90 Days—or It’s Free.",
    linkHref: "/contact",
  },
];


const Features = ({ extraClassList = "" }) => {
  return (
    <>
    
    <section className={`py-10 py-lg-15 ${extraClassList}`}>
      <div className="container">
        <div className="text-center">
          <h2>But what if you want<br /> more than <span style={{color:'#ff0000'}}>algorithms?</span></h2>
          <p>
          For leaders who demand bespoke brilliance—where every word, visual, and interaction is meticulously<br />crafted to mirror your unique leadership DNA—we offer Brannovate Apex.
          </p>
          <p>Imagine a world-class team of personal brand architects, content strategists, and LinkedIn whisperers
          working in lockstep to:</p>
        </div>
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`row g-6 gx-lg-14 gx-xl-20 align-center ${
              index === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="150">
              <div className="content">
                <h3 className="mb-8">{feature.title}</h3>
                <p className="mb-6">{feature.description}</p>
                {feature.points && (
                  <ul className="list-unstyled list-check mb-8">
                    {feature.points.map((point, i) => (
                      <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="icon">
                          <g>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m3.75 9 3.75 3.75 7.5-7.5"
                            />
                          </g>
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={feature.linkHref} className="arrow-link arrow-link-primary text-primary gap-3">
                  <span>{feature.linkText}</span>
                  <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                      stroke="currentColor"
                      strokeWidth="1.21"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
              <div className="feature-img">
                <img src={feature.image} alt="Feature" className="img-fluid" />
              </div>
            </div>
          </div>
        ))}
        <p className="text-center">Book a free LinkedIn dominance audit today. Our experts will dissect your profile,<br /> map your blind spots,
        and show you exactly how we’ll turn your quiet presence into a roar. Only 3 slots left this month.</p>
        <div className="feature-one__btn-box">
            <a href="https://ai.brannovate.com/sign-up" className="thm-btn feature-one__btn">
               Claim Your Spot Now
            </a>
        </div>
      </div>
    </section>
    <section className="solutions-two" id="tools">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Why Choose Brannovate?</span>
          </div>
          
          <h2 className="feature-one__title">
          For Leaders Who Refuse to <br />Settle for Average
          </h2>
        </div>
  
        {/* Content One */}
        <div className="solutions-two__content-one wow fadeInUp" data-wow-delay="100ms">
          <div
            className="solutions-two__shape-1"
            style={{ backgroundImage: `url(${shapeOne})` }}
          ></div>
          <div className="row" style={{alignItems: 'center'}}>
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-left">
                <div className="solutions-two__shape-2 zoominout">
                  <img src={solutions1} alt="" />
                </div>
                <div className="solutions-two__content-one-title-box">
                  
                </div>
                <p className="solutions-two__content-one-text-1">
                At Brannovate, we don’t believe in one-size-fits-all solutions. Whether you’re a time-starved executive
or a visionary ready to dominate your industry, we’ve engineered two paths to LinkedIn mastery—both
designed to turn your expertise into undeniable influence.
                </p>
                <p className="solutions-two__content-one-text-1">Brannovate offers two paths to LinkedIn dominance: AI-Driven Efficiency, where our 24/7 AI Agent
generates trend-powered posts, carousels, and data-backed content in your voice—perfect for leaders
who want authority without effort—or Premium Precision, pairing AI speed with elite human
craftsmanship to transform your milestones into iconic stories, curate high-value networks, and
bulletproof your reputation for visionaries who demand every detail to scream “industry titan.” Choose
effortless growth or bespoke legacy-building—your expertise deserves to shine.</p>
                
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="solutions-two__content-one-right">
                <div className="solutions-two__content-one-img-box" style={{border: '0', background:'none', alignItems: 'center'}}>
                  <div className="solutions-two__content-one-img">
                    <img src={solutions2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;