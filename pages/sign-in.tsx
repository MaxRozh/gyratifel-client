import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SignInPage from 'containers/sign-in/SignInPage';

export default function Home() {
  return <SignInPage />;
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
