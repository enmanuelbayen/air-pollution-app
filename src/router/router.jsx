import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Navigation from '../pages/Navigation';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigation>
        <App />
      </Navigation>
    ),
  },
]);

export default router;
