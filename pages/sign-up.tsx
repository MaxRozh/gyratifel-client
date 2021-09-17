import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SignUpPage from 'pages/sign-up/SignUpPage';

export default function Home() {
  return <SignUpPage />;
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      // countries: data.countries.slice(0, 10),
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
