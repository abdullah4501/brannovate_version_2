import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import bgImg from '../assets/images/shapes/page-title-shape-1.png';
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

const PrivacyPolicy = () => {

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
            <div className="page-title__inner" style={{paddingBottom: '40px'}}>
              <div
                className="page-title__shape-1"
                style={{ backgroundImage: `url(${bgImg})` }}
              ></div>
              <div className="page-title__title-box">
                <p className="color-topheading" data-aos="fade-up-sm">
                Privacy Policy
                </p>
                <h1 className="text-dark mb-8">
                Privacy Policy for <br /> <span style={{color:'#0000ff'}}>Brannovate</span>
                </h1>
              </div>
              <p className="page-title__text">
              We respect your privacy & are committed to keeping your information safe. This policy explains how we handle & protect your<br />
               <strong > payment details, account information, & LinkedIn credentials.</strong>
              </p>
            </div>
          </div>
        </section>
        {/* Page Title End */}
        <div className="container">
            <hr className="border-top mb-15" />
            <div className="row justify-center">
                <div className="col-lg-12">
                <article>                    
                    <h5>
                    Your trust matters to us, and we take every step to ensure your data remains <span style={{color:'#'}}>private</span> and <span style={{color:'#'}}>protected</span>.
                    </h5>
            
                    <h4><span className="text-primary">Section 1:</span> Secure Payment Details</h4>
                    <p>
                      When you add your card, your payment information is processed through Stripe, a trusted payment gateway.  
                      Your card details are never exposed or stored on our servers—Stripe handles all sensitive data securely.
                    </p>

                    <p>
                    You can feel confident that your payment information is handled with care and kept strictly confidential.
                    </p>
            
                    <h4><span className="text-primary">Section 2:</span> Account Information Protection</h4>
                    <p>
                    Your account details—such as your name, email, and preferences—are encrypted and stored securely. Only authorized systems can access this information, keeping your profile safe at all times.
                    </p>
                    <p>
                    We maintain strong safeguards to prevent unauthorized access and regularly review our practices to uphold your privacy.
                    </p>
            
                    <h4><span className="text-primary">Section 3:</span> LinkedIn Credential Security</h4>
                    <p>
                      We’ve integrated LinkedIn’s official API to securely connect your profile with Brannovate.  
                      This API, provided and maintained by LinkedIn, ensures a safe, encrypted connection—your LinkedIn password is never stored on our servers.
                    </p>
            
                    <p>
                    If you have any questions about how we protect your data or wish to review or delete your information, please reach out to our support team. We’re here to help.
                    </p>
                </article>
                </div>
            </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
