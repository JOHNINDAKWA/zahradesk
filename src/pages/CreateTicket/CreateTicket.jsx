import React, { useState } from "react";
import Select from "react-select";
import "./CreateTicket.css";
import CustomQuillEditor from "../../components/TicketConversation/CustomQuillEditor";
import { FiUploadCloud } from "react-icons/fi";

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


const issueTypes = [
  { value: "bug", label: "Bug / System Error" },
  { value: "access", label: "Access Request" },
  { value: "hardware", label: "Hardware Issue" },
];

const priorities = [
  { value: "urgent", label: "Urgent" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const locations = [
  { value: "kakamega", label: "Kakamega" },
  { value: "nairobi", label: "Nairobi" },
  { value: "remote", label: "Remote" },
];

const CreateTicket = () => {
  const [summary, setSummary] = useState("");
  const [issueType, setIssueType] = useState(null);
  const [system, setSystem] = useState("");
  const [priority, setPriority] = useState(priorities[1]);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form data
    console.log({
      summary,
      issueType,
      system,
      priority,
      location,
      description,
      attachment,
    });
  };

  return (
    <div className="ticket-form-container">
      <h2 className="form-title">Tech Service Desk</h2>
      <p className="form-subtext">
        Welcome! You can raise a request for any Tech related support here using
        the options provided.
      </p>

      <form onSubmit={handleSubmit} className="ticket-form">
        <label>
          <span>
            Brief Summary of the issue{" "}
            <strong className="red-asterisk">*</strong>
          </span>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="E.g. Unable to login to Emrply – KE"
            required
          />
        </label>

        <div className="form-row">
          <label>
            <span>What type of problem would you like to report?</span>
            <Select
              options={issueTypes}
              value={issueType}
              onChange={setIssueType}
              placeholder="Select issue type"
              className="form-select"
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>

          <label>
            <span>
              System Affected <strong className="red-asterisk">*</strong>
            </span>
            <input
              type="text"
              value={system}
              onChange={(e) => setSystem(e.target.value)}
              placeholder="Type Emr for Emrply, Lap for Laptop, Tab for Tablet..."
              required
            />
          </label>
        </div>

        <label>
          <span>
            Please explain the incident in detail below{" "}
            <strong className="red-asterisk">*</strong>
          </span>
          <CustomQuillEditor value={description} onChange={setDescription} />
        </label>

        <div className="form-row">
          <label>
            <span>
              What is the priority of the problem that you are reporting?
            </span>
            <Select
              options={priorities}
              value={priority}
              onChange={setPriority}
              className="form-select"
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>

          <label>
            <span>Location</span>
            <Select
              options={locations}
              value={location}
              onChange={setLocation}
              className="form-select"
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>
        </div>

        <label className="file-upload-label">
          <span>Attach a screenshot or any other supporting document</span>
          <div className="file-upload-box">
            <FiUploadCloud size={18} style={{ marginRight: 6 }} />
            <span>
              {attachment
                ? attachment.name
                : "Drag and drop a file or click to browse"}
            </span>
            <input
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
              className="file-input-hidden"
            />
          </div>
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Send
          </button>
          <button type="reset" className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
