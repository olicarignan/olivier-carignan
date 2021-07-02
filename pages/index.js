import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Home() {

  const { locale } = useRouter();
  
  return (
    <div className="container mx-auto flex flex-col min-h-screen py-12 px-6">
      <Head>
        <title>Olivier Carignan</title>
        <meta name="description" content="the #1 source for Olivier Carignan content"/>
        <meta name="robots" content="all" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fffff9"/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1b191f"/>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"/>
      </Head>
      <div className="header flex justify-between items-center">
        <h1 className="text-4xl">Olivier Carignan</h1>
        <Link href="/" locale={locale === "en" ? "fr" : "en"}>
          <a aria-label={locale === "en" ? "site en français" : "english site"}>
            <p className="text-2xl">
                {locale === "en" ? "FR" : "EN"}
            </p>
          </a>
        </Link>
      </div>
      <br/>
      <p className="">{locale === "en" ? (
        'Front-end Developer & UX / UI Designer'
        ) : (
          'Développeur Front-end & Designer UX / UI'
        )}
        </p>
      <p>Node / React / Next.js / Typescript / Blade</p>
      <br/>
      {
        locale === "en" ? (
          <p>Currently working at <a href="https://www.plankdesign.com" target="_blank" rel="noopener noreferrer">Plank</a> as a front-end web developer. I have studied graphic design at UQÀM and sometimes work as a freelance graphic designer. I am passionate about UX design and accessibility. Below is a selection of personal and professional projects I have worked on over the years.</p>
        ) : (
          <p>Travaille présentement chez <a href="https://www.plankdesign.com" target="_blank" rel="noopener noreferrer">Plank</a> comme développeur front-end. J'ai étudié en design graphique à l'UQÀM et je travaille occasionnellement comme designer graphique à mon compte. Je suis passionné par le design UX et l'accessibilité. Voici une sélection de projets personnels et professionnels sur lesquels j'ai travaillé au cours des dernières années.</p>
        )
      }
      <br/>
      <div className="flex">
        <p><a className="font-medium text-3xl" href="mailto:olivier.carignan@hey.com" target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "contact me" : "contactez-moi"}>contact</a></p>
        <p><a href="https://github.com/olicarignan" className="font-medium text-3xl ml-8" target="_blank" rel="noopener noreferrer" aria-label="github">github</a></p>
        <p><a href="https://www.linkedin.com/in/olivier-carignan/" className="font-medium text-3xl ml-8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">linkedin</a></p>
      </div>
      <br/>
      <div className="border-b border-grey dark:border-white">
        <a href="https://popmontreal.com" target="_blank" rel="noopener noreferrer" aria-label="Pop montreal site">
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">🎹</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">POP Montreal_WIP</p><span className="mx-4">—</span><span className="font-normal text-2xl">Headless Wordpress, Next.js & GraphQL</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
        <a href="https://pressbooks.com" target="_blank" rel="noopener noreferrer" aria-label="Pressbooks site">
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">📕</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">Pressbooks</p><span className="mx-4">—</span><span className="font-normal text-2xl">{locale === "en" ? "Made almost entirely using Gutenberg blocks" : "Fait presque exclusivement avec les blocks Gutenberg"}</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
        <a href="https://plankdesign.com" target="_blank" rel="noopener noreferrer" aria-label="Plank site">
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">🌱</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">Plank</p><span className="mx-4">—</span><span className="font-normal text-2xl">{locale === "en" ? "Wordpress CMS" : "CMS Wordpress"}</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
        <a href="https://evenko.ca" target="_blank" rel="noopener noreferrer" aria-label="Evenko site">
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">🎸</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">Evenko_WIP</p><span className="mx-4">—</span><span className="font-normal text-2xl">Laravel Nova, Laravel Blade, React</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
        <a href="https://medium.com/@oliviercarignan/the-role-of-ux-designers-in-web-accessibility-760725516ee5" target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "web accessibility study" : "étude sur l'accessibilité"}>
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">✏️</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">{locale === "en" ? "Web Accessibility Study" : "Étude sur l'accessibilité"}</p><span className="mx-4">—</span><span className="font-normal text-2xl">{locale === "en" ? "Text" : "Texte"}</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
        <a href="https://github.com/olicarignan/inSight" target="_blank" rel="noopener noreferrer" aria-label="Evenko site">
          <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
            <p className="text-5xl">📅</p>
            <div className="project-text mx-8 flex items-center">
              <p className="project-title font-bold text-2xl flex items-center">inSight</p><span className="mx-4">—</span><span className="font-normal text-2xl">React, Node, Express</span>
            </div>
            <div className="project-arrow font-bold">&#10230;</div>
          </div>
        </a>
      </div>
    </div>
  );
}
