import React from 'react';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faShield,
  faFire,
  faBell,
  faPlus,
  faCheck,
  faClock,
  faCalendarTimes,
  faCalendar,
  faPaperclip,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import './Content.css';

const Content = () => {
  const summaryCards = [
    { 
      icon: faCheck, 
      number: '12', 
      label: 'Submitted',
      color: 'white',
      borderColor: '#ECE4FF'
    },
    { 
      icon: faClock, 
      number: '02', 
      label: 'Pending',
      color: 'white',
      borderColor: '#ECE4FF'
    },
    { 
      icon: faCalendarTimes,
      number: '01', 
      label: 'Late',
      color: 'white',
      borderColor: '#ECE4FF'
    }
  ];

  const contentData = [
    { type: 'Content Title', submittedBy: 'Username', status: 'pending', date: 'Oct 22, 2025', report: 'Not Found' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'late', date: 'Oct 22, 2025', report: 'Not Found' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'late', date: 'Oct 22, 2025', report: 'Not Found' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Not Found' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { type: 'Content Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#FFC300';
      case 'submitted': return '#34C759';
      case 'late': return '#FF4D4F';
      default: return '#666';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'pending': return 'Pending';
      case 'submitted': return 'Submitted';
      case 'late': return 'Late';
      default: return status;
    }
  };

  return (
    <div className="content-page">
      <div className="content-content">
        <SearchBar placeholder="Search team , deadline..." />
        
        <div className="content-content-row">
          <div className="content-left-content">
            <div className="content-header">
              <div className="content-header-left">
                <h1 className="content-main-title">Content Managements</h1>
                <p className="content-subtitle">Manage Content, And Review Team Progress</p>
              </div>
              <div className="content-header-right">
                <button className="content-back-button">
                  <FontAwesomeIcon icon={faArrowLeft} className="content-back-icon" />
                  <span>back</span>
                </button>
              </div>
            </div>

            <div className="content-summary-cards">
              {summaryCards.map((card, index) => (
                <div 
                  key={index} 
                  className="content-summary-card"
                  style={{ 
                    backgroundColor: card.color,
                    borderBottom: `4px solid ${card.borderColor}`
                  }}
                >
                  <div className="content-summary-icon-circle">
                    <FontAwesomeIcon icon={card.icon} className="content-summary-icon" />
                  </div>
                  <div className="content-summary-content">
                    <div className="content-summary-number">{card.number}</div>
                    <div className="content-summary-label">{card.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-filter-tabs">
              <button className="content-filter-tab active">All</button>
              <button className="content-filter-tab">Status</button>
              <button className="content-filter-tab">Content Type</button>
            </div>

            <div className="content-table-container">
              <table className="content-table">
                <thead>
                  <tr className="content-table-header">
                    <th>Content Type</th>
                    <th>Submitted By</th>
                    <th>Status</th>
                    <th>Submission Date</th>
                    <th>Report</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.map((item, index) => (
                    <tr key={index} className="content-table-row">
                      <td className="content-type-cell">{item.type}</td>
                      <td className="content-submitted-cell">{item.submittedBy}</td>
                      <td className="content-status-cell">
                        <div className="content-status">
                          <FontAwesomeIcon 
                            icon={faCircle} 
                            className="content-status-dot"
                            style={{ color: getStatusColor(item.status) }}
                          />
                          <span>{getStatusLabel(item.status)}</span>
                        </div>
                      </td>
                      <td className="content-date-cell">
                        <FontAwesomeIcon icon={faCalendar} className="content-date-icon" />
                        <span>{item.date}</span>
                      </td>
                      <td className="content-report-cell">
                        {item.report === 'Not Found' ? (
                          <span className="content-report-not-found">{item.report}</span>
                        ) : (
                          <a href="#" className="content-report-link">
                            <FontAwesomeIcon icon={faPaperclip} className="content-report-icon" />
                            {item.report}
                          </a>
                        )}
                      </td>
                      <td className="content-actions-cell">
                        {item.status === 'pending' || item.status === 'late' ? (
                          <button className="content-action-reminder">Send Reminder</button>
                        ) : (
                          <div className="content-action-buttons">
                            <button className="content-action-approve">Approve</button>
                            <button className="content-action-revision">Request Revision</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

           <div className="content-right-side">
  <div className="content-user-bar">
    <div className="content-status-dot"></div>
    <span className="content-user-name">bouzaghti malak</span>
    <div className="content-user-stats">
      <div className="content-stat-item">
        <FontAwesomeIcon icon={faShield} className="content-stat-icon" />
        <span className="content-stat-count">5</span>
      </div>
      <div className="content-stat-item">
        <FontAwesomeIcon icon={faFire} className="content-stat-icon" />
        <span className="content-stat-count">5</span>
      </div>
      <div className="content-stat-item">
        <FontAwesomeIcon icon={faBell} className="content-stat-icon" />
        <span className="content-stat-count">5</span>
      </div>
    </div>
  </div>

  <div className="content-profile-card">
    <div className="content-profile-content">
      <div className="content-profile-image-wrapper">
        <div className="content-profile-rectangle">
          <div className="content-profile-circle"></div>
          <div className="content-online-dot"></div>
          <div className="content-profile-info">
            <h3 className="content-display-name">Abderrahmane</h3>
            <p className="content-username">@abderrahmaneyazi</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="content-progress-card">
    <h4 className="content-progress-title">Team Progress</h4>
    <div className="content-progress-container">
      <div className="content-progress-bar">
        <div className="content-progress-fill" style={{ width: '75%' }}></div>
      </div>
      <div className="content-progress-text">3/4 teams on track . 1 Pending submission</div>
    </div>
  </div>

  <div className="content-chart-card">
    <h4 className="content-chart-title">Monthly Progress</h4>
    <div className="content-chart-container">
      <div className="content-y-axis">
        <div className="content-y-label">20%</div>
        <div className="content-y-label">40%</div>
        <div className="content-y-label">60%</div>
        <div className="content-y-label">80%</div>
      </div>
      <div className="content-chart-content">
        <div className="content-grid-lines">
          <div className="content-grid-line"></div>
          <div className="content-grid-line"></div>
          <div className="content-grid-line"></div>
          <div className="content-grid-line"></div>
        </div>
        <div className="content-bars-container">
          <div className="content-bar-wrapper">
            <div className="content-bar" style={{ height: '90%' }}></div>
            <div className="content-x-label">Week 1</div>
          </div>
          <div className="content-bar-wrapper">
            <div className="content-bar" style={{ height: '55%' }}></div>
            <div className="content-x-label">Week 2</div>
          </div>
          <div className="content-bar-wrapper">
            <div className="content-bar" style={{ height: '75%' }}></div>
            <div className="content-x-label">Week 3</div>
          </div>
          <div className="content-bar-wrapper">
            <div className="content-bar" style={{ height: '25%' }}></div>
            <div className="content-x-label">Week 4</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="content-action-card">
    <div className="content-action-content">
      <FontAwesomeIcon icon={faPlus} className="content-action-icon" />
      <span className="content-action-text">Add Video </span>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
  );
};

export default Content;