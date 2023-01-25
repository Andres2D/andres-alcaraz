import * as React from "react";
import type { HeadFC } from "gatsby";
import Intro from "../components/intro";
import Experience from "../components/experience";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage: React.FC = () => {
  return (
    <>
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
