import React from "react";
import { Link } from "react-router-dom";

const featuresData = [
  {
    id: 1,
    title: "Let's Create LinkedIn Posts With Single Click",
    description:
      "To craft engaging LinkedIn posts, you must know your audience. Our AI tool lets you choose a topic and instantly generate a post that captivates.",
    points: [
      "Instant topic selection for LinkedIn",
      "Real-time trending news integration",
      "Direct posting or scheduling options",
    ],
    image: "src/assets/images/illustrations/feature-illustration-1-blue.svg",
    linkText: "Get Started Free",
    linkHref: "/login",
  },
  {
    id: 2,
    title:
      "A Magical Tool To Optimize Your LinkedIn Presence For Maximum Engagement",
    description:
      "A magical solution to enhance your LinkedIn presence. Identify your audience, optimize your messaging, and achieve first-rate engagement that propels your professional profile.",
    image: "src/assets/images/illustrations/feature-illustration-2-blue.svg",
    linkText: "Request A Demo",
    linkHref: "/login",
  },
  {
    id: 3,
    title: "Write Authentic LinkedIn Posts, Articles, & Updates With BrandBot",
    description:
      "To produce engaging LinkedIn posts, you must know your audience. Our tool analyzes trends and crafts posts that resonate with your professional network.",
    points: [
      "Generate high-quality posts instantly",
      "Boost engagement with trending insights",
      "Customize with your own prompts if needed",
    ],
    image: "src/assets/images/illustrations/feature-illustration-3-blue.svg",
    linkText: "Get Started Free",
    linkHref: "/login",
  },
];

const Features = ({ extraClassList = "" }) => {
  return (
    <section className={`py-10 py-lg-15 ${extraClassList}`}>
      <div className="container">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`row g-6 gx-lg-14 gx-xl-20 align-center mt-10 ${
              index === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="150">
              <div className="content">
                <p className="text-primary">Features {feature.id}</p>
                <h1 className="mb-8">{feature.title}</h1>
                <p className="mb-6">{feature.description}</p>
                {feature.points && (
                  <ul className="list-unstyled list-check mb-8">
                    {feature.points.map((point, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                          className="icon"
                        >
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
                <Link
                  to={feature.linkHref}
                  className="arrow-link arrow-link-primary text-primary gap-3"
                >
                  <span>{feature.linkText}</span>
                  <svg
                    className="icon"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
      </div>
    </section>
  );
};

export default Features;
