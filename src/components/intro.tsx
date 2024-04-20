import * as React from "react";
import { motion } from "framer-motion"; 
import * as styles from './intro.module.scss';

const Intro: React.FC = () => {

  const openToWork = false;

  const handleExploreClick = () => {
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
        🇨🇴 🇨🇦
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
        href="https://2d-blog-nextjs.vercel.app/">
        Visit my blog
      </a>
      {
        openToWork &&
        <a 
          href="https://www.linkedin.com/in/andres-alcaraz" 
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
