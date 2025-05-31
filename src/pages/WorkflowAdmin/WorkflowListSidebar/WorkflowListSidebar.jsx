import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkflowListSidebar.css'; // using cleaned-up version

const WorkflowDetailsSidebar = ({ mapping }) => {
  const navigate = useNavigate();

  return (
    <div className="workflow-list-sidebar">
      {/* Back Link */}
      <div style={{ marginBottom: '16px' }}>
        <button className="back-link" onClick={() => navigate('/request-type-config')}>
          ← Back
        </button>
      </div>

      {/* Sidebar Header */}
      <div className="workflow-sidebar-header">
        <h2>Workflow Info</h2>
      </div>

      <div className="workflow-info-block">
        <label>Workflow</label>
        <p className="workflow-info-value">{mapping.workflow}</p>

        <label>Issue Type</label>
        <p className="workflow-info-value">{mapping.issueType}</p>

        <label>Request Type</label>
        <p className="workflow-info-value">{mapping.requestType}</p>

        <label>Assigned Team</label>
        <p className="workflow-info-value badge">{mapping.team}</p>

        <label>Department</label>
        <p className="workflow-info-value">{mapping.department}</p>
      </div>
    </div>
  );
};

export default WorkflowDetailsSidebar;
