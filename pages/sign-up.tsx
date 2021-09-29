import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SignUpBlock from 'components/_block/sign-up/SignUpBlock';

export default function Home() {
  return <SignUpBlock />;
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
