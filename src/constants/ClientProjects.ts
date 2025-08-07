import {
  numrot,
  kavak,
  keralty,
  ecopetrol,
  monster_company
} from '../images/projects';
import { atlantix } from '../images/svg';

import { ProjectClient } from '../interfaces/Projects';

export const projects: ProjectClient[] = [
  {
    name: 'Numrot Web',
    image: numrot,
    width: '130px',
    height: '50px',
    url: 'https://www.numrot7.net/vsdc/login',
    postHogId: 'numrot_web_project_clicked'
  },
  {
    name: 'Kavak',
    image: kavak,
    width: '130px',
    height: '50px',
    url: 'https://www.kavak.com/mx',
    postHogId: 'kavak_project_clicked'
  },
  {
    name: 'Keralty',
    image: keralty,
    width: '130px',
    height: '50px',
    postHogId: 'keralty_project_clicked'
  },
  {
    name: 'Ecopetrol',
    image: ecopetrol,
    width: '130px',
    height: '50px',
    url: 'https://the.smartwater-stream.com/',
    postHogId: 'ecopetrol_project_clicked'
  },
  {
    name: 'Monster Plowing Company',
    image: monster_company,
    width: '130px',
    height: '50px',
    url: 'https://www.monsterplow.ca/',
    postHogId: 'monster_plow_project_clicked'
  },
  {
    name: 'Atlantix Media Inc',
    image: atlantix,
    width: '180px',
    height: '100px',
    url: 'https://atlantixmedia.ca/',
    postHogId: 'atlantix_project_clicked'
  }
];
