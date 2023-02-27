import { useRouter } from 'next/router';
import Card from "../components/card"
import projects from "../translations/projects";
import text from "../translations/text";

import Header from '../components/header';

export default function Home() {

  const { locale } = useRouter();

  const currentLanguage = text[locale];
  const translatedProjects = projects[locale];

  return (
    <div className="container mx-auto px-6">

      <Header currentLanguage={currentLanguage} />

      <section className="body">
        <div className="body__wrap">
          <div className="border-t border-grey dark:border-white">

            <section className="about split-container border-b border-grey dark:border-white">
              <p>{currentLanguage.about}</p>
              <p className='right'>{currentLanguage.aboutText}</p>
            </section>

            <section className="expertise split-container border-b border-grey dark:border-white">
              <p>{currentLanguage.expertise}</p>
              <p className='right right--tags'>{currentLanguage.expertiseText.map((expertise) => <span>{expertise}</span>)}</p>
            </section>

            <section className="projects split-container border-b border-grey dark:border-white">
              <p>{currentLanguage.projects}</p>
              <div className='right right--list'>{translatedProjects.map((project) => <Card project={project} key={project.title} />)}</div>
            </section>
            {/* { translatedProjects.map((project) => <Card props={project} key={project.title} />) } */}
          </div>
          <div className="language">
          </div>
        </div>
      </section>
    </div>
  );
}
