import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectManagementSystem from "./ProjectManagementSystem";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectManagementSystem> </ProjectManagementSystem>
  </React.StrictMode>
);

reportWebVitals();
