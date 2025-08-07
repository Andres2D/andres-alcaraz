import { Skill } from "../interfaces/Skills";
import { 
  angular, 
  aws, 
  contentful, 
  css, 
  dotnet, 
  express, 
  figma, 
  gatsby, 
  git, 
  github, 
  gitlab, 
  html, 
  java, 
  jest, 
  jira, 
  js, 
  lit, 
  mongodb, 
  mysql, 
  netlify, 
  nextjs, 
  nodejs, 
  npm, 
  nx, 
  php, 
  postgres, 
  posthog, 
  prisma, 
  pwa, 
  react, 
  redux, 
  sass, 
  shadcn, 
  storybook,
  tailwind,
  threejs, 
  typescript, 
  vercel,
  vitejs,
  cursor,
  linear,
  namecheap,
  redis,
  upstash
} from "../images/svg";

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
    {
      name: 'Lit',
      progress: '40%',
      logo: lit,
      color: '#E3E3E3'
    },
    {
      name: 'Shadcn-ui',
      progress: '40%',
      logo: shadcn,
      color: '#FFF'
    },
    {
      name: 'Tailwind',
      progress: '40%',
      logo: tailwind,
      color: '#0e172A'
    },
    {
      name: 'Vite',
      progress: '40%',
      logo: vitejs,
      color: '#FFF'
    }
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
    },
    {
      name: 'PHP',
      progress: '30%',
      logo: php,
      color: '#4E5B94'
    },
    {
      name: 'Java',
      progress: '30%',
      logo: java,
      color: '#3975AF'
    },
    {
      name: 'AWS',
      progress: '30%',
      logo: aws,
      color: '#FFF'
    },
    {
      name: 'Express',
      progress: '30%',
      logo: express,
      color: '#FFF'
    },
    {
      name: 'Dotnet',
      progress: '30%',
      logo: dotnet,
      color: '#AB9AE9'
    },
    {
      name: 'Postgres',
      progress: '30%',
      logo: postgres,
      color: '#212121'
    },
    {
      name: 'Prisma',
      progress: '30%',
      logo: prisma,
      color: '#FFF'
    },
    {
      name: 'Redis',
      progress: '30%',
      logo: redis,
      color: '#091A23'
    },
    {
      name: 'Upstash',
      progress: '30%',
      logo: upstash,
      color: '#081B16'
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
    },
    {
      name: 'Nx',
      progress: '20%',
      logo: nx,
      color: '#FFF'
    },
    {
      name: 'Jira',
      progress: '20%',
      logo: jira,
      color: '#FFF'
    },
    {
      name: 'Netlify',
      progress: '40%',
      logo: netlify,
      color: '#FFF'
    },
    {
      name: 'Vercel',
      progress: '40%',
      logo: vercel,
      color: '#FFF'
    },
    {
      name: 'PostHog',
      progress: '20%',
      logo: posthog,
      color: '#FFF'
    },
    {
      name: 'Figma',
      progress: '40%',
      logo: figma,
      color: '#FFF'
    },
    {
      name: 'npm',
      progress: '40%',
      logo: npm,
      color: '#FFF'
    },
    {
      name: 'Cursor',
      progress: '30%',
      logo: cursor,
      color: '#FFF'
    },
    {
      name: 'Linear',
      progress: '30%',
      logo: linear,
      color: '#FFF'
    },
    {
      name: 'Namecheap',
      progress: '30%',
      logo: namecheap,
      color: '#FFF'
    }
  ]
};
