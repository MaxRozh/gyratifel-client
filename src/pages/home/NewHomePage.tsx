import React from 'react';

import HeroHome from 'components/hero-home/HeroHome';
import Features from 'components/features/Features';
import FeaturesBlock from 'components/features/FeaturesBlock';
import Testimonials from 'components/testimonals/Testimonials';
import NewsLetter from 'components/news-letter/NewsLetter';

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
