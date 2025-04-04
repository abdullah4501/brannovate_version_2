import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/HeroSection.jsx';
import FeatureOne from '../components/sections/FeatureOne.jsx';
import SectionAbout from '../components/sections/SectionAbout.jsx';
import Solutions from '../components/sections/Solutions.jsx';
import Features from '../components/sections/Features.jsx';
import Carousel from '../components/sections/Carousel.jsx';
import Reviews from '../components/sections/Reviews.jsx';
import Pricing from '../components/sections/Pricing.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import Trial from '../components/sections/Trial.jsx';
// Import other sections as needed

const Home = () => {
  return (
    <div className="wrapper d-flex flex-column justify-between">
        
      <Navbar />
      
      <main className="flex-grow-1">
        {/* ... other sections ... */}
        <Hero />
        <FeatureOne />
        <SectionAbout />
        <Solutions />
        {/* <FAQSection /> */}
        <Features />
        <Carousel />
        <Reviews />
        <Pricing />
        <FAQSection />
        <Trial />
        {/* ... other sections ... */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;