import * as React from "react";
import { socialMedia } from "../constants/Contact";
import * as styles from './contact.module.scss';

const Contact: React.FC = () => {

  const imagesLinks = socialMedia.map(place => (
    <img
      key={place.name}
      className={styles.socialPic}
      src={place.logo} 
      alt={place.name}
      onClick={() => handleSocialLinkRedirect(place.link)}
    />
  ));
  
  const handleSocialLinkRedirect = (link: string) => {
    window.open(link, '_blank');
  }

  return (
    <section className={styles.contact}>
      <h1 className={styles.sectionTitle}>Contact me</h1>
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

export default Contact;
