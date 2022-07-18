import React from 'react';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));

const Layouts = [
  { id: 1, path: '/', page: <HomePage />, title: 'Home' },
  { id: 2, path: 'aboutus', page: <AboutUsPage />, title: 'About Us' },
];

export default Layouts;
