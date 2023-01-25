import * as React from "react";
import * as styles from './skills.module.scss';
import { skills } from '../constants/Skills';
import { Skill } from "../interfaces/Skills";

const Skills: React.FC = () => {

  const skillsMap = (skills: Skill[]) => {
    return skills.map(skill => (
      <div key={skill.name} className={styles.bar}>    
        <h3 className={styles.skillTitle}>{skill.name}</h3>
        <div className={`${styles.progress} ${styles.progressMoved}`}>
          <div className={styles.progressBar} style={{ width: skill.progress}}>
            <small className={styles.progressValue}>{skill.progress}</small>
          </div>                       
        </div> 
      </div>
    ))
  }

  const topicsMap = Object.keys(skills).map(topic => {
    return (
      <div key={topic} className={styles.topic}>
        <h3 className={styles.title}>{topic.toUpperCase()}</h3>
        {skillsMap(skills[topic])}
      </div>
    )
  })

  return (
    <section className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.topics}>
        {topicsMap}
      </div>
    </section>
  )
}

export default Skills;
