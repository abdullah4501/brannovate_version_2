import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/illustrations/feature-illustration-1-blue.svg';
import img2 from '../../assets/images/illustrations/feature-illustration-2-blue.svg';
import img3 from '../../assets/images/illustrations/feature-illustration-3-blue.svg';
import { LuBookOpen } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import solutions3 from "../../assets/images/shapes/solutions-two-content-two-shape-1.png";
import solutions4 from "../../assets/images/illustrations/ill_features.png";


const Features = ({ extraClassList = "" }) => {
  return (
    <>
    
    <section className={`preiumFeatures`}>
      <div className="container">
        <div className="text-center">
          <h2>But what if you want more <br />  than <span style={{color:'#ff0000'}}>algorithms?</span></h2>
          <p>
          For leaders who demand bespoke brilliance—where every word, visual, and interaction is meticulously<br />crafted to mirror your unique leadership DNA—we offer Brannovate Apex.
          </p>
        </div>
          <div
            className={`row g-6 gx-lg-14 gx-xl-20 align-center`}
          >
            <div className="col-lg-6 left" data-aos="fade-up-sm" data-aos-delay="150">
              <h4 className="mb-8 mt-5">Imagine a world-class team working in lockstep</h4>
              <div className="premiumContent d-flex align-items-start gap-4">
              <div className="icon">
                <LuBookOpen  size={20}/>
              </div>
              <div className="content">
                <h5 >Rewrite Your Narrative</h5>
                <p className="mb-6">Your profile isn’t just optimized—it’s reimagined as a magnetic storytelling hub, from headline to Featured posts.</p>
              </div>
              </div>
              <div className="premiumContent d-flex align-items-start gap-4">
              <div className="icon">
                <FaRegStar  size={20}/>
              </div>
              <div className="content">
                <h5 >Curate Your Crown Jewels</h5>
                <p className="mb-6">We mine your career's defining moments, turning boardroom wins and industry revolutions into iconic carousels and articles that trend for weeks.</p>
              </div>
              </div>
              <div className="premiumContent d-flex align-items-start gap-4">
              <div className="icon">
                <HiOutlineUsers  size={20}/>
              </div>
              <div className="content">
                <h5 >Orchestrate Your Audience</h5>
                <p className="mb-6">Daily engagement, elite network growth, and strategic comment diplomacy—we turn passive scrollers into devoted followers.</p>
              </div>
              </div>
              <div className="premiumContent d-flex align-items-start gap-4">
              <div className="icon">
                <IoIosTrendingUp  size={20}/>
              </div>
              <div className="content">
                <h5 >Dominate the Algorithm</h5>
                <p className="mb-6">Our experts don't just post—they hack timelines, ensuring your content lands in feeds of investors, media, and future collaborators.</p>
              </div>
              </div>
              <h6 className="text-center" style={{fontWeight:'600', color: '#0000ff'}}>This isn’t management. This is metamorphosis.</h6>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="solutions-two__content-two-single">
                <div className="solutions-two__content-two-top">
                  <div className="solutions-two__content-two-title-box">
                    <h3>Become Unignorable in 90 Days—or It's Free.</h3>
                  </div>
                  <p className="solutions-two__content-two-text-1">
                  Book a free LinkedIn dominance audit today. Our experts will dissect your profile, map your blind spots, and show you exactly how we'll turn your quiet presence into a roar.
                  </p>
                  <div className="feature-one__btn-box mb-10">
            <Link to={'/contact'} className="thm-btn feature-one__btn">
               Claim Your Spot Now
            </Link>
        </div>
                </div>
                <div className="solutions-two__content-two-img-box">
                  <div className="solutions-two__content-two-shape-1">
                    <img src={solutions3} alt="" />
                  </div>
                  <div className="solutions-two__content-two-img">
                    <img src={solutions4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
    </>
  );
};

export default Features;