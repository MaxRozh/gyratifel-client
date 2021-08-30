import React, { useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import MetaTags from 'components/meta-tags/MetaTags';
// import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';
import Layout from 'components/Layout';
// import apolloClient from '../apollo-client';

import { useStore } from 'libs/redux';
import { useApollo } from 'libs/apollo';
import theme from 'styles/theme';

// import 'styles/normalize.css';

type PropsType = {
  Component: any;
  pageProps: any;
  router: any;
  err: any;
};

function MyApp({ Component, pageProps, router, err }: PropsType) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {/*<MetaTags*/}
      {/*  title="Find team or player"*/}
      {/*  description="Find team or player"*/}
      {/*  image="https://s.starladder.com/uploads/meta/starladder_meta.jpg"*/}
      {/*  url="https://domain"*/}
      {/*>*/}
      {/*  <>*/}
      {/*    <meta name="viewport" content="width=device-width, initial-scale=1" />*/}
      {/*    <meta property="og:site_name" content="Find team or player" />*/}
      {/*    <meta property="og:type" content="website" />*/}
      {/*  </>*/}
      {/*</MetaTags>*/}
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Gyratifel</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*<PageLoadingIndicator />*/}
            <Layout>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component router={router} err={err} {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default withRouter(appWithTranslation(MyApp));
