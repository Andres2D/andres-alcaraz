import * as React from 'react';
import * as styles from './about.module.scss';
// TODO: fix import warning
import profile from '../images/profile.png';

const About: React.FC = () => {
  return (
    <section id='about' className={styles.about}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.container}>
        <img className={styles.picture} src={profile} alt="Andres Alcaraz" />
        <p className={styles.presentation}>
          Hi, I'm <strong className={styles.spot}>Andres</strong>. I'm a{' '}
          <strong className={styles.spot}>software</strong> engineer from
          Colombia, committed to my work. I enjoy learning new ways to write{' '}
          <strong className={styles.spot}>code</strong> and to improve my
          skills. Every day I try to do it{' '}
          <strong className={styles.spot}>better</strong> than the day before.
          Moreover, I enjoy the music, playing video games and football.
        </p>
      </div>
      <div className={styles.properties}>
        <div className={styles.property}>
          <h3>
            <strong className={styles.front}>Front</strong>end
          </h3>
          <p className={styles.description}>
            Web application designer. Creative solutions and implementations.
          </p>
        </div>
        <div className={styles.property}>
          <h3>
            <strong className={styles.back}>Back</strong>end
          </h3>
          <p className={styles.description}>
            Database manager, micro-services and API developer.
          </p>
        </div>
        <div className={styles.property}>
          <h3>Team + work</h3>
          <p className={styles.description}>
            Knowledge of version control systems, CI/CD. Good communication with
            teammates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
