import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = createRoot(rootDiv);
root.render(
  <Router>
    <App />
  </Router>,
);
