import { useState } from 'react';
import './SlaRuleTable.css'
import EditSlaRuleModal from '../EditSlaRuleModal/EditSlaRuleModal';

const slaRules = [
  {
    name: 'High Priority SLA',
    appliesTo: 'Priority = High',
    targetTime: '2h',
    threshold: '80%',
    escalateTo: 'Supervisor',
    status: 'Active',
  },
  {
    name: 'Access Request SLA',
    appliesTo: 'Type = Access',
    targetTime: '4h',
    threshold: '70%',
    escalateTo: 'IT Security',
    status: 'Active',
  },
  {
    name: 'Off-Hours Response',
    appliesTo: 'Time = 6pm–8am',
    targetTime: '8h',
    threshold: '90%',
    escalateTo: 'On-call Engineer',
    status: 'Paused',
  },
  {
    name: 'Hardware Issues SLA',
    appliesTo: 'Category = Hardware',
    targetTime: '6h',
    threshold: '85%',
    escalateTo: 'Tech Lead',
    status: 'Active',
  },
  {
    name: 'Password Reset SLA',
    appliesTo: 'Type = Credential Reset',
    targetTime: '1h',
    threshold: '90%',
    escalateTo: 'Support Desk',
    status: 'Active',
  },
];

const SlaRuleTable = () => {
  const [selectedRule, setSelectedRule] = useState(null);

  const handleEditClick = (rule) => {
    setSelectedRule(rule);
  };

  const closeModal = () => {
    setSelectedRule(null);
  };

  return (
    <div className="sla-rule-table">
      <table className="sla-rule-table__table">
        <thead>
          <tr>
            <th className="sla-rule-table__th">Rule Name</th>
            <th className="sla-rule-table__th">Applies To</th>
            <th className="sla-rule-table__th">Target Time</th>
            <th className="sla-rule-table__th">Threshold</th>
            <th className="sla-rule-table__th">Escalate To</th>
            <th className="sla-rule-table__th">Status</th>
            <th className="sla-rule-table__th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slaRules.map((rule, index) => (
            <tr key={index} className="sla-rule-table__row">
              <td className="sla-rule-table__td">{rule.name}</td>
              <td className="sla-rule-table__td">{rule.appliesTo}</td>
              <td className="sla-rule-table__td">{rule.targetTime}</td>
              <td className="sla-rule-table__td">{rule.threshold}</td>
              <td className="sla-rule-table__td">{rule.escalateTo}</td>
              <td className="sla-rule-table__td">
                <span
                  className={`sla-rule-table__badge sla-rule-table__badge--${rule.status.toLowerCase()}`}
                >
                  {rule.status}
                </span>
              </td>
              <td className="sla-rule-table__td">
                <button
                  className="sla-rule-table__button"
                  onClick={() => handleEditClick(rule)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRule && (
        <EditSlaRuleModal rule={selectedRule} onClose={closeModal} />
      )}
    </div>
  );
};

export default SlaRuleTable;
