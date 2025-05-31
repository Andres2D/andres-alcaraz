import * as React from "react";
import { motion } from "framer-motion"; 
import * as styles from './intro.module.scss';
import { captureEvent } from "../utils/posthog";
import { LocationIcon } from "../assets/icons";

const Intro: React.FC = () => {

  const openToWork = false;
  const currentLocation = 'New Brunswick, Saint John';

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
      <p className={styles.location}>{ currentLocation } <LocationIcon /></p>
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
        onClick={() => captureEvent('visit_blog_button_clicked')}
        href="https://2d-blog-nextjs.vercel.app/">
        Visit my blog
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
