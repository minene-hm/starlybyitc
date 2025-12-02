import React from 'react';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShield,
  faFire,
  faBell,
  faPlus,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import './Teams.css';

const Teams = () => {
  return (
    <div className="teams-page">
      <div className="teams-content">
        <SearchBar placeholder="Search by name,role or team..." />
        
        <div className="teams-content-row">
          <div className="teams-left-content">
<div className="teams-header">
  <div className="teams-header-left">
    <h1 className="teams-main-title">Users Managements</h1>
    <p className="teams-subtitle">Manage All Users And Roles</p>
  </div>
  <div className="teams-header-right">
    <button className="teams-back-button">
      <FontAwesomeIcon icon={faArrowLeft} className="teams-back-icon" />
      <span>back</span>
    </button>
  </div>
</div>

<div className="teams-table-container">
  <table className="teams-users-table">
    <thead>
      <tr className="teams-table-header">
        <th>Member</th>
        <th>Role</th>
        <th>Level</th>
        <th>Last Active</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Leader</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Co Leader</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2h Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>SG</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>VP</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2h Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>TM</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Tech Leader</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2h Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
      <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Member</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
           <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Member</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2h Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
           <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Member</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
           <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Member</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2h Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
          <tr className="teams-table-row">
        <td>Member's Name</td>
        <td>Member</td>
        <td className="teams-level-cell">50 points</td>
        <td className="teams-active-cell">2 Days Ago</td>
        <td className="teams-actions-cell">
          <button className="teams-view-btn">View Profile</button>
          <button className="teams-remove-btn">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
          <div className="teams-right-side">
            <div className="teams-user-bar">
              <div className="teams-status-dot"></div>
              <span className="teams-user-name">bouzaghti malak</span>
              <div className="teams-user-stats">
                <div className="teams-stat-item">
                  <FontAwesomeIcon icon={faShield} className="teams-stat-icon" />
                  <span className="teams-stat-count">5</span>
                </div>
                <div className="teams-stat-item">
                  <FontAwesomeIcon icon={faFire} className="teams-stat-icon" />
                  <span className="teams-stat-count">5</span>
                </div>
                <div className="teams-stat-item">
                  <FontAwesomeIcon icon={faBell} className="teams-stat-icon" />
                  <span className="teams-stat-count">5</span>
                </div>
              </div>
            </div>

            <div className="teams-profile-card">
              <div className="teams-profile-content">
                <div className="teams-profile-image-wrapper">
                  <div className="teams-profile-rectangle">
                    <div className="teams-profile-circle"></div>
                    <div className="teams-online-dot"></div>
                    <div className="teams-profile-info">
                      <h3 className="teams-display-name">Abderrahmane</h3>
                      <p className="teams-username">@abderrahmaneyazi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="teams-progress-card">
              <h4 className="teams-progress-title">Team Progress</h4>
              <div className="teams-progress-container">
                <div className="teams-progress-bar">
                  <div className="teams-progress-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="teams-progress-text">3/4 teams on track . 1 Pending submission</div>
              </div>
            </div>
            <div className="teams-chart-card">
              <h4 className="teams-chart-title">Attendance Rate</h4>
              <div className="teams-chart-container">
                <div className="teams-y-axis">
                  <div className="teams-y-label">20%</div>
                  <div className="teams-y-label">40%</div>
                  <div className="teams-y-label">60%</div>
                  <div className="teams-y-label">80%</div>
                </div>
                <div className="teams-chart-content">
                  <div className="teams-grid-lines">
                    <div className="teams-grid-line"></div>
                    <div className="teams-grid-line"></div>
                    <div className="teams-grid-line"></div>
                    <div className="teams-grid-line"></div>
                  </div>
                  <div className="teams-bars-container">
                    <div className="teams-bar-wrapper">
                      <div className="teams-bar" style={{ height: '90%' }}></div>
                      <div className="teams-x-label">Week 1</div>
                    </div>
                    <div className="teams-bar-wrapper">
                      <div className="teams-bar" style={{ height: '55%' }}></div>
                      <div className="teams-x-label">Week 2</div>
                    </div>
                    <div className="teams-bar-wrapper">
                      <div className="teams-bar" style={{ height: '75%' }}></div>
                      <div className="teams-x-label">Week 3</div>
                    </div>
                    <div className="teams-bar-wrapper">
                      <div className="teams-bar" style={{ height: '25%' }}></div>
                      <div className="teams-x-label">Week 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="teams-action-card">
              <div className="teams-action-content">
                <FontAwesomeIcon icon={faPlus} className="teams-action-icon" />
                <span className="teams-action-text">Add Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;