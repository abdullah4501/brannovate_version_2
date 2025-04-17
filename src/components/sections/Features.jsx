import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/illustrations/feature-illustration-1-blue.svg';
import img2 from '../../assets/images/illustrations/feature-illustration-2-blue.svg';
import img3 from '../../assets/images/illustrations/feature-illustration-3-blue.svg';

const featuresData = [
  {
    id: 1,
    title: "AI-Driven Efficiency",
    description:
      "Our 24/7 AI Agent generates trend-powered posts, carousels, and data-backed content in your voice—perfect for leaders who want authority without effort.",
    points: [
      "Automated content generation that matches your tone.",
      "Data-driven topics based on current industry trends.",
      "Consistent posting schedule managed automatically.",
    ],
    image: img2,
    linkText: "Get Started Free",
    linkHref: "/contact",
  },
  {
    id: 2,
    title: "Premium Precision",
    description:
      "We pair AI speed with elite human craftsmanship to transform your milestones into iconic stories, curate high-value networks, and bulletproof your reputation for visionaries who demand every detail to scream 'industry titan.'",
      points: [
        "Custom content crafted by expert copywriters.",
        "Strategic network growth targeting decision makers.",
        "Complete brand monitoring and reputation management",
      ],
    image: img1,
    linkText: "Get Started Free",
    linkHref: "/contact",
  },
];


const Features = ({ extraClassList = "" }) => {
  return (
    <section className={`py-10 py-lg-15 ${extraClassList}`}>
      <div className="container">
        <div className="text-center">
        <div className="section-title__tagline-box">
            <span className="section-title__tagline">For Leaders Who Refuse to Settle for Average</span>
        </div>
          <h2>Why Choose <span style={{color: '#0000ff'}}>Brannovate</span></h2>
          <p className="mt-5">At Brannovate, we don't believe in one-size-fits-all solutions. Whether you're a time-starved executive or a visionary<br /> ready to dominate your industry, we've engineered two paths to LinkedIn mastery—both designed to turn your expertise into undeniable influence.</p>
          <h5 className="mt-5 mb-5">Choose effortless growth or bespoke legacy-building—your expertise deserves to shine.</h5>
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
              <div className="feature-img d-flex">
                <img src={feature.image} alt="Feature" className="img-fluid" />
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Features;