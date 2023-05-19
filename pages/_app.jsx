import 'tailwindcss/tailwind.css'
import "../styles/main.scss";
import text from '../translations/text';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function MyApp({ Component, pageProps }) {

  const { locale } = useRouter();

  const lenis = useRef(null);

  const currentLanguage = text[locale];

  useEffect(() => {

    lenis.current = new Lenis({})

    lenis.current.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [lenis]);

  return (
    <>
      <Head>
        <title>Olivier Carignan</title>
        <meta name="description" content="the #1 source for Olivier Carignan content"/>
        <meta name="robots" content="all" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fffff9"/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1b191f"/>
        <meta property="og:title" content="Olivier Carignan | Front-End Developer &amp; UX / UI Designer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="💿" />
        <meta property="og:url" content="https://www.oliviercarignan.dev" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔴</text></svg>"/>
      </Head>
      <div className="container__outer dark:bg-grey dark:text-white font-helveticaNow" ref={lenis}>
        <Component {...pageProps} />
      </div>
      <Analytics/>
    </>
  );
}

export default MyApp
