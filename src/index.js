import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faUsers, 
  faCalendarAlt, 
  faUser,
  faFlag,
  faQuestionCircle,
  faCircleQuestion,
  faFileLines,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTiktok,
  faFacebookF,
  faYoutube,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faHome, 
  faUsers, 
  faCalendarAlt, 
  faUser,
  faFlag,
  faQuestionCircle,
  faCircleQuestion,
  faFileLines,
  faSignOutAlt,
  faTiktok,
  faFacebookF,
  faYoutube,
  faInstagram,
  faDiscord
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
