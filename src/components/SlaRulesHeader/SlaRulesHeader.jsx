import './SlaRulesHeader.css';
import { Link } from 'react-router-dom';

const SlaRulesHeader = () => {
  return (
    <div className="sla-rules-header">
      <div className="sla-rules-header__breadcrumb">
        <span><Link to="/">Home</Link></span>
        <span>/</span>
        <span>SLA Rules</span>
      </div>

      <div className="sla-rules-header__right">
        <Link to="/sla-monitor" className="btn-secondary">View SLA Monitor</Link>
        <div className="sla-rules-header__actions">
          <Link to="/sla-rules/new" className="btn-primary">+ New Rule</Link>
          <button className="btn-secondary">Import</button>
          <button className="btn-secondary">Export</button>
        </div>
      </div>
    </div>
  );
};

export default SlaRulesHeader;
