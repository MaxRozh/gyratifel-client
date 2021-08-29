import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { i18n } from 'next-i18next';

import theme from 'styles/theme';

// import Favicons from 'components/favicons/Favicons';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={i18n.language}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/*<Favicons />*/}
          {/*<FontsInclude />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  // eslint-disable-next-line react/jsx-props-no-spreading,implicit-arrow-linebreak,no-param-reassign
  ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheets.collect(<App {...props} />) });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};

export default MyDocument;
