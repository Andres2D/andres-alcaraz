import * as React from "react";
import { motion } from "framer-motion";
import * as styles from './skills.module.scss';
import { skills } from '../constants/Skills';
import { Skill } from "../interfaces/Skills";
import { fadeIn, textVariant } from '../utils/motion';
import { MotionWrapper } from "../hoc/motion-container";

const Skills: React.FC = () => {

  const skillsMap = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div key={skill.name} className={styles.bar}>  
        <motion.div variants={textVariant}>
          <h3 className={styles.skillTitle}>{skill.name}</h3>
        </motion.div>  
        <motion.div 
          className={`${styles.progress} ${styles.progressMoved}`}  
          variants={fadeIn('right', 'spring', index * 0.3, 1)}
        >
          <div 
            className={styles.progressBar} 
            style={{ width: skill.progress}}
          >
            <small className={styles.progressValue}>{skill.progress}</small>
          </div>                       
        </motion.div> 
      </div>
    ))
  }

  const topicsMap = Object.keys(skills).map(topic => {
    return (
      <div key={topic} className={styles.topic}>
        <motion.div variants={textVariant}>
          <h3 className={styles.title}>{topic.toUpperCase()}</h3>
        </motion.div>
        {skillsMap(skills[topic])}
      </div>
    )
  })

  return (
    <section className={styles.skills}>
      <motion.div variants={textVariant}>
        <h1 className={styles.title}>Skills</h1>
      </motion.div>
      <div className={styles.topics}>
        {topicsMap}
      </div>
    </section>
  )
}

export default MotionWrapper(Skills);
