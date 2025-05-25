import './Notifications.css';

const Notifications = () => {
  return (
    <div className="notif-wrapper">
      {/* Page Header */}
      <div className="notif-header">
        <h2 className="notif-heading">Notifications</h2>
        <button className="notif-mark-all-btn">Mark All as Read</button>
      </div>

      {/* Filter Section */}
      <div className="notif-filters">
        <select className="notif-filter-select">
          <option value="all">All Types</option>
          <option value="ticket">Ticket</option>
          <option value="sla">SLA</option>
          <option value="system">System</option>
          <option value="feedback">Feedback</option>
        </select>

        <select className="notif-filter-select">
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select className="notif-filter-select">
          <option value="all">All Status</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </div>

      {/* Notifications List */}
      <div className="notif-list">
        {/* Sample Ticket Notification */}
        <div className="notif-card notif-ticket unread">
          <div className="notif-icon">📩</div>
          <div className="notif-content">
            <h4 className="notif-title">
              New Ticket Assigned
              <span className="notif-badge warning">Unread</span>
            </h4>
            <p className="notif-message">
              Ticket #12345 has been assigned to you. Priority: <strong>High</strong>.
            </p>
            <span className="notif-meta">2 minutes ago</span>
          </div>
          <div className="notif-actions">
            <button className="notif-action-btn">View</button>
          </div>
        </div>

        {/* SLA Notification */}
        <div className="notif-card notif-sla unread">
          <div className="notif-icon">⏰</div>
          <div className="notif-content">
            <h4 className="notif-title">
              SLA Deadline Approaching
              <span className="notif-badge warning">Unread</span>
            </h4>
            <p className="notif-message">
              Ticket #12220 is approaching its SLA resolution time.
            </p>
            <span className="notif-meta">10 minutes ago</span>
          </div>
          <div className="notif-actions">
            <button className="notif-action-btn">View</button>
          </div>
        </div>

        {/* System Alert */}
        <div className="notif-card notif-system read">
          <div className="notif-icon">⚙️</div>
          <div className="notif-content">
            <h4 className="notif-title">
              System Maintenance Scheduled
              <span className="notif-badge info">Read</span>
            </h4>
            <p className="notif-message">
              The system will be offline for maintenance from 1AM to 3AM UTC.
            </p>
            <span className="notif-meta">1 hour ago</span>
          </div>
          <div className="notif-actions">
            <button className="notif-action-btn">Details</button>
          </div>
        </div>

        {/* Feedback Notification */}
        <div className="notif-card notif-feedback read">
          <div className="notif-icon">⭐</div>
          <div className="notif-content">
            <h4 className="notif-title">
              New Customer Feedback
              <span className="notif-badge success">Read</span>
            </h4>
            <p className="notif-message">
              You received a 5-star rating from Jane Doe on ticket #12004.
            </p>
            <span className="notif-meta">Yesterday</span>
          </div>
          <div className="notif-actions">
            <button className="notif-action-btn">Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
