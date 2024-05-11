import { Skill } from "../interfaces/Skills";
import { angular, contentful, css, gatsby, git, github, gitlab, html, jest, js, mongodb, mysql, nextjs, nodejs, pwa, react, redux, sass, storybook, threejs, typescript } from "../images/svg";

export const skills: { [topic: string]: Skill[]} = {
  frontend: [
    {
      name: 'HTML',
      progress: '80%',
      logo: html,
      color: '#E44D26'
    },
    {
      name: 'CSS',
      progress: '70%',
      logo: css,
      color: '#264DE4'
    },
    {
      name: 'Sass',
      progress: '50%',
      logo: sass,
      color: '#CD6799'
    },
    {
      name: 'JS',
      progress: '70%',
      logo: js,
      color: '#F7DF1E'
    },
    {
      name: 'TS',
      progress: '60%',
      logo: typescript,
      color: '#3178C6'
    },
    {
      name: 'Angular',
      progress: '90%',
      logo: angular,
      color: '#E23237',
    },
    {
      name: 'React',
      progress: '30%',
      logo: react,
      color: '#37D8FF'
    },
    {
      name: 'NextJS',
      progress: '60%',
      logo: nextjs,
      color: '#FFF'
    },
    {
      name: 'Gatsby',
      progress: '40%',
      logo: gatsby,
      color: '#663399'
    },
    {
      name: 'PWA',
      progress: '40%',
      logo: pwa,
      color: '#9E95E3'
    },
    {
      name: 'Redux',
      progress: '40%',
      logo: redux,
      color: '#593D88'
    },
    {
      name: 'Three.js',
      progress: '10%',
      logo: threejs,
      color: '#FFF'
    },
  ],
  backend: [
    {
      name: 'NODE JS',
      progress: '50%',
      logo: nodejs,
      color: '#539E43'
    },
    {
      name: 'MySql',
      progress: '30%',
      logo: mysql,
      color: '#FFF'
    },
    {
      name: 'MongoDB',
      progress: '40%',
      logo: mongodb,
      color: '#2DEC64'
    }
  ],
  others: [
    {
      name: 'git',
      progress: '80%',
      logo: git,
      color: '#DE4C35'
    },
    {
      name: 'GitHub',
      progress: '80%',
      logo: github,
      color: '#FFF'
    },
    {
      name: 'GitLab',
      progress: '60%',
      logo: gitlab,
      color: '#FBA326'
    },
    {
      name: 'Headless CMS',
      progress: '30%',
      logo: contentful,
      color: '#FAE503',
    },
    {
      name: 'Jest',
      progress: '80%',
      logo: jest,
      color: '#99425b'
    },
    {
      name: 'Storybook',
      progress: '50%',
      logo: storybook,
      color: '#FA4785'
    }
  ]
}