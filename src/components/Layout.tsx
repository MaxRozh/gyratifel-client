import React from 'react';

import Header from 'components/header/NewHeader';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';
import Footer from 'components/footer/NewFooter';

type PropsType = {
  children: any;
};

function Layout({ children }: PropsType) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <PageLoadingIndicator />
      <main className="flex-grow" style={{ minHeight: 'calc(100vh - 239px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
