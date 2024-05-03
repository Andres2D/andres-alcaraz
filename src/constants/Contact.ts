import { SocialMedia } from "../interfaces/Contact";
import {
  github,
  npm,
  linkedin,
  gmail,
  stackblitz,
  codepen,
  facebook,
  instagram,
  spotify,
  leetcode,
  x,
  discord
} from '../images/svg';

export const socialMedia: SocialMedia[] = [
  {
    name: 'github.com/Andres2D',
    link: 'https://github.com/Andres2D',
    logo: github,
    isEmail: false
  },
  {
    name: 'npm',
    link: 'https://www.npmjs.com/~andres2d',
    logo: npm,
    isEmail: false
  },
  {
    name: 'linkedin/andres-alcaraz',
    link: 'https://www.linkedin.com/in/andres-alcaraz',
    logo: linkedin,
    isEmail: false
  },
  {
    name: 'andres2d1997.1206@gmail.com',
    link: 'andres2d1997.1206@gmail.com',
    logo: gmail,
    isEmail: true
  },
  {
    name: 'stackblitz',
    link: 'https://stackblitz.com/@Andres2D',
    logo: stackblitz,
    isEmail: false
  },
  {
    name: 'codepen',
    link: 'https://codepen.io/Andres2D',
    logo: codepen,
    isEmail: false
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/andres.alcaraz.794',
    logo: facebook,
    isEmail: false
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/andres.2d',
    logo: instagram,
    isEmail: false
  },
  {
    name: 'X',
    link: 'https://twitter.com/Andres_2D_',
    logo: x,
    isEmail: false
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/12168562021?si=0187e560c6994060',
    logo: spotify,
    isEmail: false
  },
  {
    name: 'Leetcode',
    link: 'https://leetcode.com/Andres2D/',
    logo: leetcode,
    isEmail: false
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/Andres2D#0838',
    logo: discord,
    isEmail: false
  }
];
