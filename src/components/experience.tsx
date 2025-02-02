import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { projects } from '../constants/ClientProjects';
import * as styles from './experience.module.scss';
import { fadeIn, textVariant } from '../utils/motion';
import { experience } from '../constants/Experience';
import { 
  EducationIcon, 
  WorkerIcon, 
  DeveloperIcon,
  LanguageIcon 
} from '../assets/icons';
import { captureEvent } from '../utils/posthog';

const Experience: React.FC = () => {

  const mapIcons: { [key: string]: any } = {
    'developer': <DeveloperIcon />,
    'worker': <WorkerIcon />,
    'language': <LanguageIcon />,
    'education': <EducationIcon />
  };

  const experienceMap = experience.map((exp) => {
    return (
      <VerticalTimelineElement
        key={exp.id}
        date={`${exp.from} ${exp.to ? ` - ${exp.to}` : ''}`}
        icon={mapIcons[exp.icon]}
      >
        <h3 className="vertical-timeline-element-title">
          {exp.title}
        </h3>
        <a 
          className="vertical-timeline-element-subtitle"
          onClick={() => exp.postHogId && captureEvent(exp.postHogId)}
          style={{ textDecoration: 'underline', color: '#3953ab' }}
          href={exp.link}
          target='_blank'
        >
          {exp.place}
        </a>
        <p>
          {exp.description}
        </p>
      </VerticalTimelineElement>
    );
  });

  const clientProjects = projects.map(({ image, name, width, url, postHogId }, index) => {
    return (
      <motion.div
        key={name}
        variants={fadeIn('right', 'spring', index * 0.2, 1)}
        className={styles.property}
      >
        <img
          className={`${styles.logo} ${url ? styles.isRedirect : ''}`}
          title={name}
          src={image}
          alt={name}
          width={width}
          onClick={() => handleProjectClick(url, postHogId)}
        />
      </motion.div>
    );
  });

  const handleProjectClick = (url?: string, postHogId?: string) => {
    if(url) {
      window.open(url, '_blank');
    }

    if(postHogId) {
      captureEvent(postHogId);
    }
  }

  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <VerticalTimeline>
        {experienceMap}
      </VerticalTimeline>
      <section className={styles.projects}>
        <motion.div variants={textVariant}>
          <h2 className={styles.subtitle}>Some projects I've worked on</h2>
        </motion.div>
        <div className={styles.projectLogos}>{clientProjects}</div>
      </section>
    </div>
  );
};

export default Experience;
