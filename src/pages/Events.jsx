import React from 'react';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faCalendar,
  faMapMarkerAlt,
  faInfoCircle,
  faFire,
  faBell,
  faShield,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import './Events.css';

const Events = () => {
  const events = [
    { 
      type: 'Challenges', 
      title: 'Challenges',
      date: 'Sep 12, 14:00',
      location: 'Location',
      color: '#E3F2FD',
      borderColor: '#2196F3'
    },
    { 
      type: 'Workshops', 
      title: 'Workshops',
      date: 'Sep 12, 14:00',
      location: 'ITC Local',
      color: '#FFF3E0',
      borderColor: '#FF9800'
    },
    { 
      type: 'Challenges', 
      title: 'Challenges',
      date: 'Sep 12, 14:00',
      location: 'Location',
      color: '#E3F2FD',
      borderColor: '#2196F3'
    },
    { 
      type: 'Workshops', 
      title: 'Workshops',
      date: 'Sep 12, 14:00',
      location: 'ITC Local',
      color: '#FFF3E0',
      borderColor: '#FF9800'
    },
    { 
      type: 'Challenges', 
      title: 'Challenges',
      date: 'Sep 12, 14:00',
      location: 'Location',
      color: '#E3F2FD',
      borderColor: '#2196F3'
    },
    { 
      type: 'Challenges', 
      title: 'Challenges',
      date: 'Sep 12, 14:00',
      location: 'Location',
      color: '#E3F2FD',
      borderColor: '#2196F3'
    },
    { 
      type: 'Workshops', 
      title: 'Workshops',
      date: 'Sep 12, 14:00',
      location: 'ITC Local',
      color: '#FFF3E0',
      borderColor: '#FF9800'
    },
    { 
      type: 'Challenges', 
      title: 'Challenges',
      date: 'Sep 12, 14:00',
      location: 'Location',
      color: '#E3F2FD',
      borderColor: '#2196F3'
    },
    { 
      type: 'Workshops', 
      title: 'Workshops',
      date: 'Sep 12, 14:00',
      location: 'ITC Local',
      color: '#FFF3E0',
      borderColor: '#FF9800'
    },
  ];

  return (
    <div className="events-page">
      <div className="events-content">
        <SearchBar placeholder="Search event date..." />
        <div className="content-row">
          <div className="left-content">
            <div className="events-header">
              <div className="header-left">
                <h1 className="events-title">Events</h1>
                <p className="events-subtitle">Workshops</p>
              </div>
              <div className="header-right">
                <button className="back-button">
                  <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
                  <span>back</span>
                </button>
              </div>
            </div>

            <div className="events-grid">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="event-card"
                  style={{ 
                    backgroundColor: event.color,
                    borderBottom: `3px solid ${event.borderColor}`
                  }}
                >
                  <div className="event-title">{event.title}</div>

                  <div className="event-info">
                    <div className="info-item">
                      <FontAwesomeIcon icon={faCalendar} className="info-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="info-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="details-button">
                    <FontAwesomeIcon icon={faInfoCircle} className="details-icon" />
                    <span>Details</span>
                  </button>
                </div>
              ))}
            </div>

<div className="workshops-history">
  <h2 className="history-title">Workshops History</h2>
  <div className="table-container">
    <table className="history-table">
      <thead>
        <tr className="table-header">
          <th>Event Name</th>
          <th>Type</th>
          <th>Date</th>
          <th>Attendees</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>12</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>8</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>15</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>10</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
        <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
          <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
          <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
          <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
          <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
          <tr className="table-row">
          <td>Event Name</td>
          <td>Event Type</td>
          <td className="date-cell">
            <FontAwesomeIcon icon={faCalendar} className="table-icon" />
            <span>Oct 22, 2025</span>
          </td>
          <td>20</td>
          <td>
            <button className="view-details-btn">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>
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
              <div className="profile-content-left">
    <div className="profile-img-wrapper-left">
      <div className="profile-img-rectangle-left">
        <div className="profile-img-circle-left"></div>
        <div className="profile-online-dot-left"></div>
        <div className="profile-text-content-left">
          <h3 className="profile-display-name">Abderrahmane</h3>
          <p className="profile-username">@abderrahmaneyazi</p>
        </div>
      </div>
    </div>
  </div>         
            </div>

<div className="team-level-card">
  <h4 className="team-level-title">Team Progress</h4>
  <div className="progress-bar-container">
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: '75%' }}></div>
    </div>
    <div className="progress-text">3/4 teams on track . 1 Pending submission </div>
  </div>
</div>
<div className="attendance-chart-card">
  <h4 className="attendance-title">Attendance Rate</h4>
  <div className="chart-container">
    <div className="y-axis">
      <div className="y-label">20%</div>
      <div className="y-label">40%</div>
      <div className="y-label">60%</div>
      <div className="y-label">80%</div>
    </div>
    <div className="chart-content">
      <div className="grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      <div className="bars-container">
        <div className="bar-wrapper">
          <div className="bar" style={{ height: '90%' }}></div>
          <div className="x-label">Week 1</div>
        </div>
        <div className="bar-wrapper">
          <div className="bar" style={{ height: '55%' }}></div>
          <div className="x-label">Week 2</div>
        </div>
        <div className="bar-wrapper">
          <div className="bar" style={{ height: '75%' }}></div>
          <div className="x-label">Week 3</div>
        </div>
        <div className="bar-wrapper">
          <div className="bar" style={{ height: '25%' }}></div>
          <div className="x-label">Week 4</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="add-event-card">
  <div className="add-event-content">
    <FontAwesomeIcon icon={faPlus} className="add-event-icon" />
    <span className="add-event-text">Add Event</span>
  </div>
</div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Events;