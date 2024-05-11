import * as React from "react";
import { motion } from "framer-motion";
import * as styles from './skills.module.scss';
import { skills } from '../constants/Skills';
import { Skill } from "../interfaces/Skills";
import { textVariant } from '../utils/motion';
import { MotionWrapper } from "../hoc/motion-container";

const Skills: React.FC = () => {

  const skillsMap = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div 
        key={skill.name} 
        className={styles.card}
        style={{
          backgroundColor: skill.color
        }}
        title={skill.name}
      >  
        <img 
          className={styles.logo}
          src={skill.logo} 
          alt={skill.name} 
        />
      </div>
    ))
  }

  const topicsMap = Object.keys(skills).map(topic => {
    return (
      <div key={topic} className={styles.container}>
        <motion.div variants={textVariant}>
          <h3 className={styles.title}>{topic.toUpperCase()}</h3>
        </motion.div>
        <div className={styles.topic}>
          {skillsMap(skills[topic])}
        </div>
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
