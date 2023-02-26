import * as React from "react";
import { jobsList } from "../constants/Jobs";
import { projects } from "../constants/ClientProjects";
import * as styles from './experience.module.scss';
// TODO: fix import
import developerImage from '../images/developer.svg';
import ielts from '../images/IELTS.png';
import wes from '../images/wes.png';

const Experience: React.FC = () => {

  const jobs = jobsList.map(job => {
    return (
      <li key={job.id} className={styles.job}>
        <a href={job.link} className={`${styles.name} ${styles.link}`}>
          {job.place}
          <small> from {job.from}</small>
          { job.to && <small> to {job.to}</small>}
        </a>
        <h3>{job.role}</h3>
        <h3>{job.description}</h3>
      </li>
    )
  });

  const clientProjects = projects.map(
    ({ image, name, width }) => {
      return <img 
        className={styles.logo}
        key={name} 
        title={name} 
        src={image} 
        alt={name} 
        width={width} 
      />
    }
  );

  return (
    <section className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.container}>
        <ul className={styles.jobList}>
          {jobs}
        </ul>
        <div className={styles.complement}>
          <img className={styles.developerImage} src={developerImage} alt="developer" />
          <article className={styles.certification}>
            <img
              className={styles.badge}
              src={wes}
              alt="wes-certificated"
            />
            <p>
              Software Engineer at
                <a className={styles.link} href="https://www.politecnicojic.edu.co/">
                &nbsp;Politécnico Colombiano Jaime Isaza Cadavid
                </a>
              <br />
              <small>Issued by World Education Services</small>
            </p>
          </article>
          <article className={styles.certification}>
            <img
              className={styles.ielts}
              src={ielts}
              alt="IELTS"
            />
            <p>
              IELTS General Training score of B2
              <br />
              <small>Competent User</small>
            </p>
          </article>
        </div>
      </div>
      <section className={styles.projects}>
        <h2 className={styles.subtitle}>Some projects were I've worked on</h2>
        <div className={styles.projectLogos}>
          { clientProjects }
        </div>
      </section>
    </section>
  )
}

export default Experience;
