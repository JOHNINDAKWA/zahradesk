import React from 'react';
import './UserList.css';
import { Link } from 'react-router-dom';

const UserList = ({ users, onSelect, selectedUser }) => {
  return (
    <div className="user-list-panel">
      <div className="user-list-header">
        <h3>Users</h3>
        <Link to='/create-user' className="add-user-btn">+ Add New</Link>
      </div>
      <div className="user-list-search">
        <input type="text" placeholder="Search users..." />
      </div>
      <div className="user-table">
        {users.map(user => (
          <div
            key={user.id}
            className={`user-row ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => onSelect(user)}
          >
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
            <span className={`job-title ${user.jobTitle}`}>{user.jobTitle}</span>
            <span className={`status-badge ${user.status}`}>{user.status}</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
