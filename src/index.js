import React from 'react';
import ReactDOM from 'react-dom/client';
import ProjectManagementSystem from "./ProjectManagementSystem";
import App from "./App";
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <br />

    <App  />

    <hr />

    <ProjectManagementSystem> </ProjectManagementSystem>
    
  </React.StrictMode>
);

reportWebVitals();
