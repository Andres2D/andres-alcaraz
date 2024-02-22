import { Certification } from '../interfaces/Certifications';
import { celpipLogo, IELTS, wes } from '../images';

export const certifications: Certification[] = [
  {
    image: wes,
    name: 'wes-certification',
    title: 'Software Engineer at',
    description: 'Issued by World Education Services',
    urlTitle: 'Politécnico Colombiano Jaime Isaza Cadavid',
    url: 'https://www.politecnicojic.edu.co/'
  },
  {
    image: IELTS,
    name: 'IELTS',
    title: 'IELTS General Training - Band 7 - C1',
    description: 'Good User',
  },
  {
    image: celpipLogo,
    name: 'CELPIP-GENERAL',
    title: 'CELPIP-GENERAL - Average 10',
    description: 'Highly effective proficiency in workplace and community contexts',
  }
];
