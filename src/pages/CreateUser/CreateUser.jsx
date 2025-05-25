import React, { useState } from "react";
import Select from "react-select";
import "../CreateTicket/CreateTicket.css";
import { FiUserPlus, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

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

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Suspended", label: "Suspended" },
  { value: "Inactive", label: "Inactive" },
];

const rolesOptions = [
  { value: "support", label: "Support" },
  { value: "admin", label: "Admin" },
  { value: "agent", label: "Agent" },
];

const permissionsOptions = [
  { value: "canAssign", label: "Can Assign Tickets" },
  { value: "canCreate", label: "Can Create Tickets" },
  { value: "canClose", label: "Can Close Tickets" },
  { value: "canEscalate", label: "Can Escalate Tickets" },
  { value: "canEditProfile", label: "Can Edit Profile" },
  { value: "canDelete", label: "Can Delete Tickets" },
  { value: "canViewReports", label: "Can View Reports" },
  { value: "canGenerateReports", label: "Can Generate Reports" },
  { value: "canClone", label: "Can Clone Tickets" },
];

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState(null);
  const [bio, setBio] = useState("");
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      department,
      jobTitle,
      status,
      bio,
      roles,
      permissions,
    };
    console.log("New user:", newUser);
  };

  return (
    <div className="ticket-form-container">
      <h2 className="form-title">Create New User</h2>
      <p className="form-subtext">Fill out the information below to register a new user in the system.</p>

      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-row">
          <label>
            <span>Full Name *</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            <span>Email *</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Phone</span>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label>
            <span>Department</span>
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Job Title</span>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </label>

          <label>
            <span>Status</span>
            <Select
              value={status}
              onChange={setStatus}
              options={statusOptions}
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Short Bio</span>
            <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Roles</span>
            <Select
              isMulti
              value={roles}
              onChange={setRoles}
              options={rolesOptions}
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>

          <label>
            <span>Permissions</span>
            <Select
              isMulti
              value={permissions}
              onChange={setPermissions}
              options={permissionsOptions}
              styles={customStyles}
              classNamePrefix="custom-select"
            />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            <FiUserPlus style={{ marginRight: 6 }} /> Create User
          </button>
          <Link to='/users' type="reset" className="btn-secondary">
            <FiX style={{ marginRight: 6 }} /> Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;