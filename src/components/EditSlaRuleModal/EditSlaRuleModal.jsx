import React, { useState } from 'react';
import './EditSlaRuleModal.css';

const EditSlaRuleModal = ({ rule, onClose }) => {
  const [formData, setFormData] = useState({ ...rule });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saving rule:', formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit SLA Rule</h3>
        <div className="modal-body">
          <label>
            Rule Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Applies To
            <input
              type="text"
              name="appliesTo"
              value={formData.appliesTo}
              onChange={handleChange}
            />
          </label>

          <label>
            Target Time
            <input
              type="text"
              name="targetTime"
              value={formData.targetTime}
              onChange={handleChange}
            />
          </label>

          <label>
            Threshold
            <input
              type="text"
              name="threshold"
              value={formData.threshold}
              onChange={handleChange}
            />
          </label>

          <label>
            Escalate To
            <input
              type="text"
              name="escalateTo"
              value={formData.escalateTo}
              onChange={handleChange}
            />
          </label>

          <label>
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
            </select>
          </label>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSlaRuleModal;
