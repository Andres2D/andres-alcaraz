import {
  angular,
  contentful,
  google,
  mapbox,
  mongodb,
  nextjs,
  react,
  redux,
  typescript,
} from '../images/svg';
import {
  blog,
  cotejoApp,
  countryApp,
  diceGame,
  dontGuess,
  gifsApp,
  landingPage,
  mapsApp,
  motoFox
} from '../images/projects';
import { Project } from '../interfaces/Projects';

export const projects: Project[] = [
  {
    name: 'Cotejo App',
    description: 'A funny application to schedule football matches',
    preview: cotejoApp,
    urlDeploy: 'https://cotejoapp.vercel.app/auth',
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
        width: '70px',
        height: '',
      },
    ],
  },
  {
    name: 'Landing page WOLOX',
    description: 'A landing page as a challenge from WOLOX',
    preview: landingPage,
    urlDeploy: 'https://flamboyant-rosalind-288be8.netlify.app/main',
    urlRepository: 'https://github.com/Andres2D/landingpage-wx',
    engine: [
      {
        name: 'Angular',
        svgSrc: angular,
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
    ],
  },
  {
    name: 'GifsApp',
    description: 'Basic gifs search using giphy API',
    preview: gifsApp,
    urlDeploy: 'https://dazzling-roentgen-b4be77.netlify.app/',
    urlRepository: 'https://github.com/Andres2D/gifsApp',
    engine: [
      {
        name: 'Angular',
        svgSrc: angular,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: 'MapsApp',
    description: 'A Map application using Mapbox',
    preview: mapsApp,
    urlDeploy: 'https://dazzling-hawking-69f7b6.netlify.app',
    urlRepository: 'https://github.com/Andres2D/mapsApp',
    engine: [
      {
        name: 'Angular',
        svgSrc: angular,
        width: '25px',
        height: '',
      },
      {
        name: 'Mapbox',
        svgSrc: mapbox,
        width: '25px',
        height: '',
      },
    ],
  },
  {
    name: '2Dice Game',
    description: 'Dice game created on React',
    preview: diceGame,
    urlDeploy: 'https://2dice-game.netlify.app/',
    urlRepository: 'https://github.com/Andres2D/react-dice-game',
    engine: [
      {
        name: 'React',
        svgSrc: react,
        width: '25px',
        height: '',
      },
    ],
  },
];
