import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./RequestTypeConfigurator.css";

const isDark = document.documentElement.classList.contains("dark");

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: isDark ? "#1f2937" : "var(--color-surface)",
    borderColor: state.isFocused
      ? "var(--color-primary)"
      : "var(--color-border-light)",
    boxShadow: "none",
    "&:hover": {
      borderColor: "var(--color-primary-hover)",
    },
    color: isDark ? "#f9fafb" : "var(--color-text)",
    fontSize: "0.85rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: isDark ? "#f9fafb" : "var(--color-text)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? isDark
        ? "#374151"
        : "var(--color-primary-hover)"
      : "transparent",
    color: isDark ? "#f9fafb" : "var(--color-text)",
    cursor: "pointer",
    fontSize: "0.85rem",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: isDark ? "#1f2937" : "var(--color-surface)",
    border: `1px solid ${isDark ? "#374151" : "var(--color-border-light)"}`,
    zIndex: 20,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: isDark ? "#9ca3af" : "#6b7280",
  }),
  input: (provided) => ({
    ...provided,
    color: isDark ? "#f9fafb" : "inherit",
  }),
};

const departmentOptions = [
  { value: "IT", label: "IT" },
  { value: "Support", label: "Support" },
  { value: "Operations", label: "Operations" },
  { value: "Product", label: "Product" },
  { value: "HR", label: "HR" },
  { value: "Finance", label: "Finance" },
];
const issueTypeOptions = [
  { value: "Access Issue", label: "Access Issue" },
  { value: "Hardware Request", label: "Hardware Request" },
  { value: "Software Bug", label: "Software Bug" },
  { value: "Onboarding", label: "Onboarding" },
  { value: "Finance Access", label: "Finance Access" },
];

const RequestTypeConfigurator = () => {
  const [mappings, setMappings] = useState([
    {
      issueType: "Access Issue",
      requestType: "VPN Access Request",
      team: "IT Support",
      workflow: "VPN Access Workflow",
      department: "IT",
    },
    {
      issueType: "Access Issue",
      requestType: "Email Unlock",
      team: "Helpdesk",
      workflow: "Simple Unlock Workflow",
      department: "Support",
    },
    {
      issueType: "Hardware Request",
      requestType: "Laptop Replacement",
      team: "Procurement",
      workflow: "Procurement Workflow",
      department: "Operations",
    },
    {
      issueType: "Software Bug",
      requestType: "Mobile App Crash",
      team: "Engineering",
      workflow: "Bug Investigation Flow",
      department: "Product",
    },
    {
      issueType: "Onboarding",
      requestType: "New Employee Setup",
      team: "HR Support",
      workflow: "Employee Onboarding Flow",
      department: "HR",
    },
    {
      issueType: "Finance Access",
      requestType: "Budget Tool Access",
      team: "Finance Ops",
      workflow: "Finance Access Flow",
      department: "Finance",
    },
  ]);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    issueType: "",
    requestType: "",
    team: "",
    workflow: "",
    department: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddMapping = () => {
    if (
      form.issueType &&
      form.requestType &&
      form.team &&
      form.workflow &&
      form.department
    ) {
      setMappings((prev) => [...prev, form]);
      setForm({
        issueType: "",
        requestType: "",
        team: "",
        workflow: "",
        department: "",
      });
      setShowModal(false);
    }
  };

  const handleSelectDepartment = (selected) => {
    setForm((prev) => ({
      ...prev,
      department: selected?.value || "",
    }));
  };

  return (
    <div className="container">
      <div className="configurator-header">
        <h2 className="configurator-title">Service Request Flows</h2>
        <button className="btn" onClick={() => setShowModal(true)}>
          + Add Request Flow
        </button>
      </div>

      <div className="card">
        <table className="mapping-table">
          <thead>
            <tr>
              <th>--</th>
              <th>Issue Type</th>
              <th>Request Type</th>
              <th>Assigned Team</th>
              <th>Department</th>
              <th>Workflow</th>
            </tr>
          </thead>

          <tbody>
            {mappings.map((map, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center", fontWeight: 500 }}>
                  {index + 1}
                </td>
                <td>{map.issueType}</td>
                <td>{map.requestType}</td>
                <td>
                  <span className="badge">{map.team}</span>
                </td>
                <td>{map.department}</td>
                <td>
                  <button
                    className="link-button"
                    onClick={() =>
                      navigate("/workflow-admin", { state: { mapping: map } })
                    }
                  >
                    {map.workflow}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Add Request Flow</h3>

            <div className="modal-group">
              <label>Issue Type</label>
              <Select
                options={issueTypeOptions}
                value={issueTypeOptions.find(
                  (opt) => opt.value === form.issueType
                )}
                onChange={(selected) =>
                  handleChange("issueType", selected ? selected.value : "")
                }
                placeholder="Select issue type..."
                styles={customStyles}
              />
            </div>

            <div className="modal-group">
              <label>Request Type</label>
              <input
                type="text"
                value={form.requestType}
                onChange={(e) => handleChange("requestType", e.target.value)}
              />
            </div>

            <div className="modal-group">
              <label>Assigned Team</label>
              <input
                type="text"
                value={form.team}
                onChange={(e) => handleChange("team", e.target.value)}
              />
            </div>

            <div className="modal-group">
              <label>Department</label>
              <Select
                options={departmentOptions}
                value={departmentOptions.find(
                  (opt) => opt.value === form.department
                )}
                onChange={handleSelectDepartment}
                placeholder="Select department..."
                styles={customStyles}
              />
            </div>

            <div className="modal-group">
              <label>Workflow</label>
              <input
                type="text"
                value={form.workflow}
                onChange={(e) => handleChange("workflow", e.target.value)}
              />
            </div>

            <div className="modal-actions">
              <button className="btn" onClick={handleAddMapping}>
                Save
              </button>
              <button
                className="btn cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestTypeConfigurator;
