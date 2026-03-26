import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
    </div>
  );
};

export default Home;
