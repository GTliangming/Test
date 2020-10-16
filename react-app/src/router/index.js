import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent = ({ error, pastDelay, timedOut }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (timedOut) {
    return <div>Taking a long time...</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
    // return <div />; 
  } else {
    return null;
  }
};

let config = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/home/index'),
      loading: loadingComponent,
      delay: 300,
      timeout: 10000,
    }),
  },
  {
    name: 'sideBar',
    path: '/sideBar',
    exact: true,
    component: Loadable({
      loader: () => import('../components/sideBar/index'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
];

export default config;
