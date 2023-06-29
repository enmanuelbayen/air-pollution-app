import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Navigation from '../pages/Navigation';
import AirDetails from '../components/AirDetails';

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
    path: '/Stats',
    element: (
      <Navigation>
        <AirDetails />
      </Navigation>
    ),
  },
]);

export default router;
