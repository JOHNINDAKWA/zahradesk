import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import Select from "react-select";
import {
  FiEdit,
  FiSave,
  FiX,
  FiKey,
  FiUserX,
  FiExternalLink,
  FiActivity,
} from "react-icons/fi";



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

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Suspended", label: "Suspended" },
  { value: "Inactive", label: "Inactive" },
];

const UserDetails = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user.name || "");
  const [, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [department, setDepartment] = useState(user.department || "");
  const [jobTitle, setJobTitle] = useState(user.jobTitle || "");
  const [status, setStatus] = useState({
    value: user.status,
    label: user.status,
  });
  const [timezone, setTimezone] = useState(user.timezone || "");
  const [bio, setBio] = useState(user.bio || "");
  const [roles, setRoles] = useState(user.roles || []);
  const [permissions, setPermissions] = useState(user.permissions || []);

  
useEffect(() => {
  setName(user.name || "");
  setUsername(user.username || "");
  setEmail(user.email || "");
  setPhone(user.phone || "");
  setDepartment(user.department || "");
  setJobTitle(user.jobTitle || "");
  setStatus({ value: user.status, label: user.status });
  setTimezone(user.timezone || "");
  setBio(user.bio || "");
  setRoles(user.roles || []);
  setPermissions(user.permissions || []);
}, [user]);


  const handleSave = () => {
    const updatedUser = {
      name,
      email,
      phone,
      department,
      jobTitle,
      status,
      timezone,
      bio,
      roles,
      permissions,
    };

    console.log("Saving...", updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(user.name || "");
    setUsername(user.name || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setDepartment(user.department || "");
    setJobTitle(user.jobTitle || "");
    setStatus({ value: user.status, label: user.status });
    setTimezone(user.timezone || "");
    setBio(user.bio || "");
    setRoles(user.roles || []);
    setPermissions(user.permissions || []);
    setIsEditing(false);
  };



  return (
    <div className="user-detail">
      <div className="user-detail__header">
        <h4>User Information</h4>
        {!isEditing && (
          <FiEdit onClick={() => setIsEditing(true)} className="icon-btn" />
        )}
      </div>

      <div className="user-detail__avatar">
        <img src={user.avatar} alt={user.name} />
        <h5>{user.name}</h5>
        <p className={`user-detail__status ${user.status?.toLowerCase()}`}>
          {user.status}
        </p>
      </div>

      <div className="user-detail__info">
        {isEditing ? (
          <>
            <div className="user-detail__input-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Department</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Job Title</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="user-detail__input-group">
              <label>Status</label>
              <Select
                value={status}
                onChange={setStatus}
                options={statusOptions}
                styles={customStyles}
              />
            </div>
          </>
        ) : (
          <div className="u-t">
            <p>
              <strong>Username:</strong> <span>{name}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{email}</span>
            </p>
            <p>
              <strong>Phone:</strong> <span>{phone}</span>
            </p>
            <p>
              <strong>Department:</strong> <span>{department}</span>
            </p>
            <p>
              <strong>Job Title:</strong> <span>{jobTitle}</span>
            </p>
            <p>
              <strong>Status:</strong> <span>{status?.label}</span>
            </p>
            <p>
              <strong>Last Seen:</strong>{" "}
              <span>{new Date(user.lastLogin).toLocaleString()}</span>
            </p>
          </div>
        )}
      </div>

      <div className="user-detail__section">
        <p className="user-detail__label">Roles</p>
        {isEditing ? (
          <Select
            isMulti
            value={roles}
            onChange={setRoles}
            options={rolesOptions}
            className="user-detail__select"
            styles={customStyles}
          />
        ) : (
          <div className="badge-group">
            {roles.map((role) => (
              <span key={role.value} className="badge">
                {role.label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="user-detail__section">
        <p className="user-detail__label">Permissions</p>
        {isEditing ? (
          <Select
            isMulti
            value={permissions}
            onChange={setPermissions}
            options={permissionsOptions}
            className="user-detail__select"
            styles={customStyles}
          />
        ) : (
          <ul className="perm-list">
            {permissions.map((permission) => (
              <li key={permission.value}>{permission.label}</li>
            ))}
          </ul>
        )}
      </div>

      {isEditing && (
        <div className="user-detail__edit-actions">
          <button className="btn-primary" onClick={handleSave}>
            <FiSave /> Save
          </button>
          <button className="btn-secondary" onClick={handleCancel}>
            <FiX /> Cancel
          </button>
        </div>
      )}

      <div className="user-detail__extras">
        <button className="btn-text">
          <FiKey /> Reset Password
        </button>
        <button className="btn-text">
          <FiUserX /> Deactivate User
        </button>
        <button className="btn-text">
          <FiActivity /> View Audit Log
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
