import * as React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../constants/Contact";
import { MotionWrapper } from "../hoc/motion-container";
import * as styles from './contact.module.scss';
import { textVariant, fadeIn } from '../utils/motion';

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
        onClick={() => handleSocialLinkRedirect(place.isEmail, place.link)}
      />
    </motion.div>
  ));
  
  const handleSocialLinkRedirect = (isEmail: boolean, link: string) => {
    if(isEmail) {
      const email = `mailto:andres2d1997.1206@gmail.com?subject=files&body=Hi Andres, I just checked your web page.`;
      window.location.href = email;
    }else {
      window.open(link, '_blank');
    }
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
      />
    </section>
  )
}

export default MotionWrapper(Contact);
