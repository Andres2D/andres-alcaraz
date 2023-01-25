import * as React from "react";
import { jobsList } from "../constants/Jobs";
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
          <small className={styles.date}> from {job.from}</small>
          { job.to && <small className={styles.date}> to {job.to}</small>}
        </a>
        <h3 className={styles.info}>{job.role}</h3>
        <h3 className={styles.info}>{job.description}</h3>
      </li>
    )
  })

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
    </section>
  )
}

export default Experience;
