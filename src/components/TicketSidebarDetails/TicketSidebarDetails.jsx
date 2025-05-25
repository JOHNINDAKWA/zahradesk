import React, { useState } from 'react';
import Select from 'react-select';
import './TicketSidebarDetails.css';

const isDark = document.body.classList.contains('dark');

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


const statusOptions = [
  { value: 'open', label: 'Open' },
  { value: 'pending', label: 'Pending' },
  { value: 'Resolved', label: 'Resolved' },
  { value: 'closed', label: 'Closed' },
  { value: 'replied', label: 'Replied' },
];

const priorityOptions = [
  { value: 'urgent', label: 'Urgent' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
  { value: 'trivial', label: 'Trivial' },
];


const assignedToOptions = [
  { value: 'John Indakwa', label: 'John Indakwa' },
  { value: 'Sam Owiyo', label: 'Sam Owiyo' },
  { value: 'Alex Wawire', label: 'Alex Wawire' },
];
const formatDate = (str) => {
  if (!str) return '—';
  const date = new Date(str);
  return date.toLocaleString('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const TicketSidebarDetails = ({ ticket }) => {
  const [status, setStatus] = useState(
    statusOptions.find((opt) => opt.value === ticket.status?.toLowerCase())
  );
  const [priority, setPriority] = useState(
    priorityOptions.find((opt) => opt.value === ticket.priority?.toLowerCase())
  );

const [assignedTo, setAssignedTo] = useState(
  assignedToOptions.find((opt) => opt.value === ticket.assignedTo)
);


  const handleStatusChange = (selected) => {
    setStatus(selected);
    // Optional: Send update to API here
  };

  const handlePriorityChange = (selected) => {
    setPriority(selected);
    // Optional: Send update to API here
  };

    const handleAssignedToChange = (selected) => {
    setAssignedTo(selected);
    // Optional: Send update to API here
  };


  return (
    <div className="ticket-details-panel">
      <h4 className="panel-title">Ticket Properties</h4>

      <div className="info-group">
        <label>Requester</label>
        <div className="info-box">{ticket.name}</div>
      </div>

      <div className="info-group">
        <label>Created</label>
        <div className="info-box">{ticket.createdAt}</div>
      </div>

      <div className="info-group">
        <label>Group</label>
        <div className="info-box">{ticket.group || '—'}</div>
      </div>

      <div className="info-group">
        <label>Category</label>
        <div className="info-box">{ticket.category || '—'}</div>
      </div>

      <div className="info-group">
        <label>Tags</label>
        <div className="tags-list">
          {ticket.tags?.map((tag, i) => (
            <span key={i} className="tag-badge">{tag}</span>
          ))}
        </div>
      </div>

      <div className="info-group">
        <label>Status</label>
        <Select
          value={status}
          onChange={handleStatusChange}
          options={statusOptions}
          styles={customStyles}
          className="sidebar-select"
        />
      </div>

            <div className="info-group">
        <label>Assigned</label>
        <Select
          value={assignedTo}
          onChange={handleAssignedToChange}
          options={assignedToOptions}
          styles={customStyles}
          className="sidebar-select"
        />
      </div>

      <div className="info-group">
        <label>Priority</label>
        <Select
          value={priority}
          onChange={handlePriorityChange}
          options={priorityOptions}
          className="sidebar-select"
          styles={customStyles}
        />
      </div>

      <div className="ticket-actions">
        <button className="btn-ghost">🚀 Escalate</button>
        <button className="btn-ghost">🔁 Clone</button>
      </div>

      <h4 className="panel-title">Escalation History</h4>
      <ul className="history-list">
        {ticket.escalations?.length ? (
          ticket.escalations.map((entry, idx) => (
            <li key={idx}>
              <strong>{entry.by}</strong> escalated on <em>{formatDate(entry.date)}</em>
              {entry.note && <p>{entry.note}</p>}
            </li>
          ))
        ) : (
          <li>No escalations yet.</li>
        )}
      </ul>
    </div>
  );
};

export default TicketSidebarDetails;
