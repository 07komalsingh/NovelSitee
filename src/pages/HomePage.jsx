import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedNovels from '../components/FeaturedNovels';
import GenresSection from '../components/GenresSection';
import NewsletterSection from '../components/NewsletterSection';
// import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      
      <HeroSection /> 
       <FeaturedNovels />
      <GenresSection />
      <NewsletterSection />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
