import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import bgImg from '../assets/images/shapes/page-title-shape-1.png';
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="wrapper d-flex flex-column justify-between">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow-1">
        {/* Page Title Start */}
        <section className="page-title">
          <div className="container">
            <div className="page-title__inner">
              <div
                className="page-title__shape-1"
                style={{ backgroundImage: `url(${bgImg})` }}
              ></div>
              <div className="page-title__title-box">
                <p className="page-title__sub-title">Contact Us</p>
                <h3 className="page-title__title">
                  Our Dynamic Team are Waiting <br /> for Reach you
                </h3>
              </div>
              <p className="page-title__text">
              Discover how Brannovate transforms your professional image with effortless, data-driven AI content strategies.<br />
              Let’s start your journey to dominating LinkedIn.
              </p>
            </div>
          </div>
        </section>
        {/* Page Title End */}

        {/* Contact One Start */}
        <section className="contact-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-one__left">
                  <div className="contact-one__left-content">
                    <div className="contact-one__title-box">
                      <h3>Drop A Line</h3>
                      <p>
                        There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let’s Communicate with your customers with emotions
                      </p>
                    </div>
                    <ul className="contact-one__contact-list">
                      <li>
                        <div className="icon">
                          <span className="icon-call"></span>
                        </div>
                        <div className="text">
                          <p>
                            <a href="tel:60355501234422">+1 (615) 988-0800</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-map"></span>
                        </div>
                        <div className="text">
                          <p>
                          2785 E GRAND BLVD UNIT<br />653 DETROIT, MI 48211,<br />Detroit, Michigan US
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-envelope"></span>
                        </div>
                        <div className="text">
                          <p>
                            <a href="mailto:your.mail@gmail.com">info@brannovate.com</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="contact-one__social">
                        <a href="https://www.linkedin.com/company/brannovate/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.facebook.com/Brannovate" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </a>
                        <a href="https://www.twitter.com/brannovate" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/brannovate/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="contact-one__right">
                  <div className="contact-one__form-box">
                    <h3 className="contact-one__form-title">Send us a message</h3>
                    <form method="POST" action="inc/mail.php" id="contact-form">
                      <div className="form-group">
                        <p className="contact-one__form-label">Name*</p>
                        <input type="text" name="name" placeholder="John Smith" required />
                        <div className="contact-one__form-icon">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="contact-one__form-label">Email*</p>
                        <input type="email" name="email" placeholder="info@brannovate.com" required />
                        <div className="contact-one__form-icon">
                          <i className="far fa-envelope"></i>
                        </div>
                      </div>
                      <div className="form-group text-message-box">
                        <p className="contact-one__form-label">How can we help?</p>
                        <textarea name="message" placeholder="Enter your message here"></textarea>
                      </div>
                      <div className="form-group">
                        {/* Button Box */}
                        <div className="button-box">
                          <button type="submit" className="thm-btn contact-one__btn" data-loading-text="Please wait...">
                            Submit Request
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="ajax-response mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact One End */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
