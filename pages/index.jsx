import { useRouter } from 'next/router';
import projects from "../translations/projects";
import text from "../translations/text";
import jobs from '../translations/jobs';
import studies from "../translations/studies";

import Header from '../components/header';
import Project from "../components/project"
import Job from '../components/job';
import Study from '../components/study';

export default function Home() {

  const { locale } = useRouter();

  const currentLanguage = text[locale];
  const translatedProjects = projects[locale];
  const translatedJobs = jobs[locale];
  const translatedStudies = studies[locale];

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
              <div className='right right--list'>{translatedProjects.map((project) => <Project project={project} key={project.title} />)}</div>
            </section>

            <section className="work split-container border-b border-grey dark:border-white">
              <p>{currentLanguage.work}</p>
              <div className='right right--list'>{translatedJobs.map((job) => <Job job={job} key={job.position} />)}</div>
            </section>

            <section className="studies split-container">
              <p>{currentLanguage.studies}</p>
              <div className='right right--list'>{translatedStudies.map((study) => <Study study={study} key={study.title} />)}</div>
            </section>

          </div>
          <div className="language">
          </div>
        </div>
      </section>
    </div>
  );
}
