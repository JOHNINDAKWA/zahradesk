import React from 'react';
import './SlaStatusBadge.css';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const statusConfig = {
  'On Track': {
    color: 'green',
    icon: '✅',
    tooltip: 'Everything is within SLA thresholds.',
  },
  'At Risk': {
    color: 'yellow',
    icon: '⚠️',
    tooltip: 'SLA might be breached soon.',
  },
  'Breached': {
    color: 'red',
    icon: '⛔',
    tooltip: 'SLA has already been breached.',
  },
};

const SlaStatusBadge = () => {
  return (
    <div className="sla-status-wrapper">
      <div className="sla-badge-group">
        {Object.entries(statusConfig).map(([status, config]) => (
          <div
            key={status}
            className={`sla-badge sla-badge--${config.color}`}
            title={config.tooltip}
          >
            <span className="dot">{config.icon}</span>
            {status}
          </div>
        ))}
      </div>

      <Link to="/sla-rules" className="sla-rules-link">
        SLA Rules <FiExternalLink />
      </Link>
    </div>
  );
};

export default SlaStatusBadge;
