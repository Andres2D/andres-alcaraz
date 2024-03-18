import {
  numrot,
  kavak,
  keralty,
  ecopetrol
} from '../images/projects';

import { ProjectClient } from '../interfaces/Projects';

export const projects: ProjectClient[] = [
  {
    name: 'Numrot Web',
    image: numrot,
    width: '130px',
    height: '50px',
    url: 'https://www.numrot7.net/vsdc/login'
  },
  {
    name: 'Kavak',
    image: kavak,
    width: '130px',
    height: '50px',
    url: 'https://www.kavak.com/mx'
  },
  {
    name: 'Keralty',
    image: keralty,
    width: '130px',
    height: '50px',
  },
  {
    name: 'Ecopetrol',
    image: ecopetrol,
    width: '130px',
    height: '50px',
    url: 'https://the.smartwater-stream.com/'
  }
];
