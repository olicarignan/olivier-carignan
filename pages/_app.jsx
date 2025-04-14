import 'tailwindcss/tailwind.css'
import "../styles/main.scss";
import text from '../translations/text';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  const { locale } = useRouter();

  const currentLanguage = text[locale];

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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💿</text></svg>"/>
      </Head>
      <div className="container__outer dark:bg-grey dark:text-white font-monumentGrotesk">
        <Component {...pageProps} />
      </div>
      <Analytics/>
    </>
  );
}

export default MyApp
