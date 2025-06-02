import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './TeamsPanel.css';
import getCustomSelectStyles from '../../utils/reactSelectStyles';

const TeamsPanel = () => {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);

  const [teamName, setTeamName] = useState('');
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    // Simulated data
    setDepartments([
      { id: 1, name: 'Technical Support' },
      { id: 2, name: 'Customer Experience' },
    ]);

    setUsers([
      { id: 1, name: 'Alex Brown' },
      { id: 2, name: 'Diana Wronsky' },
      { id: 3, name: 'Marion Wakio' },
      { id: 4, name: 'Damaris Wangui' },
    ]);

    setTeams([
      {
        id: 1,
        name: 'Helpdesk Tier 1',
        departmentId: 1,
        memberIds: [1, 3],
      },
      {
        id: 2,
        name: 'Client Retention',
        departmentId: 2,
        memberIds: [3],
      },
    ]);
  }, []);

  const openAddModal = () => {
    setTeamName('');
    setSelectedDept(null);
    setSelectedUsers([]);
    setEditingTeam(null);
    setShowModal(true);
  };

  const openEditModal = (team) => {
    setTeamName(team.name);
    setSelectedDept(departments.find(d => d.id === team.departmentId));
    setSelectedUsers(users.filter(u => team.memberIds.includes(u.id)));
    setEditingTeam(team);
    setShowModal(true);
  };

  const handleSave = () => {
    const memberIds = selectedUsers.map(u => u.id);
    if (editingTeam) {
      const updated = teams.map(t =>
        t.id === editingTeam.id
          ? { ...t, name: teamName, departmentId: selectedDept.id, memberIds }
          : t
      );
      setTeams(updated);
    } else {
      setTeams([
        ...teams,
        { id: Date.now(), name: teamName, departmentId: selectedDept.id, memberIds }
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this team?')) {
      setTeams(teams.filter(t => t.id !== id));
    }
  };

  const getDeptName = (id) => departments.find(d => d.id === id)?.name || '—';
  const getMemberNames = (ids) =>
    users.filter(u => ids.includes(u.id)).map(u => u.name).join(', ');

  return (
    <div className="teams-panel">
      <div className="teams-header">
        <h3>Teams</h3>
        <button className="team-add-btn" onClick={openAddModal}>+ Add Team</button>
      </div>

      <div className="teams-list">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <h4>{team.name}</h4>
            <p><span>Department:</span> {getDeptName(team.departmentId)}</p>
            <p><span>Members:</span> {getMemberNames(team.memberIds)}</p>
            <div className="team-actions">
              <button onClick={() => openEditModal(team)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(team.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="team-modal-overlay">
          <div className="team-modal">
            <h4>{editingTeam ? 'Edit Team' : 'Add Team'}</h4>
            <div className="input-select-divider">
            <input
              type="text"
              placeholder="Team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
             
            />
            <Select
              placeholder="Select Department"
              options={departments.map(d => ({ value: d.id, label: d.name }))}
                styles={getCustomSelectStyles()} 
              value={selectedDept ? { value: selectedDept.id, label: selectedDept.name } : null}
              onChange={(selected) =>
                setSelectedDept(departments.find(d => d.id === selected.value))
              }
            />
            <Select
              isMulti
              placeholder="Assign Users"
              options={users.map(u => ({ value: u.id, label: u.name }))}
              value={selectedUsers.map(u => ({ value: u.id, label: u.name }))}
                styles={getCustomSelectStyles()} 
              onChange={(selected) =>
                setSelectedUsers(users.filter(u => selected.map(s => s.value).includes(u.id)))
              }
            />
            </div>
            <div className="modal-actions">
              <button className="btn-primary" onClick={handleSave}>
                {editingTeam ? 'Update' : 'Add'}
              </button>
              <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPanel;
