import Head from 'next/head'
import { useRouter } from 'next/router';
import Card from "../components/card"
import LanguageSwitcher from '../components/languageSwitcher';
import projects from "../translations/projects";
import text from "../translations/text";

export default function Home() {

  const { locale } = useRouter();

  const currentLanguage = text[locale];
  const translatedProjects = projects[locale];

  return (
    <div className="container mx-auto flex flex-col min-h-screen py-12 px-6">
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
      <section className="header">
        <div className="header__wrap">
          <h1 className="text-4xl font-interBold">Olivier Carignan</h1>
          <span className="header__line"/>
          <p className="">{currentLanguage.intro}</p>
        </div>
      </section>
      <section className="body">
        <div className="body__wrap">
          <p>Node / React / Next.js / Typescript / SCSS / Laravel</p>
          <br/>
          {currentLanguage.description}
          <br/>
          <div className="flex">
            <p><a className="font-medium text-2xl" href="mailto:hey@olividercarignan.dev" target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "contact me" : "contactez-moi"}>contact</a></p>
            <p><a href="https://github.com/olicarignan" className="font-medium text-2xl ml-8" target="_blank" rel="noopener noreferrer" aria-label="github">github</a></p>
            <p><a href="https://www.linkedin.com/in/olivier-carignan/" className="font-medium text-2xl ml-8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">linkedin</a></p>
          </div>
          <br/>
          <div className="border-b border-grey dark:border-white">
            { translatedProjects.map((project) => <Card props={project} />) }
          </div>
        </div>
      </section>
      <LanguageSwitcher locale={locale} text={currentLanguage}/>
    </div>
  );
}
