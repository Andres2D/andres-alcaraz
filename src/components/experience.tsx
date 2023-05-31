import * as React from 'react';
import { motion } from 'framer-motion';
import { jobsList } from '../constants/Jobs';
import { projects } from '../constants/ClientProjects';
import * as styles from './experience.module.scss';
// TODO: fix import
import ielts from '../images/IELTS.png';
import wes from '../images/wes.png';
import { fadeIn, textVariant } from '../utils/motion';
import { MotionWrapper } from '../hoc/motion-container';

const Experience: React.FC = () => {
  const jobs = jobsList.map((job, index) => {
    return (
      <motion.div
        key={job.id}
        variants={fadeIn('up', 'spring', index * 0.2, 1)}
        className={styles.property}
      >
        <li className={styles.job}>
          <a href={job.link} className={`${styles.name} ${styles.link}`}>
            {job.place}
            <small> from {job.from}</small>
            {job.to && <small> to {job.to}</small>}
          </a>
          <h3>{job.role}</h3>
          <h3>{job.description}</h3>
        </li>
      </motion.div>
    );
  });

  const clientProjects = projects.map(({ image, name, width }, index) => {
    return (
      <motion.div
        key={name}
        variants={fadeIn('right', 'spring', index * 0.2, 1)}
        className={styles.property}
      >
        <img
          className={styles.logo}
          title={name}
          src={image}
          alt={name}
          width={width}
        />
      </motion.div>
    );
  });

  return (
    <div className={styles.experience}>
      <motion.div variants={textVariant}>
        <h1 className={styles.title}>Experience</h1>
      </motion.div>
      <div className={styles.container}>
        <ul className={styles.jobList}>{jobs}</ul>
        <motion.div 
          variants={fadeIn('down', 'spring', 0.2, 1)}
          className={styles.complement}>
          <article className={styles.certification}>
            <img className={styles.badge} src={wes} alt="wes-certificated" />
            <p>
              Software Engineer at
              <a
                className={styles.link}
                href="https://www.politecnicojic.edu.co/"
              >
                &nbsp;Politécnico Colombiano Jaime Isaza Cadavid
              </a>
              <br />
              <small>Issued by World Education Services</small>
            </p>
          </article>
          <article className={styles.certification}>
            <img className={styles.ielts} src={ielts} alt="IELTS" />
            <p>
              IELTS General Training - Band 7 - C1
              <br />
              <small>Good User</small>
            </p>
          </article>
        </motion.div>
      </div>
      <section className={styles.projects}>
        <motion.div variants={textVariant}>
          <h2 className={styles.subtitle}>Some projects were I've worked on</h2>
        </motion.div>
        <div className={styles.projectLogos}>{clientProjects}</div>
      </section>
    </div>
  );
};

export default MotionWrapper(Experience);
