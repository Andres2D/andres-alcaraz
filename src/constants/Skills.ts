import { Skill } from "../interfaces/Skills";

export const skills: { [topic: string]: Skill[]} = {
  frontend: [
    {
      name: 'HTML',
      progress: '80%'
    },
    {
      name: 'CSS',
      progress: '70%'
    },
    {
      name: 'Sass',
      progress: '50%'
    },
    {
      name: 'JS',
      progress: '70%'
    },
    {
      name: 'TS',
      progress: '60%'
    },
    {
      name: 'Angular',
      progress: '90%'
    },
    {
      name: 'React',
      progress: '30%'
    },
    {
      name: 'NextJS',
      progress: '60%'
    },
    {
      name: 'Gatsby',
      progress: '40%'
    }
  ],
  backend: [
    {
      name: 'NODE JS',
      progress: '50%'
    },
    {
      name: 'MySql',
      progress: '30%'
    },
    {
      name: 'MongoDB',
      progress: '40%'
    }
  ],
  others: [
    {
      name: 'git',
      progress: '80%'
    },
    {
      name: 'GitHub',
      progress: '80%'
    },
    {
      name: 'GitLab',
      progress: '60%'
    },
    {
      name: 'Headless CMS',
      progress: '30%'
    },
    {
      name: 'Jest',
      progress: '80%'
    },
    {
      name: 'Storybook',
      progress: '50%'
    },
    {
      name: 'Appian',
      progress: '40%'
    },
    {
      name: 'framer-motion',
      progress: '20%'
    },
    {
      name: 'Three.js',
      progress: '10%'
    },
  ]
}