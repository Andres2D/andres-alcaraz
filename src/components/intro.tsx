import * as React from "react";
import * as styles from './intro.module.scss';

const Intro: React.FC = () => {

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
      <button className={styles.explore} onClick={handleExploreClick}>
        Explore
      </button>
      <a 
        className={styles.blogLink} 
        href="https://2d-blog-nextjs.vercel.app/">
        Visit my blog
      </a>
    </section>
  )
}

export default Intro;
