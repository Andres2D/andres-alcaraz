import * as React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/Projects';
import { MotionWrapper } from '../hoc/motion-container';
import { external, github } from '../images/svg';
import { Engine } from '../interfaces/Projects';
import * as styles from './projects.module.scss';
import { textVariant, fadeIn } from '../utils/motion';
import { captureEvent } from '../utils/posthog';

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

  const handleProjectClick = (link: string, type: 'preview' | 'github', projectName: string) => {
    captureEvent(`${projectName.replaceAll(' ', '_')}_project_${type}_clicked`);
    window.open(link, '_blank');
  }

  const projectsList = projects.map((project, index) => (
    <motion.div 
      key={project.name} 
      className={styles.card}
      variants={fadeIn('up', 'spring', index * 0.1, 1)}
    >
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
            onClick={() => handleProjectClick(project.urlRepository, 'github', project.name)} 
            className={styles.github} 
            src={github} 
            alt="github"
          />
          <img 
            onClick={() => handleProjectClick(project.urlDeploy, 'preview', project.name)} 
            className={styles.web} 
            src={external}
            alt="web"
          />
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section className={styles.projects}>
      <motion.div variants={textVariant}>
        <h1 className={styles.title}>Projects</h1>
      </motion.div>
      <div className={styles.projectsList}>{projectsList}</div>
    </section>
  );
};

export default MotionWrapper(Projects);
