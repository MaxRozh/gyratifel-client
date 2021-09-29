import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ResetPassword from 'components/reset-password/ResetPassword';

export default function ResetPasswordPage() {
  return <ResetPassword />;
}

export async function getServerSideProps({ locale, locales }: { locale: string, locales: Array<string> }) {
  return {
    props: {
      locale,
      locales,
      ...(await serverSideTranslations(locale, ['sign-in', 'common']))
    }
  };
}
