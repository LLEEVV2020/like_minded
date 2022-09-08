import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectManagementSystem from "./ProjectManagementSystem";
import App from "./App";
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectManagementSystem> </ProjectManagementSystem>
    <br />
    <App />
  </React.StrictMode>
);

reportWebVitals();
