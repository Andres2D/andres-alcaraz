import * as React from "react";
import type { HeadFC } from "gatsby";
import { Helmet } from 'react-helmet';
import StartsCanvas from '../components/canvas/stars';
import * as styles from './index.module.scss';
import {
  Intro,
  About,
  Experience,
  Skills,
  Projects,
  Contact
} from '../components';

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta name="description" content="Andres Alcaraz, Software Developer" />
        <link rel="icon" type="image/x-icon" href="icons/icon-48x48.png" />
      </Helmet>
      <div className={styles.introContainer}>
        <Intro />
        <StartsCanvas />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Andres Alcaraz</title>
