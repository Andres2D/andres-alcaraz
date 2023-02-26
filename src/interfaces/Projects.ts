export interface Project {
  name: string;
  preview: string;
  description: string;
  urlDeploy: string;
  urlRepository: string;
  engine: Engine[]
}

interface BasePicture {
  name: string;
  width: string;
  height: string;
}

export interface ProjectClient extends BasePicture {
  image: string;
}

export interface Engine extends BasePicture {
  svgSrc: string;
}
