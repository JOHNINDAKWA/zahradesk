import React, { useState } from 'react';
import Select from 'react-select';
import './TicketFilter.css';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--color-surface)',
    borderColor: state.isFocused ? 'var(--color-border-light)' : 'var(--color-border-light)',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'var(--color-primary-hover)',
    },
    outline: 'none',
    fontSize: '0.85rem',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? 'var(--color-primary-hover)'
      : 'transparent',
    color: state.isFocused ? '#fff' : 'var(--color-text)',
    cursor: 'pointer',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'var(--color-bg)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--color-text)',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'var(--color-text)',
    fontSize: '0.75rem',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'var(--color-muted)',
    ':hover': {
      backgroundColor: 'var(--color-primary)',
      color: '#fff',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border-light)',
    zIndex: 20,
  }),
};


const options = {
  owners: [
    { value: 'dennis', label: 'Dennis Kariuki' },
    { value: 'alex', label: 'Alex Benecha' },
    { value: 'kathy', label: 'Kathy Mateo' },
    { value: 'matilda', label: 'Matilda Glen' },
    { value: 'dennis', label: 'Dennis Kariuki' },
    { value: 'alex', label: 'Alex Benecha' },
    { value: 'kathy', label: 'Kathy Mateo' },
    { value: 'matilda', label: 'Matilda Glen' },
    { value: 'dennis', label: 'Dennis Kariuki' },
    { value: 'alex', label: 'Alex Benecha' },
    { value: 'kathy', label: 'Kathy Mateo' },
    { value: 'matilda', label: 'Matilda Glen' },
    { value: 'dennis', label: 'Dennis Kariuki' },
    { value: 'alex', label: 'Alex Benecha' },
    { value: 'kathy', label: 'Kathy Mateo' },
    { value: 'matilda', label: 'Matilda Glen' },
  ],

  assignedTo: [
    { value: 'support_team', label: 'Support Team' },
    { value: 'john', label: 'John Indakwa' },
    { value: 'team_a', label: 'Team A' },
    { value: 'team_b', label: 'Team B' },
  ],

  statuses: [
    { value: 'pending', label: 'Pending' },
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' },
    { value: 'waiting', label: 'Waiting on Customer' },
    { value: 'replied', label: 'Replied' },
  ],

  priorities: [
    { value: 'urgent', label: 'Urgent' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
    { value: 'trivial', label: 'Trivial' },
  ],

  categories: [
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'question', label: 'Question' },
    { value: 'payment', label: 'Payment' },
    { value: 'issue', label: 'Issue' },
  ],

  tags: [
    { value: 'billing', label: 'Billing' },
    { value: 'product', label: 'Product' },
    { value: 'shipping', label: 'Shipping' },
    { value: 'refund', label: 'Refund' },
    { value: 'login', label: 'Login' },
  ],

  groups: [
    { value: 'billing', label: 'Billing' },
    { value: 'sales', label: 'Sales' },
    { value: 'tech', label: 'Technical Support' },
    { value: 'qa', label: 'QA Team' },
  ],


    resolutionDueBy: [
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'this_week', label: 'This Week' },
    { value: 'next_week', label: 'Next Week' },
    { value: 'no_deadline', label: 'No Deadline' },
  ],
};


const TicketFilter = () => {
  const [owner, setOwner] = useState([]);
  const [assignedTo, setAssignedTo] = useState([]);
  const [status, setStatus] = useState([]);
  const [priority, setPriority] = useState([]);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  // const [group, setGroup] = useState([]);
  const [resolutionDueBy, setResolutionDueBy] = useState(null);

  return (
    <div className="filter-panel">
      <h4 className="filter-title">Filter</h4>
      <input type="text" className="search-input" placeholder="Search..." />

      <div className="filter-group">
        <label>Created by</label>
        <Select
          options={options.owners}
          isMulti
          value={owner}
          onChange={setOwner}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <div className="filter-group">
        <label>Assigned To</label>
        <Select
          options={options.assignedTo}
          isMulti
          value={assignedTo}
          onChange={setAssignedTo}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <div className="filter-group">
        <label>Status</label>
        <Select
          options={options.statuses}
          isMulti
          value={status}
          onChange={setStatus}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <div className="filter-group">
        <label>Priority</label>
        <Select
          options={options.priorities}
          isMulti
          value={priority}
          onChange={setPriority}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <div className="filter-group">
        <label>Category</label>
        <Select
          options={options.categories}
          isMulti
          value={category}
          onChange={setCategory}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <div className="filter-group">
        <label>Tags</label>
        <Select
          options={options.tags}
          isMulti
          value={tags}
          onChange={setTags}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      {/* <div className="filter-group">
        <label>Group</label>
        <Select
          options={options.groups}
          isMulti
          value={group}
          onChange={setGroup}
           styles={customStyles}
          className="filter-select"
        />
      </div> */}


      <div className="filter-group">
        <label>Resolution Due By</label>
        <Select
          options={options.resolutionDueBy}
          value={resolutionDueBy}
          onChange={setResolutionDueBy}
           styles={customStyles}
          className="filter-select"
        />
      </div>

      <button className="btn">Apply Filter</button>
    </div>
  );
};

export default TicketFilter;


