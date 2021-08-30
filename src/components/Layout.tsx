import React from 'react';

import Header from 'components/header/Header';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';
import Footer from 'components/footer/Footer';

type PropsType = {
  children: any;
};

function Layout({ children }: PropsType) {
  return (
    <>
      <Header />
      <PageLoadingIndicator />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
