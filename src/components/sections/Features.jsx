import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/illustrations/feature-illustration-1-blue.svg';
import img2 from '../../assets/images/illustrations/feature-illustration-2-blue.svg';
import img3 from '../../assets/images/illustrations/feature-illustration-3-blue.svg';

const featuresData = [
  {
    id: 1,
    title: "SMART START - Build Your Digital Presence with Ease",
    description:
      "Perfect for professionals looking to establish their voice online. Our AI-powered solution helps you:\n• Generate AI-curated posts based on trending news.\n• Optimize your LinkedIn presence with engaging content.\n• Schedule and publish seamlessly with our AI-powered automation.\n\nLet AI do the work for you!",
    points: [
      "Generate AI-curated posts based on trending news",
      "Optimize your LinkedIn presence with engaging content",
      "Schedule and publish seamlessly with our AI-powered automation",
    ],
    image: img1,
    linkText: "Get Started Free",
    linkHref: "/login",
  },
  {
    id: 2,
    title: "THOUGHT LEADER - Own Your Niche & Stand Out",
    description:
      "For professionals ready to take the next step in personal branding. This package includes everything in Smart Start, plus:\n\n• AI-driven content strategy tailored to your industry.\n• Automated post scheduling to boost engagement.\n• Insights & analytics to refine your digital branding.\n\nPosition yourself as an authority in your field.",
    // No 'points' array here to keep the same structure
    image: img2,
    linkText: "Request A Demo",
    linkHref: "/login",
  },
  {
    id: 3,
    title: "INFLUENCE AMPLIFIER - Build a Lasting Digital Legacy",
    description:
      "For leaders and executives looking to cement their influence. Includes everything in Thought Leader, plus advanced AI-generated content and media strategies, VIP support for hands-free personal branding, and high-level engagement tools to ensure long-term impact. Transform your expertise into an enduring digital legacy.",
    points: [
      "Advanced AI-generated content and media strategies",
      "VIP support for hands-free personal branding",
      "High-level engagement tools to ensure long-term impact",
    ],
    image: img3,
    linkText: "Get Started Free",
    linkHref: "/login",
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