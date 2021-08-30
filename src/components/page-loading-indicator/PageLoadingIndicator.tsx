// @flow

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LinearProgress from '@material-ui/core/LinearProgress';

const PageLoadingIndicator = () => {
  const router = useRouter();
  const [isLoad, setLoad] = useState(false);
  const handleRouteChangeStart = () => {
    setLoad(true);
  };
  const handleRouteChangeComplete = () => {
    setLoad(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  if (!isLoad) return null;

  return <LinearProgress />;
};

export default PageLoadingIndicator;
