import './NewSlaRule.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NewSlaRule = () => {
  return (
    <div className="new-sla-rule">
      <div className="breadcrumb-bar">
        <Link to="/sla-rules" className="breadcrumb-back">
          <FiArrowLeft /> Back to SLA Rules
        </Link>
        <div className="breadcrumb-trail">
          <span><Link to="/">Home</Link></span>
          <span>/</span>
          <span><Link to="/sla-rules">SLA Rules</Link></span>
          <span>/</span>
          <span>Create New</span>
        </div>
      </div>

      <h2>Create New SLA Rule</h2>
      <p className="newsla-subtitle">Define the conditions, targets, and escalation policy for this SLA.</p>

      <form className="new-sla-rule__form">
        <label>
          Rule Name
          <input type="text" placeholder="e.g. Critical Ticket SLA" />
        </label>

        <label>
          Applies To
          <input type="text" placeholder="e.g. Priority = Critical" />
        </label>

        <label>
          Target Time
          <input type="text" placeholder="e.g. 4h" />
        </label>

        <label>
          Threshold
          <input type="text" placeholder="e.g. 80%" />
        </label>

        <label>
          Escalate To
          <input type="text" placeholder="e.g. Engineering Manager" />
        </label>

        <label>
          Status
          <select>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
          </select>
        </label>

        <div className="newsla-form-actions">
          <button type="submit" className="btn-primary">Save Rule</button>
          <button type="reset" className="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewSlaRule;
