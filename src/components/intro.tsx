import * as React from "react";
import { motion } from "framer-motion"; 
import * as styles from './intro.module.scss';
import { captureEvent } from "../utils/posthog";

const Intro: React.FC = () => {

  const openToWork = true;

  const handleExploreClick = () => {
    captureEvent('explore_button_clicked');
    let el = document.getElementById('about');
    el?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>
        Hi, I'm <strong className={styles.name}>Andres Alcaraz,</strong>
      </h1>
      <h2 className={styles.subtitle}>
        I'm a Software Engineer
      </h2>
      <h3 className={styles.status}>
        <img className={styles.flagIcon} src="https://flagcdn.com/co.svg" alt="colombia" /> 
        <img className={styles.flagIcon} src="https://flagcdn.com/ca.svg" alt="canada" />
      </h3>
      <motion.button 
        className={styles.explore} 
        onClick={handleExploreClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore
      </motion.button>
      <a 
        className={styles.blogLink}
        onClick={() => captureEvent('visit_vsco_button_clicked')}
        href="http://vsco.co/andres-2d?share=MTc0NzA2NjU1Mg%3D%3D"
        target="_blank"  
      >
        vsco.co/andres-2d
      </a>
      {
        openToWork &&
        <a 
          href="https://www.linkedin.com/in/andres-alcaraz" 
          onClick={() => captureEvent('open_to_work_button_clicked')}
          className={styles.liveButton}
          target="_blank"
        >
          Open to work
          <span className={styles.liveIcon} />
        </a>
      }
    </section>
  )
}

export default Intro;
