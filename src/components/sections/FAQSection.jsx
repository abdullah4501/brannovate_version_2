import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const FAQSection = () => {
  // Custom font family styles
  const fontFamily = {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  };

  return (
    <section className="py-10 py-lg-15" style={fontFamily}>
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-10">
            <div className="text-center">
              <h1 className="mb-0" data-aos="fade-up-sm" data-aos-delay="50">
                Questions About Brannovate? <br className="d-none d-md-block" />
                We Have Answers!
              </h1>
            </div>
          </div>
        </div>

        <div className="row justify-center">
          <div className="col-lg-8" data-aos="fade-up-sm" data-aos-delay="100">
            <div className="accordion accordion-flush d-flex flex-column gap-6" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapseOne"
                    aria-expanded="false"
                    aria-controls="faq-collapseOne"
                  >
                    <span className="icon"></span>
                    How does it enhance my LinkedIn presence?
                  </button>
                </h2>
                <div
                  id="faq-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Brannovate is an AI-powered tool that transforms your LinkedIn profile into a dynamic, engaging presence by generating, scheduling, and directly posting content optimized using trending news.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapseTwo"
                    aria-expanded="false"
                    aria-controls="faq-collapseTwo"
                  >
                    <span className="icon"></span>
                    Is Brannovate useful for Digital Marketers and Content Writers?
                  </button>
                </h2>
                <div
                  id="faq-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Absolutely. Brannovate caters to both digital marketers and content writers by delivering data-driven, AI-generated posts that boost your engagement and help you stand out on LinkedIn.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapseThree"
                    aria-expanded="false"
                    aria-controls="faq-collapseThree"
                  >
                    <span className="icon"></span>
                    Is there a limit on how much content I can generate?
                  </button>
                </h2>
                <div
                  id="faq-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    There is no set limit. Brannovate's AI can generate as many LinkedIn posts as you need, ensuring you consistently engage your audience.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapseFour"
                    aria-expanded="false"
                    aria-controls="faq-collapseFour"
                  >
                    <span className="icon"></span>
                    Which languages does Brannovate support?
                  </button>
                </h2>
                <div
                  id="faq-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Brannovate supports multiple languages, so you can communicate with a global audience and build a truly international LinkedIn presence.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-collapseFive"
                    aria-expanded="false"
                    aria-controls="faq-collapseFive"
                  >
                    <span className="icon"></span>
                    What is the payment process to start using Brannovate?
                  </button>
                </h2>
                <div
                  id="faq-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    New users register via our signup form and are then redirected to a secure payment page. After completing payment, you're taken to your dashboard where you can instantly connect your LinkedIn account and start generating, scheduling, and posting content.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global style for the font family */}
      <style jsx global>{`
        body {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
    </section>
  );
};

export default FAQSection;