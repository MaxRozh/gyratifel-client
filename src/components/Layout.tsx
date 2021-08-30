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
      <div style={{ minHeight: 'calc(100vh - 239px)' }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
