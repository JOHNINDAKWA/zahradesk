import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import './WorkflowListSidebar.css'

const WorkflowListSidebar = ({ workflows, selected, onSelect, onAddWorkflow }) => {
  const [search, setSearch] = useState('');

  const filtered = workflows.filter((wf) =>
    wf.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="workflow-list-sidebar">
      <div className="workflow-sidebar-header">
        <h2>Workflows</h2>
        <button className="workflow-sidebar-new-btn" onClick={onAddWorkflow}>
          <FiPlus size={16} />
          New
        </button>
      </div>

      <div className="workflow-sidebar-search-box">
        <FiSearch size={16} />
        <input
          type="text"
          placeholder="Search workflows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="workflow-sidebar-list">
        {filtered.map((name) => (
          <li
            key={name}
            className={name === selected ? 'active' : ''}
            onClick={() => onSelect(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowListSidebar;