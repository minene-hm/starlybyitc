import React from 'react';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faShield,
  faFire,
  faBell,
  faArrowUpFromBracket,
  faCheck,
  faClock,
  faCalendarTimes,
  faCalendar,
  faPaperclip,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import './Reports.css';

const Reports = () => {
  const summaryCards = [
    { 
      icon: faCheck, 
      number: '12', 
      label: 'Submitted',
      color: 'white',
      borderColor: '#FFB6C1'
    },
    { 
      icon: faClock, 
      number: '02', 
      label: 'Pending',
      color: 'white',
      borderColor: '#FFB6C1'
    },
    { 
      icon: faCalendarTimes, 
      number: '01', 
      label: 'Late',
      color: 'white',
      borderColor: '#FFB6C1'
    }
  ];

  const reportsData = [
    { title: 'Report Title', submittedBy: 'Username', status: 'pending', date: 'Oct 22, 2025', report: 'Not Found' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'late', date: 'Oct 22, 2025', report: 'Not Found' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'late', date: 'Oct 22, 2025', report: 'Not Found' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' },
    { title: 'Report Title', submittedBy: 'Username', status: 'submitted', date: 'Oct 22, 2025', report: 'Report.Pdf' }
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
    <div className="reports-page">
      <div className="reports-content">
        <SearchBar placeholder="Search team,deadline..." />
        
        <div className="reports-content-row">
          <div className="reports-left-content">
            <div className="reports-header">
              <div className="reports-header-left">
                <h1 className="reports-main-title">Reports Managements</h1>
                <p className="reports-subtitle">Upload, Track, And Review Team Reports</p>
              </div>
              <div className="reports-header-right">
                <button className="reports-back-button">
                  <FontAwesomeIcon icon={faArrowLeft} className="reports-back-icon" />
                  <span>back</span>
                </button>
              </div>
            </div>
            <div className="reports-summary-cards">
              {summaryCards.map((card, index) => (
                <div 
                  key={index} 
                  className="reports-summary-card"
                  style={{ 
                    backgroundColor: card.color,
                    borderBottom: `5px solid ${card.borderColor}`
                  }}
                >
                  <div className="reports-summary-icon-circle">
                    <FontAwesomeIcon icon={card.icon} className="reports-summary-icon" />
                  </div>
                  <div className="reports-summary-content">
                    <div className="reports-summary-number">{card.number}</div>
                    <div className="reports-summary-label">{card.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reports-table-container">
              <table className="reports-table">
                <thead>
                  <tr className="reports-table-header">
                    <th>Report Title</th>
                    <th>Submitted By</th>
                    <th>Status</th>
                    <th>Submission Date</th>
                    <th>Report</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reportsData.map((item, index) => (
                    <tr key={index} className="reports-table-row">
                      <td className="reports-title-cell">{item.title}</td>
                      <td className="reports-submitted-cell">{item.submittedBy}</td>
                      <td className="reports-status-cell">
                        <div className="reports-status">
                          <FontAwesomeIcon 
                            icon={faCircle} 
                            className="reports-status-dot"
                            style={{ color: getStatusColor(item.status) }}
                          />
                          <span>{getStatusLabel(item.status)}</span>
                        </div>
                      </td>
                      <td className="reports-date-cell">
                        <FontAwesomeIcon icon={faCalendar} className="reports-date-icon" />
                        <span>{item.date}</span>
                      </td>
                      <td className="reports-report-cell">
                        {item.report === 'Not Found' ? (
                          <span className="reports-report-not-found">{item.report}</span>
                        ) : (
                          <span className="reports-report-link">
                            <FontAwesomeIcon icon={faPaperclip} className="reports-report-icon" />
                            {item.report}
                          </span>
                        )}
                      </td>
                      <td className="reports-actions-cell">
                        {item.status === 'pending' || item.status === 'late' ? (
                          <button className="reports-action-reminder">Send Reminder</button>
                        ) : (
                          <div className="reports-action-buttons">
                            <button className="reports-action-approve">Approve</button>
                            <button className="reports-action-revision">Request Revision</button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reports-right-side">
            <div className="reports-right-side">
  <div className="reports-user-bar">
    <div className="reports-status-dot"></div>
    <span className="reports-user-name">bouzaghti malak</span>
    <div className="reports-user-stats">
      <div className="reports-stat-item">
        <FontAwesomeIcon icon={faShield} className="reports-stat-icon" />
        <span className="reports-stat-count">5</span>
      </div>
      <div className="reports-stat-item">
        <FontAwesomeIcon icon={faFire} className="reports-stat-icon" />
        <span className="reports-stat-count">5</span>
      </div>
      <div className="reports-stat-item">
        <FontAwesomeIcon icon={faBell} className="reports-stat-icon" />
        <span className="reports-stat-count">5</span>
      </div>
    </div>
  </div>

  <div className="reports-profile-card">
    <div className="reports-profile-content">
      <div className="reports-profile-image-wrapper">
        <div className="reports-profile-rectangle">
          <div className="reports-profile-circle"></div>
          <div className="reports-online-dot"></div>
          <div className="reports-profile-info">
            <h3 className="reports-display-name">Abderrahmane</h3>
            <p className="reports-username">@abderrahmaneyazi</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="reports-progress-card">
    <h4 className="reports-progress-title">Team Progress</h4>
    <div className="reports-progress-container">
      <div className="reports-progress-bar">
        <div className="reports-progress-fill" style={{ width: '75%' }}></div>
      </div>
      <div className="reports-progress-text">3/4 teams on track . 1 Pending submission</div>
    </div>
  </div>

  <div className="reports-chart-card">
    <h4 className="reports-chart-title">Monthly Progress</h4>
    <div className="reports-chart-container">
      <div className="reports-y-axis">
        <div className="reports-y-label">20%</div>
        <div className="reports-y-label">40%</div>
        <div className="reports-y-label">60%</div>
        <div className="reports-y-label">80%</div>
      </div>
      <div className="reports-chart-content">
        <div className="reports-grid-lines">
          <div className="reports-grid-line"></div>
          <div className="reports-grid-line"></div>
          <div className="reports-grid-line"></div>
          <div className="reports-grid-line"></div>
        </div>
        <div className="reports-bars-container">
          <div className="reports-bar-wrapper">
            <div className="reports-bar" style={{ height: '90%' }}></div>
            <div className="reports-x-label">Week 1</div>
          </div>
          <div className="reports-bar-wrapper">
            <div className="reports-bar" style={{ height: '55%' }}></div>
            <div className="reports-x-label">Week 2</div>
          </div>
          <div className="reports-bar-wrapper">
            <div className="reports-bar" style={{ height: '75%' }}></div>
            <div className="reports-x-label">Week 3</div>
          </div>
          <div className="reports-bar-wrapper">
            <div className="reports-bar" style={{ height: '25%' }}></div>
            <div className="reports-x-label">Week 4</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="reports-action-card">
    <div className="reports-action-content">
      <FontAwesomeIcon icon={faArrowUpFromBracket} className="reports-action-icon" />
      <span className="reports-action-text">Upload Report</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;