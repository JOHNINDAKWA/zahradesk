import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './WorkflowConfigPanel.css';

const isDark = document.documentElement.classList.contains("dark");

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: isDark ? '#1f2937' : 'var(--color-surface)',
    borderColor: state.isFocused ? 'var(--color-primary)' : 'var(--color-border-light)',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'var(--color-primary-hover)',
    },
    color: isDark ? '#f9fafb' : 'var(--color-text)',
    fontSize: '0.85rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: isDark ? '#f9fafb' : 'var(--color-text)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? (isDark ? '#374151' : 'var(--color-primary-hover)')
      : 'transparent',
    color: isDark ? '#f9fafb' : 'var(--color-text)',
    cursor: 'pointer',
    fontSize: '0.85rem',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: isDark ? '#1f2937' : 'var(--color-surface)',
    border: `1px solid ${isDark ? '#374151' : 'var(--color-border-light)'}`,
    zIndex: 20,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: isDark ? '#9ca3af' : '#6b7280',
  }),
  input: (provided) => ({
    ...provided,
    color: isDark ? '#f9fafb' : 'inherit',
  }),
};

const roles = [
  { value: 'it_support', label: 'IT Support' },
  { value: 'hr_manager', label: 'HR Manager' },
  { value: 'finance_officer', label: 'Finance Officer' },
];

const transitions = [
  { value: 'review', label: 'Send for Review' },
  { value: 'approve', label: 'Approve' },
  { value: 'fulfill', label: 'Mark as Fulfilled' },
];

const WorkflowConfigPanel = ({ selectedNode }) => {
  const [stageName, setStageName] = useState('');
  const [assignedRole, setAssignedRole] = useState(null);
  const [entryCondition, setEntryCondition] = useState('');
  const [allowedTransitions, setAllowedTransitions] = useState([]);
  const [slaLimit, setSlaLimit] = useState('');
  const [escalationAction, setEscalationAction] = useState('');

  // Reset internal form state when a new node is selected
  useEffect(() => {
    if (selectedNode) {
      setStageName(selectedNode.data?.label || '');
      setAssignedRole(null); // You can enhance by parsing from node.data if available
      setEntryCondition('');
      setAllowedTransitions([]);
      setSlaLimit('');
      setEscalationAction('');
    }
  }, [selectedNode]);

  return (
    <div className="workflow-config-panel">
      {!selectedNode ? (
        <div className="workflow-config-placeholder">
          <h3>No Stage Selected</h3>
          <p>Select a stage in the canvas to configure it.</p>
        </div>
      ) : (
        <>
          <h2 className="workflow-config-title">Stage Settings</h2>

          <div className="workflow-config-group">
            <label>Stage Name</label>
            <input
              type="text"
              value={stageName}
              onChange={(e) => setStageName(e.target.value)}
              className="workflow-config-input"
            />
          </div>

          <div className="workflow-config-group">
            <label>Assigned Role</label>
            <Select
              value={assignedRole}
              onChange={setAssignedRole}
              options={roles}
              placeholder="Select role..."
              classNamePrefix="workflow-select"
              styles={customStyles}
            />
          </div>

          <div className="workflow-config-group">
            <label>Entry Condition</label>
            <input
              type="text"
              value={entryCondition}
              onChange={(e) => setEntryCondition(e.target.value)}
              placeholder="e.g. If ticket priority is High"
              className="workflow-config-input"
            />
          </div>

          <div className="workflow-config-group">
            <label>Allowed Transitions</label>
            <Select
              value={allowedTransitions}
              onChange={setAllowedTransitions}
              options={transitions}
              isMulti
              placeholder="Choose transitions..."
              classNamePrefix="workflow-select"
              styles={customStyles}
            />
          </div>

          <div className="workflow-config-group">
            <label>SLA Time Limit</label>
            <input
              type="text"
              value={slaLimit}
              onChange={(e) => setSlaLimit(e.target.value)}
              placeholder="e.g. 2h or 1d"
              className="workflow-config-input"
            />
          </div>

          <div className="workflow-config-group">
            <label>Escalation Action</label>
            <input
              type="text"
              value={escalationAction}
              onChange={(e) => setEscalationAction(e.target.value)}
              placeholder="e.g. Notify Supervisor"
              className="workflow-config-input"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WorkflowConfigPanel;
