import React from 'react';
const HomePage = React.lazy(() => import('../pages/HomePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const DocPage = React.lazy(() => import('../pages/DocPage'));
const JobsPage = React.lazy(() => import('../pages/JobsPage'));
const MorePage = React.lazy(() => import('../pages/MorePage'));
const ReportPage = React.lazy(() => import('../pages/ReportPage'));

export const ROUTES = [
  { path: '/', text: 'Home', element: <HomePage /> },
  {
    path: 'documentation',
    text: 'Documentation',
    element: <DocPage />,
  },
  {
    path: 'more',
    text: 'More',
    element: <MorePage />,
    dropdown: [
      { path: 'about', text: 'About' },
      { path: 'jobs', text: 'Jobs' },
      { path: 'contact', text: 'Contact' },
      { path: 'report', text: 'Report an issue', divaider: true },
    ],
  },

  { path: 'about', text: 'About', element: <AboutPage /> },
  { path: 'jobs', text: 'Jobs', element: <JobsPage /> },
  { path: 'contact', text: 'Contact', element: <ContactPage /> },
  {
    path: 'report',
    text: 'Report an issue',
    element: <ReportPage />,
  },
];

export const MAIN_LOGO = 'https://bulma.io/images/bulma-logo.png';

export const NAV_BUTTONS = [
  { text: 'Sign up', color: 'primary' },
  { text: 'Log in', color: 'secondary' },
];
