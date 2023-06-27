import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Navigation from '../pages/Navigation';
import Details from '../pages/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigation>
        <App />
      </Navigation>
    ),
  },
  {
    path: '/Details',
    element: (
      <Navigation>
        <Details />
      </Navigation>
    ),
  },
]);

export default router;
