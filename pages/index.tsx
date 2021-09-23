import React from 'react';
// import { gql } from '@apollo/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import HomePage from 'pages/home/HomePage';
import NewHomePage from 'containers/home/NewHomePage';

// @ts-ignore
// import apolloClient from '../apollo-client';

type PropsType = {
  countries: Array<{
    code: string;
    name: string;
    emoji: string;
  }>;
};

export default function Home({ countries }: PropsType) {
  // eslint-disable-next-line no-unused-expressions
  countries?.length;
  return <NewHomePage />;
  // return (
  //   <>
  //     <HomePage />
  //     <h1>Home</h1>
  //     <p>Get started</p>
  //     <p>Eff</p>
  //     <div>
  //       {countries.map((country) => (
  //         <div key={country.code}>
  //           <h3>{country.name}</h3>
  //           <p>
  //             {country.code} - {country.emoji}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
}

export async function getStaticProps({ locale, locales }: { locale: string }) {
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
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
