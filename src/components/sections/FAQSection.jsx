import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-10 py-lg-15">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-10">
            <div className="text-center">
              <h1 className="mb-0" data-aos="fade-up-sm" data-aos-delay="50">
                Questions About our GenAI? <br className="d-none d-md-block" />
                We have Answers!
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
                    What Is GenAI Content Writing Tool?
                  </button>
                </h2>
                <div
                  id="faq-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience
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
                    Is it helpful for Digital Marketer or Content Writer?
                  </button>
                </h2>
                <div
                  id="faq-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience
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
                    Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience
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
                    What Languages does it supports?
                  </button>
                </h2>
                <div
                  id="faq-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience
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
                    What is SEO Writing AI and how do I use it?
                  </button>
                </h2>
                <div
                  id="faq-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
