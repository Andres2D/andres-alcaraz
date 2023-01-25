export interface Project {
  name: string;
  preview: string;
  description: string;
  urlDeploy: string;
  urlRepository: string;
  engine: Engine[]
}

export interface Engine {
  name: string;
  svgSrc: string;
  width: string;
  height: string;
}
