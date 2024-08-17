// _app.js or index.js
// pages/_app.js
import '../styles/globals.css'; // Import your global styles
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
