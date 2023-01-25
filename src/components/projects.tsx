import * as React from 'react';
import { projects } from '../constants/Projects';
import { external, github } from '../images/svg';
import { Engine } from '../interfaces/Projects';
import * as styles from './projects.module.scss';

const Projects: React.FC = () => {
  const enginesMap = (engines: Engine[]) => {
    return engines.map((engine) => (
      <img
        key={engine.name}
        className={styles.engineIcon}
        src={engine.svgSrc}
        alt={engine.name}
        style={{ width: engine.width }}
        title={engine.name}
      />
    ));
  };

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank');
  }

  const projectsList = projects.map((project) => (
    <div key={project.name} className={styles.card}>
      <img
        className={styles.preview}
        src={project.preview}
        alt={project.name}
      />
      <div className={styles.engine}>{enginesMap(project.engine)}</div>
      <div className={styles.projectInfo}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          <img 
            onClick={() => handleProjectClick(project.urlRepository)} 
            className={styles.github} 
            src={github} 
          />
          <img 
            onClick={() => handleProjectClick(project.urlDeploy)} 
            className={styles.web} 
            src={external}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsList}>{projectsList}</div>
    </section>
  );
};

export default Projects;
