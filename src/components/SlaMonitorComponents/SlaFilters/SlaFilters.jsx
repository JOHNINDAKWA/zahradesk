import React, { useState } from 'react';
import Select from 'react-select';
import './SlaFilters.css';

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
      ? (isDark ? '#374151' : 'var(--color-primary)')
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


const SlaFilters = ({ onFilterChange }) => {
  const [priority, setPriority] = useState(null);
  const [status, setStatus] = useState(null);
  const [agent, setAgent] = useState(null);

  const handleChange = (type, selected) => {
    const filterData = { priority, status, agent, [type]: selected };
    if (type === 'priority') setPriority(selected);
    if (type === 'status') setStatus(selected);
    if (type === 'agent') setAgent(selected);
    onFilterChange(filterData);
  };


  return (
    <div className="sla-filters">
      <Select
        options={[
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
          { value: 'urgent', label: 'Urgent' },
        ]}
        value={priority}
        onChange={(selected) => handleChange('priority', selected)}
        placeholder="Priority"
        styles={customStyles}
        className="sla-filter"
      />

      <Select
        options={[
          { value: 'on_track', label: 'On Track' },
          { value: 'at_risk', label: 'At Risk' },
          { value: 'breached', label: 'Breached' },
        ]}
        value={status}
        onChange={(selected) => handleChange('status', selected)}
        placeholder="SLA Status"
        styles={customStyles}
        className="sla-filter"
      />

      <Select
        options={[
          { value: 'john', label: 'John Doe' },
          { value: 'alice', label: 'Alice Smith' },
          { value: 'team_a', label: 'Team A' },
        ]}
        value={agent}
        onChange={(selected) => handleChange('agent', selected)}
        placeholder="Assigned To"
        styles={customStyles}
        className="sla-filter"
      />
    </div>
  );
};

export default SlaFilters;
