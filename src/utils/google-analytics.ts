import ReactGA from 'react-ga';

export const initializeGoogleAnalytics = (): void => {
  ReactGA.initialize(process.env.GATSBY_GOOGLE_ANALYTICS_MEASUREMENT_ID || '');
  ReactGA.pageview('/full-page');
  ReactGA.event({
    category: 'User',
    action: 'Visit main page'
  });
};
