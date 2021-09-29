import React from 'react';
// import { gql } from '@apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomeBlock from 'components/_block/home/HomeBlock';

// @ts-ignore
// import apolloClient from '../apollo-client';

type PropsType = {
  countries: Array<{
    code: string;
    name: string;
    emoji: string;
  }>;
};

export default function HomePage({ countries }: PropsType) {
  // eslint-disable-next-line no-unused-expressions
  countries?.length;
  return <HomeBlock />;
}

export async function getStaticProps({ locale, locales }: { locale: string; locales: Array<string> }) {
  // const { data } = await apolloClient.query({
  //   query: gql`
  //     query Countries {
  //       countries {
  //         code
  //         name
  //         emoji
  //       }
  //     }
  //   `
  // });
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    props: {
      locales,
      locale,
      // countries: data.countries.slice(0, 10),
      ...(await serverSideTranslations(locale, ['home', 'common']))
    }
  };
}
