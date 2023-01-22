import * as React from "react";
import type { HeadFC } from "gatsby";
import Intro from "../components/intro";

const IndexPage: React.FC = () => {
  return (
    <>
      <Intro />
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Andres Alcaraz</title>
