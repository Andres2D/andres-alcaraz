import * as React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../constants/Contact";
import { MotionWrapper } from "../hoc/motion-container";
import * as styles from './contact.module.scss';
import { textVariant, fadeIn } from '../utils/motion';
import { captureEvent } from "../utils/posthog";
import { StaticImage } from 'gatsby-plugin-image';
import { signature } from "../images/svg";

const Contact: React.FC = () => {

  const imagesLinks = socialMedia.map((place, index) => (
    <motion.div 
      key={place.name}
      variants={fadeIn('right', 'spring', index * 0.2, 1)}
    >
      <img
        className={styles.socialPic}
        src={place.logo} 
        alt={place.name}
        onClick={() => handleSocialLinkRedirect(place.isEmail, place.link, place.source)}
      />
    </motion.div>
  ));
  
  const handleSocialLinkRedirect = (isEmail: boolean, link: string, source: string) => {
    if(isEmail) {
      const email = `mailto:andres2d1997.1206@gmail.com?subject=files&body=Hi Andres, I just checked your web page.`;
      window.location.href = email;
    }else {
      window.open(link, '_blank');
    }
    captureEvent(`social_${source}_link_clicked`);
  }

  

  return (
    <>
      <section className={styles.contact}>
        <motion.div variants={textVariant}>
          <h1 className={styles.sectionTitle}>Contact me</h1>
        </motion.div>
        <div className={styles.list}>
          {imagesLinks}
        </div>
        <div className={styles.artWork} >
          <p className={styles.credits}>
            <span className={styles.pre}>Art by </span> 
            <a href="https://www.instagram.com/that.weirdo.m" target="_blank">that.weirdo.m</a>
          </p>
          <div className={styles.clickable} onClick={() => handleSocialLinkRedirect(false, 'https://github.com/Andres2D', 'signature')}>
            <StaticImage 
              src='../images/2d-drawn.png' alt="Andres Alcaraz Art" 
              width={125}
              height={125}
            />
            <div 
              className={styles.labels} 
            >
            </div>
            <img 
              className={styles.signature}
              src={signature} 
              alt="signature"
              height="115"
              width="115" 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default MotionWrapper(Contact);
