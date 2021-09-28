import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import SignInPage from 'containers/sign-in/SignInPage';
import SignInBlock from 'components/_block/sign-in/SignInBlock';

export default function Home() {
  return <SignInBlock />;
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      // countries: data.countries.slice(0, 10),
      ...(await serverSideTranslations(locale, ['sign-in', 'common']))
    }
  };
}
