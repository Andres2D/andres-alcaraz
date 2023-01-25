import * as React from "react";
import type { HeadFC } from "gatsby";
import Intro from "../components/intro";
import Experience from "../components/experience";
import About from "../components/about";

const IndexPage: React.FC = () => {
  return (
    <>
      <Intro />
      <About />
      <Experience />
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Andres Alcaraz</title>
