import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

