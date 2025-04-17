import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 'faq1',
      question: "How does it enhance my LinkedIn presence?",
      answer: "Brannovate is an AI-powered tool that transforms your LinkedIn profile into a dynamic, engaging presence by generating, scheduling, and directly posting content optimized using trending news."
    },
    {
      id: 'faq2',
      question: "Is Brannovate useful for Digital Marketers and Content Writers?",
      answer: "Absolutely. Brannovate caters to both digital marketers and content writers by delivering data-driven, AI-generated posts that boost your engagement and help you stand out on LinkedIn."
    },
    {
      id: 'faq3',
      question: "Is there a limit on how much content I can generate?",
      answer: "There is no set limit. Brannovate's AI can generate as many LinkedIn posts as you need, ensuring you consistently engage your audience."
    },
    {
      id: 'faq4',
      question: "Which languages does Brannovate support?",
      answer: "Brannovate supports multiple languages, so you can communicate with a global audience and build a truly international LinkedIn presence."
    },
    {
      id: 'faq5',
      question: "What is the payment process to start using Brannovate?",
      answer: "New users register via our signup form and are then redirected to a secure payment page. After completing payment, you're taken to your dashboard where you can instantly connect your LinkedIn account and start generating, scheduling, and posting content."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 py-lg-15" style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '830px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ 
                marginBottom: '0',
                fontSize: '2.5rem',
                fontWeight: '600',
                lineHeight: '1.2'
              }}>
                Questions About Brannovate? <br style={{ display: 'none' }} />
                We Have Answers!
              </h1>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '800px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {faqs.map((faq, index) => (
                <div key={faq.id} style={{
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <h2 style={{ margin: '0' }}>
                    <button
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        textAlign: 'left',
                        backgroundColor: openIndex === index ? '#f8f9fa' : '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'background-color 0.2s ease'
                      }}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openIndex === index}
                    >
                      <span>{faq.question}</span>
                      <span style={{ 
                        fontSize: '1.2rem',
                        transition: 'transform 0.2s ease',
                        transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)'
                      }}>+</span>
                    </button>
                  </h2>
                  <div
                    style={{
                      maxHeight: openIndex === index ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out',
                      backgroundColor: '#fff'
                    }}
                  >
                    <div style={{ 
                      padding: '20px',
                      borderTop: '1px solid #e9ecef'
                    }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;