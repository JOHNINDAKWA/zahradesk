import React, { useState } from "react";
import Select from "react-select";
import { FiUploadCloud } from "react-icons/fi";
import CustomQuillEditor from "../../components/TicketConversation/CustomQuillEditor";
import "./CreateTicket.css";
import getCustomSelectStyles from "../../utils/reactSelectStyles"; // adjust path as needed

const departments = [
  { value: "it", label: "IT" },
  { value: "hr", label: " HR" },
  { value: "finance", label: " Finance" },
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

const itServiceTypes = [
  { value: "account", label: "Create New Account" },
  { value: "hardware", label: "Request Hardware" },
  { value: "access", label: "System Access" },
];

const hrServiceTypes = [
  { value: "leave", label: "Leave Application Assistance" },
  { value: "benefits", label: "Benefits Clarification" },
  { value: "recruitment", label: "Recruitment Support" },
];

const financeServiceTypes = [
  { value: "reimbursement", label: "Reimbursement Request" },
  { value: "report", label: "Financial Report Access" },
  { value: "budget", label: "Budget Query" },
];

const CreateTicket = () => {
  const [department, setDepartment] = useState(null);
  const [ticketType, setTicketType] = useState(null);

  const [summary, setSummary] = useState("");
  const [issueType, setIssueType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [system, setSystem] = useState("");
  const [priority, setPriority] = useState(priorities[2]);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);

  const getServiceOptions = () => {
    if (department === "it") return itServiceTypes;
    if (department === "hr") return hrServiceTypes;
    if (department === "finance") return financeServiceTypes;
    return [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department,
      ticketType,
      summary,
      issueType,
      serviceType,
      system,
      priority,
      location,
      description,
      attachment,
    });
  };

  return (
    <div className="ticket-form-container">
      <h2 className="form-title">Request a Service or Report an Issue</h2>
      <p className="form-subtext">
        Start by selecting the target department and request category.
      </p>

      {/* Step 1 & 2: Department + Request Type side by side */}
      <div className="form-row2">
        <label>
          <span>
            Select the department to handle your issue
            <strong className="red-asterisk">*</strong>
          </span>
          <Select
            options={departments}
            value={departments.find((opt) => opt.value === department)}
            onChange={(selected) => {
              setDepartment(selected?.value || null);
              setTicketType(null);
              setServiceType(null);
            }}
            placeholder="Choose department"
            styles={getCustomSelectStyles()}
          />
        </label>

        <label style={{ flex: 1, minWidth: "250px" }}>
          <span>
            Select Request Type <strong className="red-asterisk">*</strong>
          </span>
          <Select
            options={[
              { value: "problem", label: "Report a Problem" },
              { value: "service", label: "Service Request" },
            ]}
            value={
              ticketType
                ? {
                    value: ticketType,
                    label:
                      ticketType === "problem"
                        ? "Report a Problem"
                        : "Service Request",
                  }
                : null
            }
            onChange={(selected) => setTicketType(selected?.value || null)}
            placeholder="Choose request type"
            styles={getCustomSelectStyles()}
            isDisabled={!department}
          />
        </label>
      </div>

      {/* Step 3: Dynamic Form */}
      {ticketType && (
        <form onSubmit={handleSubmit} className="ticket-form">
          <label>
            <span>
              Brief Summary <strong className="red-asterisk">*</strong>
            </span>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            />
          </label>

          {ticketType === "problem" && department === "it" && (
            <>
              <div className="form-row">
                <label>
                  <span>
                    Problem Type <strong className="red-asterisk">*</strong>
                  </span>
                  <Select
                    options={[
                      { value: "bug", label: "Bug / System Error" },
                      { value: "hardware", label: "Hardware Issue" },
                      { value: "connectivity", label: "Connectivity Problem" },
                    ]}
                    value={issueType}
                    onChange={setIssueType}
                    styles={getCustomSelectStyles()}
                  />
                </label>
                <label>
                  <span>System Affected</span>
                  <input
                    type="text"
                    value={system}
                    onChange={(e) => setSystem(e.target.value)}
                  />
                </label>
              </div>
            </>
          )}

          {ticketType === "service" && (
            <>
              <div className="form-row">
                <label>
                  <span>
                    Service Type <strong className="red-asterisk">*</strong>
                  </span>
                  <Select
                    options={getServiceOptions()}
                    value={serviceType}
                    onChange={setServiceType}
                    styles={getCustomSelectStyles()}
                  />
                </label>
                {department === "it" && (
                  <label>
                    <span>Relating System</span>
                    <input
                      type="text"
                      value={system}
                      onChange={(e) => setSystem(e.target.value)}
                    />
                  </label>
                )}
              </div>
            </>
          )}

          {/* Description */}
          <label>
            <span>
              Description <strong className="red-asterisk">*</strong>
            </span>
            <CustomQuillEditor value={description} onChange={setDescription} />
          </label>

          {/* Priority & Location */}
          {department === "it" && (
            <div className="form-row">
              <label>
                <span>Priority</span>
                <Select
                  options={priorities}
                  value={priority}
                  onChange={setPriority}
                  styles={getCustomSelectStyles()}
                />
              </label>
              <label>
                <span>Location</span>
                <Select
                  options={locations}
                  value={location}
                  onChange={setLocation}
                  styles={getCustomSelectStyles()}
                />
              </label>
            </div>
          )}

          {/* File Upload */}
          <label className="file-upload-label">
            <span>Attachment (optional)</span>
            <div className="file-upload-box">
              <FiUploadCloud size={18} style={{ marginRight: 6 }} />
              <span>
                {attachment ? attachment.name : "Click or drag file here"}
              </span>
              <input
                type="file"
                onChange={(e) => setAttachment(e.target.files[0])}
                className="file-input-hidden"
              />
            </div>
          </label>

          {/* Actions */}
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button type="reset" className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateTicket;
