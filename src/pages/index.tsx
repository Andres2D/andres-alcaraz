import * as React from "react";
import type { HeadFC } from "gatsby";
import Intro from "../components/intro";
import About from "../components/about";

const IndexPage: React.FC = () => {
  return (
    <>
      <Intro />
      <About />
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Andres Alcaraz</title>
