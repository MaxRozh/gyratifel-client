import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ResetPassword from 'containers/reset-password/ResetPassword';

export default function Home() {
  return <ResetPassword />;
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
