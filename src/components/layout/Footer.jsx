import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from '../../assets/images/logo.gif';

const Footer = () => {
  return (
    <footer className="footer bg-striped pt-10 pt-lg-15">
      <div className="container">
        <div className="row g-10">
          <div className="col-lg-3 me-auto ">
            <div className="footer-widget text-center text-lg-start">
              <a href="">
                <img src={logo} alt="" className="img-fluid" />
              </a>
              <p className="fs-sm mb-0 mt-4">
                Empowering brands with innovative digital solutions. Committed to excellence, dedicated to your growth. Partner with Brannovate for results that matter.
              </p>
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="row g-6">
              <div className="col-md-6 col-lg-6">
                <div className="footer-widget text-center text-md-start">
                  <h6 className=" mb-2">Links</h6>
                  <ul className="link-list list-unstyled mb-0">
                    <li>
                      <a href="https://ai.brannovate.com/">BrandBot</a>
                    </li>
                    <li>
                      <a href="https://ai.brannovate.com/">Sign in</a>
                    </li>
                    <li>
                      <a href="https://ai.brannovate.com/sign-up">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="footer-widget text-center text-md-start">
                  <h6 className=" mb-4">News & Update</h6>
                  <form action="#">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <button className="btn btn-primary px-4" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-5">
                    <li>
                      <a href="https://www.facebook.com/Brannovate/">
                          <ImFacebook/> 
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/brannovate">
                          <BsTwitterX/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/brannovate/">
                        <GrLinkedinOption/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/brannovate/?igsh=anA1NzBhNTI4dmhy#">
                        <FaInstagram/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/brannovate/?invite_code=9ceb39b6fe8f467eac73c3409fbc5011&sender=917467892746899005">
                        <FaPinterestP/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-6 mt-8">
          <p className="fs-sm mb-0">
            Copyright 2025 &copy; <a className="text-primary" href='https://brannovate.com/'>Brannovate</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
