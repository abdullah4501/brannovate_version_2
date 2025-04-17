import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import bgImg from '../assets/images/shapes/page-title-shape-1.png';
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

const Contact = () => {
  // Local state for form data and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Handle input change events
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission, posting data to the API endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optionally, add form validation here

    try {
      toast.loading("Sending...", { id: "loadingToast" });
      const response = await fetch('https://ai.brannovate.com/api/send-email', { // Adjust to your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Email sent successfully!", { id: "loadingToast" });
        // Clear form if needed
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong. Please try again.", { id: "loadingToast" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try later.", { id: "loadingToast" });
    }
  };

  return (
    <div className="wrapper d-flex flex-column justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hot Toast container */}
      <Toaster />

      <main className="flex-grow-1">
        {/* Page Title Start */}
        <section className="page-title" style={{marginTop: '35px'}}>
          <div className="container">
            <div className="page-title__inner">
              <div
                className="page-title__shape-1"
                style={{ backgroundImage: `url(${bgImg})` }}
              ></div>
              <div className="page-title__title-box">
                <p className="color-topheading" data-aos="fade-up-sm">
                Contact Us
                </p>
                <h1 className="text-dark mb-8" data-aos="fade-up-sm" data-aos-delay="150">
                Our Dynamic Team are Waiting <br /> for you
                </h1>
              </div>
              <p className="page-title__text">
                Discover how Brannovate transforms your professional image with effortless, data-driven AI content strategies.<br />
               <strong > Let’s start your journey  to dominating <span style={{color:'#0000ff'}}>LinkedIn.</span></strong>
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
                      <h3>Drop A <span style={{color:'#0000ff'}}>Message</span></h3>
                      <p>
                        At Brannovate, we transform your professional narrative with AI-powered insights and tailored content strategies. Reach out today to discover how our innovative tools generate, schedule, and optimize your LinkedIn posts—ensuring you consistently stand out and engage your network.
                      </p>
                    </div>
                    <ul className="contact-one__contact-list">
                      <li>
                        <div className="icon">
                          <span className="icon-map"></span>
                        </div>
                        <div className="text">
                          <p>
                            2785 E GRAND BLVD UNIT 653 DETROIT, MI 48211, Detroit, Michigan US
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
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="contact-one__right">
                  <div className="contact-one__form-box">
                    <h3 className="contact-one__form-title">Send us a <span style={{color:'#0000ff'}}>message</span></h3>
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <p className="contact-one__form-label">Name*</p>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                        <div className="contact-one__form-icon">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="contact-one__form-label">Email*</p>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="info@brannovate.com"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                        <div className="contact-one__form-icon">
                          <i className="far fa-envelope"></i>
                        </div>
                      </div>
                      <div className="form-group text-message-box">
                        <p className="contact-one__form-label">How can we help?</p>
                        <textarea 
                          name="message" 
                          placeholder="Enter your message here" 
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        {/* Button Box */}
                        <div className="button-box">
                          <button 
                            type="submit" 
                            className="thm-btn contact-one__btn"
                            data-loading-text="Please wait..."
                          >
                            Submit Request
                          </button>
                        </div>
                      </div>
                    </form>
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
