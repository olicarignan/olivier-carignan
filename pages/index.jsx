import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from "next/link";
import Card from "../components/card"

export default function Home() {

  const { locale } = useRouter();

  const projects = [
    {
      title: "Big tech NDA project",
      description: "React, Laravel, GSAP",
      url: null,
      icon: "💻"
    },
    {
      title: "POP Montreal",
      description: "Headless Wordpress, Next.js & GraphQL",
      url: "https://popmontreal.com",
      icon: "🎹"
    },
    {
      title: "Pressbooks",
      description: locale === "en" ? "Made almost entirely using Gutenberg blocks" : "Fait presque exclusivement avec les blocks Gutenberg",
      url: "https://pressbooks.com",
      icon: "📕"
    },
    {
      title: 'Plank',
      description: locale === "en" ? "Wordpress CMS" : "CMS Wordpress",
      url: "https://plank.co",
      icon: "🌱"
    },
    {
      title: 'Evenko (WIP)',
      description: 'Laravel Nova, Laravel Blade, React',
      url: 'https://evenko.ca',
      icon: '🎸'
    },
    {
      title: locale === "en" ? "Web Accessibility Study" : "Étude sur l'accessibilité",
      description: locale === "en" ? "Text" : "Texte",
      url: 'https://medium.com/@oliviercarignan/the-role-of-ux-designers-in-web-accessibility-760725516ee5',
      icon: '✏️'
    },
    {
      title: 'inSight',
      description: 'React, Node, Express',
      url: 'https://github.com/olicarignan/inSight',
      icon: '📅'
    }
  ]

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
        <meta property="og:image" content="💻" />
        <meta property="og:url" content="https://www.oliviercarignan.dev" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"/>
      </Head>
      <div className="header flex justify-between items-center">
        <h1 className="text-4xl font-interBold">Olivier Carignan</h1>
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
        'Front-end Developer & UX Designer'
        ) : (
          'Développeur Front-end & Designer UX'
        )}
        </p>
      <p>Node / React / Next.js / Typescript / Laravel</p>
      <br/>
      {
        locale === "en" ? (
          <p>Currently working at <a href="https://www.plank.co" target="_blank" rel="noopener noreferrer">Plank</a> as a front-end web developer. I have studied graphic design at UQÀM and sometimes work as a freelance graphic designer. I am passionate about UX design and accessibility. Below is a selection of personal and professional projects I have worked on over the years.</p>
        ) : (
          <p>Travaille présentement chez <a href="https://www.plank.co" target="_blank" rel="noopener noreferrer">Plank</a> comme développeur front-end. J'ai étudié en design graphique à l'UQÀM et je travaille occasionnellement comme designer graphique à mon compte. Je suis passionné par le design UX et l'accessibilité. Voici une sélection de projets personnels et professionnels sur lesquels j'ai travaillé au cours des dernières années.</p>
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
        { projects.map((project) => <Card props={project} /> ) }
      </div>
    </div>
  );
}
