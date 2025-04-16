import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/illustrations/feature-illustration-1-blue.svg';
import img2 from '../../assets/images/illustrations/feature-illustration-2-blue.svg';
import img3 from '../../assets/images/illustrations/feature-illustration-3-blue.svg';

const featuresData = [
  {
    id: 1,
    title: "Choose a trending topic",
    description:
      "Select from AI-curated topics that are performing well in your industry right now, or input your own idea.",
    points: [
      "Generate AI-curated posts based on trending news",
      "Optimize your LinkedIn presence with engaging content",
      "Schedule and publish seamlessly with our AI-powered automation",
    ],
    image: img1,
    linkText: "Get Started Free",
    linkHref: "https://ai.brannovate.com/sign-up",
  },
  {
    id: 2,
    title: "Generate your post",
    description:
      "One click and the AI creates a professional, engaging post tailored to your style and voice.",
      points: [
        "Posts are generated instantly based on best practices from top-performing LinkedIn influencers.",
        "Intelligent structure ensures readability, engagement, and clarity.",
        "Built for thought leadership, brand building, and audience connection.",
      ],
    image: img2,
    linkText: "Get Started Free",
    linkHref: "https://ai.brannovate.com/sign-up",
  },
  {
    id: 3,
    title: "Edit and personalize",
    description:
      "Tweak the content, add your personal touch, and see a live preview of how it will look on LinkedIn.",
      points: [
        "Add or replace phrases to reflect your ideas, opinions, or experience.",
        "Format text with highlights, lists, emojis, or even insert media.",
        "Real-time preview shows exactly how the post will appear on LinkedIn.",
      ],
    image: img3,
    linkText: "Get Started Free",
    linkHref: "https://ai.brannovate.com/sign-up",
  },
];


const Features = ({ extraClassList = "" }) => {
  return (
    <section className={`py-10 py-lg-15 ${extraClassList}`}>
      <div className="container">
        <div className="text-center">
          <h2>How it works</h2>
          <p>
          Our AI agent makes LinkedIn content creation simple, fast and effective. No more staring at a blank screen.
          </p>
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
      </div>
    </section>
  );
};

export default Features;