import React from 'react';
import { gql } from '@apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomePage from 'pages/home/HomePage';

import apolloClient from '../apollo-client';

type PropsType = {
  countries: Array<{
    code: string;
    name: string;
    emoji: string;
  }>;
};

export default function Home({ countries }: PropsType) {
  return (
    <>
      <HomePage />
      <h1>Home</h1>
      <p>Get started</p>
      <p>Eff</p>
      <div>
        {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const { data } = await apolloClient.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `
  });
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    props: {
      locale,
      countries: data.countries.slice(0, 4),
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
