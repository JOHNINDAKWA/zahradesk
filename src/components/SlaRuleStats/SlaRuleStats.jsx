import './SlaRuleStats.css';
import { FiCheckCircle, FiPauseCircle, FiPercent, FiClock } from 'react-icons/fi';

const stats = [
  { label: 'Active Rules', value: 6, icon: <FiCheckCircle /> },
  { label: 'Paused Rules', value: 2, icon: <FiPauseCircle /> },
  { label: 'Rule Coverage', value: '100%', icon: <FiPercent /> },
  { label: 'Avg. SLA Time', value: '4h', icon: <FiClock /> },
];

const SlaRuleStats = () => {
  return (
    <div className="sla-rule-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-card__content">
            <h4>{stat.label}</h4>
            <p>{stat.value}</p>
          </div>
          <div className="stat-card__icon">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default SlaRuleStats;
