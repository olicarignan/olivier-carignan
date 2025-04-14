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
            <section className="about split-container">
              <h2>{currentLanguage.about}</h2>
              <article className='right'>{currentLanguage.aboutText}</article>
            </section>

            <section className="expertise split-container">
              <h2>{currentLanguage.expertise}</h2>
              <article className='right right--tags'>{currentLanguage.expertiseText.map((expertise) => <span>{expertise}</span>)}</article>
            </section>

            <section className="projects split-container">
              <h2>{currentLanguage.projects}</h2>
              <div className='right right--list'>{translatedProjects.map((project) => <Project project={project} key={project.title} />)}</div>
            </section>

            <section className="work split-container">
              <h2>{currentLanguage.work}</h2>
              <div className='right right--list'>{translatedJobs.map((job) => <Job job={job} key={job.position} />)}</div>
            </section>

            <section className="studies split-container">
              <h2>{currentLanguage.studies}</h2>
              <div className='right right--list'>{translatedStudies.map((study) => <Study study={study} key={study.title} />)}</div>
            </section>
        </div>
      </section>
    </div>
  );
}
