import React from 'react';

import HeroHome from 'components/home/hero-home/HeroHome';
import Features from 'components/home/features/Features';
import FeaturesBlock from 'components/home/features/FeaturesBlock';
import Testimonials from 'components/home/testimonals/Testimonials';
import NewsLetter from 'components/home/news-letter/NewsLetter';

function HomePage() {
  return (
    <>
      <HeroHome />
      <Features />
      <FeaturesBlock />
      <Testimonials />
      <NewsLetter />
    </>
  );
}

export default HomePage;
