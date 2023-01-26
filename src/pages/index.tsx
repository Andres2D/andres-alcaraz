import * as React from "react";
import type { HeadFC } from "gatsby";
import { Helmet } from 'react-helmet';
import Intro from "../components/intro";
import Experience from "../components/experience";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

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
