import React from 'react';

import HeroHome from 'components/home/hero-home/HeroHome';
import Features from 'components/home/features/Features';
import NewsLetter from 'components/home/news-letter/NewsLetter';

function HomePage() {
  return (
    <>
      <HeroHome />
      <Features />
      <NewsLetter />
    </>
  );
}

export default HomePage;
