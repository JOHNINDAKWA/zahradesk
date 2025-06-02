import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './DepartmentsPanel.css';
import getCustomSelectStyles from '../../utils/reactSelectStyles';

const DepartmentsPanel = () => {
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [deptName, setDeptName] = useState('');
  const [deptHead, setDeptHead] = useState(null);

  useEffect(() => {
    // Simulated fetch
    setDepartments([
      { id: 1, name: 'Technical Support', headId: 1 },
      { id: 2, name: 'Customer Experience', headId: 3 },
      { id: 3, name: 'Customer Experience1', headId: 3 },
      { id: 4, name: 'Customer Experience2', headId: 3 },
      { id: 5, name: 'Customer Experience3', headId: 3 },
      { id: 6, name: 'Customer Experience4', headId: 3 },
      { id: 7, name: 'Customer Experience5', headId: 3 },
    ]);

    setUsers([
      { id: 1, name: 'Alex Brown' },
      { id: 2, name: 'Diana Wronsky' },
      { id: 3, name: 'Marion Wakio' },
      { id: 4, name: 'Damaris Wangui' },
    ]);
  }, []);

  const openAddModal = () => {
    setDeptName('');
    setDeptHead(null);
    setEditingDept(null);
    setShowModal(true);
  };

  const openEditModal = (dept) => {
    setDeptName(dept.name);
    setDeptHead(users.find(u => u.id === dept.headId));
    setEditingDept(dept);
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingDept) {
      const updated = departments.map(d =>
        d.id === editingDept.id ? { ...d, name: deptName, headId: deptHead.id } : d
      );
      setDepartments(updated);
    } else {
      setDepartments([
        ...departments,
        { id: Date.now(), name: deptName, headId: deptHead.id }
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this department?')) {
      setDepartments(departments.filter(d => d.id !== id));
    }
  };

  const getUserName = (id) => users.find(u => u.id === id)?.name || '—';
  const getUserCount = (deptName) => users.filter(u => u.department === deptName).length;

  return (
    <div className="departments-panel">
      <div className="departments-header">
        <h3>Departments</h3>
        <button className="dept-add-btn" onClick={openAddModal}>+ Add Department</button>
      </div>

      <div className="departments-list">
        {departments.map((dept) => (
          <div key={dept.id} className="dept-card">
            <h4>{dept.name}</h4>
            <p><span>Head:</span> {getUserName(dept.headId)}</p>
            <p><span>Users:</span> {getUserCount(dept.name)}</p>
            <div className="dept-actions">
              <button onClick={() => openEditModal(dept)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(dept.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="dept-modal-overlay">
          <div className="dept-modal">
            <h4>{editingDept ? 'Edit Department' : 'Add Department'}</h4>
            <input
              type="text"
              placeholder="Department name"
              value={deptName}
              onChange={(e) => setDeptName(e.target.value)}
            />
            <Select
              placeholder="Select Head of Department"
              options={users.map(u => ({ value: u.id, label: u.name }))}
              value={deptHead ? { value: deptHead.id, label: deptHead.name } : null}
               styles={getCustomSelectStyles()} 
              onChange={(selected) => {
                const matchedUser = users.find(u => u.id === selected.value);
                setDeptHead(matchedUser);
              }}
            />
            <div className="modal-actions">
              <button className="btn-primary" onClick={handleSave}>
                {editingDept ? 'Update' : 'Add'}
              </button>
              <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentsPanel;
