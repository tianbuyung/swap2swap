import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { Navbar, Footer } from 'components';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  // to Avoid Hydration Mismatch with next-themes
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65" />
        <Component {...pageProps} />
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/22d05d0ace.js" crossOrigin="anonymous" />
    </ThemeProvider>
  );
};

export default MyApp;
