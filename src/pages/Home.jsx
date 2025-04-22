import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
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
import PremiumFeatures from '../components/sections/PremiumFeatures.jsx';
// Import other sections as needed

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pathname === '/features') {
      document
        .getElementById('section-features')
        ?.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === '/pricing') {
      document
        .getElementById('section-pricing')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);
  return (
    <div className="wrapper d-flex flex-column justify-between">
        
      <Navbar />
      
      <main className="flex-grow-1">
        {/* ... other sections ... */}
        <Hero />
        <FeatureOne />
        <div id="section-features">
          <SectionAbout />
        </div>
        <Solutions />
        < PremiumFeatures />
        <Features />
        {/* <Carousel /> */}
        <Reviews />
        <div id="section-pricing">
        <Pricing />
      </div>
        <FAQSection />
        <Trial />
        {/* ... other sections ... */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;