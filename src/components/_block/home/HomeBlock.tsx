import React from 'react';
import { useTranslation } from 'next-i18next';

import HeroHome from 'components/home/hero-home/HeroHome';
import Features from 'components/home/features/Features';
import NewsSubscription from 'components/home/news-subscription/NewsSubscription';

function HomeBlock() {
  const { t } = useTranslation('home');

  return (
    <>
      <HeroHome t={t} />
      <Features t={t} />
      <NewsSubscription t={t} />
    </>
  );
}

export default HomeBlock;
