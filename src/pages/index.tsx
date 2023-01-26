import * as React from "react";
import type { HeadFC } from "gatsby";
import { Helmet } from 'react-helmet';
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
      </Helmet>
      <Intro />
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
