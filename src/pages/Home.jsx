import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import AreaChart from '../components/AreaChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faList, 
  faTrophy, 
  faTasks, 
  faPlus,
  faArrowUpFromBracket,
  faShield,
  faFire,
  faBell,
  faCalendar,
  faLaptop, 
  faCalendarAlt, 
  faChartBar, 
  faFileAlt 
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const statsCards = [
    { icon: faUsers, number: '50', label: 'Members' },
    { icon: faList, number: '20', label: 'Playlist' },
    { icon: faTrophy, number: '5', label: 'Rank' },
    { icon: faTasks, number: '6', label: 'Active Tasks' }
  ];

  const quickActions = [
    { icon: faPlus, text: 'Add Members', color: '#F0F8FF', borderColor: '#4A90E2' },
    { icon: faPlus, text: 'Add Event', color: '#FFF5E6', borderColor: '#FFA500' },
    { icon: faArrowUpFromBracket, text: 'Upload Report', color: '#FFE6E6', borderColor: '#FF9E9E' },
    { icon: faPlus, text: 'Add Video', color: '#F5F0FF', borderColor: '#9B59B6' }
  ];

  const handleManageTeam = () => {
    navigate('/teams');
  };

  const handleManageEvents = () => {
    navigate('/events');
  };

  const handleManageReports = () => {
    navigate('/reports');
  };

  const handleManageContent = () => {
    navigate('/content');
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <SearchBar placeholder="Search member..." />
        
        <div className="content-row">
          <div className="left-content">
            <div className="overview-panel">
              <h2 className="overview-title">Overview Panel</h2>
              <div className="stats-cards">
                {statsCards.map((card, index) => (
                  <div key={index} className="stat-card">
                    <div className="icon-circle">
                      <FontAwesomeIcon icon={card.icon} className="stat-icon" />
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{card.number}</div>
                      <div className="stat-label">{card.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AreaChart />

            <div className="quick-actions">
              <h2 className="quick-actions-title">Quick Actions</h2>
              <div className="action-cards">
                {quickActions.map((action, index) => (
                  <div 
                    key={index} 
                    className="action-card"
                    style={{ 
                      backgroundColor: action.color,
                      borderBottom: `4px solid ${action.borderColor}`
                    }}
                  >
                    <FontAwesomeIcon icon={action.icon} className="action-icon" />
                    <span className="action-text">{action.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="user-top-bar">
              <div className="profile-status-dot"></div>
              <span className="user-display-name">bouzaghti malak</span>
              <div className="user-stat-icons">
                <div className="user-stat-item">
                  <FontAwesomeIcon icon={faShield} className="user-stat-icon" />
                  <span className="user-stat-count">5</span>
                </div>
                <div className="user-stat-item">
                  <FontAwesomeIcon icon={faFire} className="user-stat-icon" />
                  <span className="user-stat-count">5</span>
                </div>
                <div className="user-stat-item">
                  <FontAwesomeIcon icon={faBell} className="user-stat-icon" />
                  <span className="user-stat-count">5</span>
                </div>
              </div>
            </div>

            <div className="profile-card-container">
              <div className="profile-card-header">
                <div className="profile-status-dot"></div>
              </div>

              <div className="profile-img-wrapper">
                <div className="profile-img-rectangle">
                  <div className="profile-img-circle"></div>
                  <div className="profile-online-dot"></div>
                </div>
              </div>

              <div className="profile-text-content">
                <h3 className="profile-display-name">Bouzaghti Malak</h3>
                <p className="profile-username">@bouzaghtimalak</p>
                <p className="profile-user-role">UI UX designer</p>
              </div>

              <div className="profile-additional-info">
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faCalendar} className="profile-info-icon" />
                  <span>Joined September 2025</span>
                </div>
                <div className="profile-info-item">
                  <FontAwesomeIcon icon={faLaptop} className="profile-info-icon" />
                  <span>Computer Science</span>
                </div>
              </div>
            </div>

            <div className="team-level-card">
              <h4 className="team-level-title">Team Level Progress</h4>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            <div className="management-hub">
              <h4 className="management-title">Management Hub</h4>
              <div className="management-cards">
                <div className="management-card" onClick={handleManageTeam}>
                  <div className="management-icon-container">
                    <FontAwesomeIcon icon={faUsers} className="management-icon" />
                  </div>
                  <span className="management-label">Manage Team</span>
                </div>
                <div className="management-card" onClick={handleManageEvents}>
                  <div className="management-icon-container">
                    <FontAwesomeIcon icon={faCalendarAlt} className="management-icon" />
                  </div>
                  <span className="management-label">Manage Events</span>
                </div>
                <div className="management-card" onClick={handleManageReports}>
                  <div className="management-icon-container">
                    <FontAwesomeIcon icon={faChartBar} className="management-icon" />
                  </div>
                  <span className="management-label">Manage Reports</span>
                </div>
                <div className="management-card" onClick={handleManageContent}>
                  <div className="management-icon-container">
                    <FontAwesomeIcon icon={faFileAlt} className="management-icon" />
                  </div>
                  <span className="management-label">Manage Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;