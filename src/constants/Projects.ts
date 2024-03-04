import {
  angular,
  contentful,
  google,
  mongodb,
  nextjs,
  react,
  redux,
  typescript,
  vercel,
  musixmatch,
  spotify,
  netlify,
  rapidapi,
  pwa,
  vitejs,
  vue,
  gatsby
} from '../images/svg';
import {
  blog,
  cotejoApp,
  countryApp,
  marketing,
  dontGuess,
  motoFox,
  meaningful,
  playlistMaster,
  wordleClone
} from '../images/projects';
import { Project } from '../interfaces/Projects';

export const projects: Project[] = [
  {
    name: 'Cotejo App',
    description: 'A funny application to schedule football matches',
    preview: cotejoApp,
    urlDeploy: 'https://cotejoapp.vercel.app',
    urlRepository: 'https://github.com/Andres2D/cotejo-app-v2-nextjs',
    engine: [
      {
        name: 'NextJS',
        svgSrc: nextjs,
        width: '25px',
        height: '',
      },
      {
        name: 'Redux',
        svgSrc: redux,
        width: '25px',
        height: '',
      },
      {
        name: 'google-developers',
        svgSrc: google,
        width: '30px',
        height: '',
      },
      {
        name: 'mongodb',
        svgSrc: mongodb,
        width: '12px',
        height: '',
      },
      {
        name: 'vercel',
        svgSrc: vercel,
        width: '25px',
        height: '',
      }
    ],
  },
  {
    name: 'Playlist Master',
    description: 'Guess the song based on the lyrics',
    preview: playlistMaster,
    urlDeploy: 'https://playlist-master.vercel.app/',
    urlRepository: 'https://github.com/Andres2D/playlist-master',
    engine: [
      {
        name: 'Next',
        svgSrc: nextjs,
        width: '25px',
        height: '',
      },
      {
        name: 'spotify',
        svgSrc: spotify,
        width: '25px',
        height: '',
      },
      {
        name: 'musixmatch',
        svgSrc: musixmatch,
        width: '25px',
        height: '',
      },
      {
        name: 'vercel',
        svgSrc: vercel,
        width: '25px',
        height: '',
      },
      {
        name: 'mongodb',
        svgSrc: mongodb,
        width: '12px',
        height: '',
      },
    ],
  },
  {
    name: 'meaningful',
    description: 'A PWA to get word definitions and create great phone backgrounds.',
    preview: meaningful,
    urlDeploy: 'https://meaningful-one.vercel.app/',
    urlRepository: 'https://github.com/Andres2D/meaningful',
    engine: [
      {
        name: 'Vite',
        svgSrc: vitejs,
        width: '25px',
        height: '',
      },
      {
        name: 'PWA',
        svgSrc: pwa,
        width: '40px',
        height: '',
      },
      {
        name: 'RapidApi',
        svgSrc: rapidapi,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: 'Wordle clone',
    description: 'A clone of the game Wordle using Vue',
    preview: wordleClone,
    urlDeploy: 'https://wordle-clone-vue-five.vercel.app/',
    urlRepository: 'https://github.com/Andres2D/wordle-clone-vue',
    engine: [
      {
        name: 'Vue',
        svgSrc: vue,
        width: '25px',
        height: '',
      }
    ],
  },
  {
    name: 'Professional portfolio',
    description: 'A portfolio page for a Marketing specialist',
    preview: marketing,
    urlDeploy: 'https://sebastian-alcaraz-site.vercel.app/',
    urlRepository: 'https://github.com/Andres2D/portfolio-sacz',
    engine: [
      {
        name: 'Gatsby',
        svgSrc: gatsby,
        width: '25px',
        height: '',
      },
      {
        name: 'Vervel',
        svgSrc: vercel,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: 'MotoFox App',
    description:
      'Static WebSite to launch information about a local businesses',
    preview: motoFox,
    urlDeploy: 'https://motofox-belen.netlify.app/',
    urlRepository: 'https://github.com/Andres2D/moto-fox-webapp',
    engine: [
      {
        name: 'Angular',
        svgSrc: angular,
        width: '25px',
        height: '',
      },
      {
        name: 'Contentful',
        svgSrc: contentful,
        width: '25px',
        height: '',
      },
      {
        name: 'Netlify',
        svgSrc: netlify,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: "Don't Guess",
    description: 'Trivias app based on public API, build with React',
    preview: dontGuess,
    urlDeploy: 'https://dont-guess-beta.netlify.app/main',
    urlRepository: 'https://github.com/Andres2D/responsa-master-react',
    engine: [
      {
        name: 'React',
        svgSrc: react,
        width: '25px',
        height: '',
      },
      {
        name: 'Redux',
        svgSrc: redux,
        width: '25px',
        height: '',
      },
      {
        name: 'Netlify',
        svgSrc: netlify,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: 'CountriesApp',
    description: 'Get the last information about geography',
    preview: countryApp,
    urlDeploy: 'https://countries-app-2d.netlify.app/countries',
    urlRepository: 'https://github.com/Andres2D/all-my-countries-reac',
    engine: [
      {
        name: 'React',
        svgSrc: react,
        width: '25px',
        height: '',
      },
      {
        name: 'Typescript',
        svgSrc: typescript,
        width: '25px',
        height: '',
      },
      {
        name: 'Netlify',
        svgSrc: netlify,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: '2D-Blog',
    description: 'Personal blog about programming stuff',
    preview: blog,
    urlDeploy: 'https://2d-blog-nextjs.vercel.app/',
    urlRepository: 'https://github.com/Andres2D/2d-blog-nextjs',
    engine: [
      {
        name: 'React',
        svgSrc: react,
        width: '25px',
        height: '',
      },
      {
        name: 'NextJS',
        svgSrc: nextjs,
        width: '25px',
        height: '',
      },
      {
        name: 'Vercel',
        svgSrc: vercel,
        width: '25px',
        height: '',
      },
    ],
  },
];
