import * as React from 'react';
import * as styles from './about.module.scss';
import { motion } from 'framer-motion';
// TODO: fix import warning
import profile from '../images/profile.png';
import { textVariant, fadeIn } from '../utils/motion';
import { MotionWrapper } from '../hoc/motion-container';
import { complementSkills } from '../constants/About';


const complementarySkillsMap = complementSkills.map((skill, index) => {
  return (
    <motion.div
      key={skill.id}
      variants={fadeIn('up', 'spring', index * 0.1, 1)}
      className={styles.property}>
      {
        skill.subtitle ?
          <h3>
            <strong className={styles[skill.titleClass!]}>{skill.title}</strong>{skill.subtitle}
          </h3>
        :
          <h3>{skill.title}</h3>
      }
      <p className={styles.description}>
        Web application designer. Creative solutions and implementations.
      </p>
    </motion.div>
  )
})


const About: React.FC = () => {
  return (
    <div id="about" className={styles.about}>
      <motion.div variants={textVariant}>
        <h1 className={styles.title}>About</h1>
      </motion.div>
      <div className={styles.container}>
        <motion.div 
          className={styles.picture}
          variants={fadeIn('down', 'spring', 0.1, 1)}
        >
          <img className={styles.image} src={profile} alt="Andres Alcaraz" />
        </motion.div>
        <motion.div 
          className={styles.presentation}
          variants={fadeIn('up', 'spring', 0.1, 1)}
        >
          <p>
            Hi, I'm <strong className={styles.spot}>Andres</strong>. I'm a{' '}
            <strong className={styles.spot}>software</strong> engineer from
            Colombia, committed to my work. I enjoy learning new ways to write{' '}
            <strong className={styles.spot}>code</strong> and to improve my
            skills. Every day I try to do it{' '}
            <strong className={styles.spot}>better</strong> than the day before.
            Moreover, I enjoy the music, playing video games and football.
          </p>
        </motion.div>
      </div>
      <div className={styles.properties}>
        {complementarySkillsMap}
      </div>
    </div>
  );
};

export default MotionWrapper(About);
