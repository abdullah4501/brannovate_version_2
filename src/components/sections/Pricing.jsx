import React, { useState } from 'react';
import ContactModal from './ContactModal';

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10 py-lg-15">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-10">
            <div className="text-center">
              <p className="color-topheading" data-aos="fade-up-sm" data-aos-delay="50">
                Pricing Plan
              </p>
              <h2 className="mb-5" data-aos="fade-up-sm" data-aos-delay="100">
                Ready to Get <span style={{color:'#0000ff'}}>Started?</span> <br />
                Don't Worry, We'll Keep You Under <span style={{color:'#ff0000'}}>Budget</span>
              </h2>
              <p className="mb-0" data-aos="fade-up-sm" data-aos-delay="150">
                Get started with a 30-days trial, Cancel anytime.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-6 pricing-table" id="pricing">
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="50">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <h3 className="text-primary fw-medium mb-0">AI Starter</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$2.99<span style={{fontSize: '20px', color: ''}}>/Month</span></h1>
              <p className="lead fw-normal mt-4 mb-0">
                <span style={{color:'#ff0000'}}>Perfect for: </span> Busy professionals dipping their toes into personal branding
              </p>
              <a
                href="https://ai.brannovate.com/sign-up"
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Choose AI Starter
              </a>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li><i className='fa fa-check'></i><span><b>Trending Topics:</b> Get top trending topics from 7+ categories across 28+ countries.</span></li>
                <li><i className='fa fa-check'></i><span><b>One-Click Post Creation:</b> Create posts on any topic with just one click.</span></li>
                <li><i className='fa fa-check'></i><span><b>Customizable Content:</b> Edit and personalize the generated posts to match your style.</span></li>
                <li><i className='fa fa-check'></i><span><b>Incorporate Your Voice:</b> Share your views, and let the AI rewrite the post to include your perspective.</span></li>
                <li><i className='fa fa-check'></i><span><b>Leader-Inspired:</b> Content Inspired by Leading LinkedIn Voices – Stand out, not just AI-generated</span></li>
                <li><i className='fa fa-check'></i><span><b>Provide Personal Ideas:</b> Create posts from your own ideas.</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="100">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <h3 className="text-primary fw-medium mb-0">Premium Accelerate</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$249<span style={{fontSize: '20px', color: ''}}>/Month</span></h1>
              <p className="lead fw-normal mt-4 mb-0">
                <span style={{color:'#ff0000'}}>Perfect for: </span> Leaders ready to stand out with hybrid AI + human brilliance
              </p>
              <button
                onClick={() => handlePackageSelect('Premium Accelerate')}
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Go Premium
              </button>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li><i className="fa fa-check"></i><span><b>Expert-Crafted Content:</b> 2 team-written posts + 1 carousel.</span></li>
                <li><i className="fa fa-check"></i><span><b>Custom Request:</b> 1 tailored post/month (client-specified topic).</span></li>
                <li><i className="fa fa-check"></i><span><b>Cross-Platform Power:</b> 2 Twitter/X threads</span></li>
                <li><i className="fa fa-check"></i><span><b>Comment Management:</b> Proactive engagement & sentiment monitoring.</span></li>
                <li><i className="fa fa-check"></i><span><b>Audience Targeting:</b> Strategic connection growth.</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-up-sm" data-aos-delay="150">
            <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-whitedark">
              <span className="badge text-bg-red px-4 py-2 rounded-end-0">Most Popular</span>
              <h3 className="text-primary fw-medium mb-0">Icon Suite</h3>
              <h1 className="display-2 fw-semibold mb-0 mt-4">$1,499<span style={{fontSize: '20px', color: ''}}>/Month</span></h1>
              <p className="lead fw-normal mt-4 mb-0">
                <span style={{color:'#ff0000'}}>Perfect for: </span> Visionaries cementing their legacy as industry icons.
              </p>
              <button
                onClick={() => handlePackageSelect('Icon Suite')}
                className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-lite-blue-2"
              >
                Claim Icon Suite
              </button>
              <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                <li><i className="fa fa-check"></i><span><b>All-Inclusive Legacy:</b> Everything in Premium Accelerate</span></li>
                <li><i className="fa fa-check"></i><span><b>LinkedIn Polls & Q&amp;A:</b> 2 interactive polls/week + monthly AMA sessions.</span></li>
                <li><i className="fa fa-check"></i><span><b>Video Content:</b> 1 long-form video/month</span></li>
                <li><i className="fa fa-check"></i><span><b>Long-Form Articles:</b> 1 ghostwritten article/month</span></li>
                <li><i className="fa fa-check"></i><span><b>Website Building:</b> Sleek, SEO-optimized personal site.</span></li>
                <li><i className="fa fa-check"></i><span><b>Expert-Led Podcast Management:</b> Quarterly episodes where you share your expertise &amp; vision, published &amp; promoted across platforms</span></li>
                <li><i className="fa fa-check"></i><span><b>Book/Bio Writing:</b> Ghostwrite your memoir, ebook, or biography.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default PricingSection;
