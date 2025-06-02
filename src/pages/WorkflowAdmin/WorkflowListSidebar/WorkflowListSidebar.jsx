import React, { useState } from 'react';
import './WorkflowListSidebar.css';
import Select from 'react-select';
import { FiEdit, FiSave, FiX } from 'react-icons/fi';

const WorkflowDetailsSidebar = ({ mapping }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editable, setEditable] = useState(mapping);

  const handleChange = (field, value) => {
    setEditable((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saved Mapping:', editable);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditable(mapping);
    setIsEditing(false);
  };

  return (
    <div className="workflow-list-sidebar">
      <div style={{ marginBottom: '16px' }}>
        <button className="back-link" onClick={() => window.history.back()}>
          ← Back
        </button>
      </div>

      <div className="workflow-sidebar-header">
        <h2>Workflow Info</h2>
        {!isEditing && <FiEdit className="icon-btn" onClick={() => setIsEditing(true)} />}
      </div>

      <div className="workflow-info-block">
        <label>Workflow</label>
        {isEditing ? (
          <input
            value={editable.workflow}
            onChange={(e) => handleChange('workflow', e.target.value)}
            className="input-field"
          />
        ) : (
          <p className="workflow-info-value">{mapping.workflow}</p>
        )}

        <label>Issue Type</label>
        {isEditing ? (
          <input
            value={editable.issueType}
            onChange={(e) => handleChange('issueType', e.target.value)}
            className="input-field"
          />
        ) : (
          <p className="workflow-info-value">{mapping.issueType}</p>
        )}

        <label>Request Type</label>
        {isEditing ? (
          <input
            value={editable.requestType}
            onChange={(e) => handleChange('requestType', e.target.value)}
            className="input-field"
          />
        ) : (
          <p className="workflow-info-value">{mapping.requestType}</p>
        )}

        <label>Assigned Team</label>
        {isEditing ? (
          <input
            value={editable.team}
            onChange={(e) => handleChange('team', e.target.value)}
            className="input-field"
          />
        ) : (
          <p className="workflow-info-value badge">{mapping.team}</p>
        )}

        <label>Department</label>
        {isEditing ? (
          <input
            value={editable.department}
            onChange={(e) => handleChange('department', e.target.value)}
            className="input-field"
          />
        ) : (
          <p className="workflow-info-value">{mapping.department}</p>
        )}
      </div>

      {isEditing && (
        <div className="workflow-edit-actions">
          <button className="btn-primary" onClick={handleSave}>
            <FiSave /> Save
          </button>
          <button className="btn-secondary" onClick={handleCancel}>
            <FiX /> Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkflowDetailsSidebar;
