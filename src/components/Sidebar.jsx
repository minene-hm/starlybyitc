import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUsers, 
  faCalendarAlt, 
  faUser,
  faFlag,
  faQuestionCircle,
  faCircleQuestion,
  faFileLines
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTiktok,
  faFacebookF,
  faYoutube,
  faInstagram,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png'; 
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const mainMenuItems = [
    { icon: faHome, label: 'Home', path: '/home' },
    { icon: faUsers, label: 'Teams', path: '/teams' },
    { icon: faCalendarAlt, label: 'Events', path: '/events' },
    { icon: faUser, label: 'Profile', path: '/profile' },
    { icon: faFlag, label: 'Quests', path: '/quests' }
  ];

  const supportItems = [
    { icon: faQuestionCircle, label: 'Q&A' },
    { icon: faCircleQuestion, label: 'Help Center' },
    { icon: faFileLines, label: 'Policies' }
  ];

  const socialIcons = [
    { icon: faTiktok, name: 'tiktok' },
    { icon: faFacebookF, name: 'facebook' },
    { icon: faYoutube, name: 'youtube' },
    { icon: faInstagram, name: 'instagram' },
    { icon: faDiscord, name: 'discord' }
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo-container">
          <img src={logo} alt="Starly Logo" className="sidebar-logo" />
          <h1 className="logo">
            <span className="logo-starly">Starly</span>
            <span className="logo-by"> by </span>
            <span className="logo-itc">ITC</span>
          </h1>
        </div>
      </div>

      <nav className="main-nav">
        {mainMenuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="divider"></div>
      <div className="center-gap"></div>
      <div className="divider"></div>

      <div className="support-section">
        {supportItems.map((item, index) => (
          <div key={index} className="support-item">
            <FontAwesomeIcon icon={item.icon} className="support-icon" />
            <span className="support-label">{item.label}</span>
          </div>
        ))}
      </div>

      <button className="logout-btn">
        Log Out
      </button>

      <div className="social-links">
        {socialIcons.map((social, index) => (
          <div key={index} className="social-icon-container">
            <FontAwesomeIcon icon={social.icon} className="social-icon" />
          </div>
        ))}
      </div>

      <div className="contact-info">
        <p className="email">itc.blida@gmail.com</p>
        <p className="copyright">
          © 2025 Starly. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;