import * as React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../constants/Contact";
import { MotionWrapper } from "../hoc/motion-container";
import * as styles from './contact.module.scss';
import { textVariant, fadeIn } from '../utils/motion';
import { captureEvent } from "../utils/posthog";

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
    <section className={styles.contact}>
      <motion.div variants={textVariant}>
        <h1 className={styles.sectionTitle}>Contact me</h1>
      </motion.div>
      <div className={styles.list}>
        {imagesLinks}
      </div>
      <img 
        className={styles.badge}
        src="https://www.codewars.com/users/Andres2D/badges/large" 
        alt="codewar-badge"
        onClick={() => captureEvent(`social_codewars_link_clicked`)}
      />
    </section>
  )
}

export default MotionWrapper(Contact);
