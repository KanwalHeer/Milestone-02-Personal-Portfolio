// pages/_app.js
// pages/_app.tsx
import '../styles/globals.css'; // Import your global styles
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
