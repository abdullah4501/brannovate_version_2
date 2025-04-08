import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-10 py-lg-15" id="section-about">
      <div className="container">
        <div className="text-center mb-18">
          <h1 className="mb-0" data-aos="fade-up-sm" data-aos-delay="50">
            AI-Driven Personal Branding <br className="d-none d-lg-block" />
            That Works for you
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

        <div className="text-center mt-12">
          <a href="https://ai.brannovate.com/" className="btn btn-primary">
            Try a demo
          </a>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Strategic Content Architecture",
    description:
      "Custom-crafted insights that position you as the authority your audience seeks.",
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M30.167 10c-1.833 4.855-3.167 8.188-4 10m0 0c-3.132 6.813-6.188 10-10 10-4 0-8-4-8-10s4-10 8-10c3.778 0 6.892 3.31 10 10Zm0 0c.853 1.837 2.187 5.17 4 10" />
        </g>
      </svg>
    ),
  },
  {
    title: "24/7 Digital Strategist",
    description:
      "Our AI Agent scours trending news and industry shifts to create high-impact content aligned with your voice.",
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M3.333 20 20 32.37 36.666 20" />
          <path d="M11.667 15 20 21.667 28.334 15m-10.001-5L20 11.333 21.666 10 20 8.666 18.333 10Z" />
        </g>
      </svg>
    ),
  },
  {
    title: "Exponential Visibility",
    description:
      "Systematic amplification that transforms your expertise into influence that resonates industry-wide.",
    icon: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M10 29.334 6.667 27.5v-4.166m0-6.668V12.5L10 10.666m6.667-3.833L20 5l3.334 1.833M30 10.666l3.333 1.834v4.166m0 6.668V27.5L30 29.367m-6.666 3.799L20 35l-3.333-1.834M20 20l3.333-1.834M30 14.333l3.333-1.833M20 20v4.167m0 6.667V35m0-15-3.333-1.867M10 14.333 6.667 12.5" />
        </g>
      </svg>
    ),
  },
];

export default FeaturesSection;
