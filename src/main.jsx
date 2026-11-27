/*
 * File: src/main.jsx - starts React and loads the stylesheet
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
