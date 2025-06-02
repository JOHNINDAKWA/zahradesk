import React, { useState } from 'react';
import './UserManagement.css';
import UserDetail from './../../components/UserDetails/UserDetails';
import UserList from './../../components/UserList/UserList';

// You will create these next
import TeamsPanel from './../../components/TeamsPanel/TeamsPanel';
import DepartmentsPanel from './../../components/DepartmentsPanel/DepartmentsPanel';

const sampleUsers = [
  {
    id: 1,
    name: 'Alex Brown',
    email: 'alex.brown@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=1',
    status: 'active',
    lastLogin: '2025-05-01T15:30:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254712345678',
    department: 'Technical Support',
    jobTitle: 'Support Specialist',
    timeZone: 'Africa/Nairobi',
    bio: 'Tech-savvy and solution-oriented support agent.',
  },
  {
    id: 2,
    name: 'Diana Wronsky',
    email: 'diana.wronsky@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=2',
    status: 'inactive',
    lastLogin: '2025-04-18T11:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254722334455',
    department: 'Administration',
    jobTitle: 'System Administrator',
    timeZone: 'Africa/Nairobi',
    bio: 'Experienced admin with a knack for systems and security.',
  },
  {
    id: 3,
    name: 'Marion Wakio',
    email: 'marion.wakio@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=3',
    status: 'active',
    lastLogin: '2025-05-02T10:20:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254711223344',
    department: 'Customer Experience',
    jobTitle: 'Support Agent',
    timeZone: 'Africa/Nairobi',
    bio: 'Friendly and professional support with a focus on client retention.',
  },
  {
    id: 4,
    name: 'Damaris Wangui',
    email: 'damaris.wangui@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=4',
    status: 'inactive',
    lastLogin: '2025-04-20T09:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254733445566',
    department: 'IT Management',
    jobTitle: 'Network Administrator',
    timeZone: 'Africa/Nairobi',
    bio: 'Specialist in network and infrastructure management.',
  },
  {
    id: 5,
    name: 'Karen Juma',
    email: 'karen.juma@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=5',
    status: 'active',
    lastLogin: '2025-05-03T14:15:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254700123456',
    department: 'Support',
    jobTitle: 'Client Support Officer',
    timeZone: 'Africa/Nairobi',
    bio: 'Detail-oriented with strong problem-solving skills.',
  },
  {
    id: 6,
    name: 'Emmanuel Peti',
    email: 'emmanuel.peti@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=6',
    status: 'inactive',
    lastLogin: '2025-04-10T16:45:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254723556677',
    department: 'IT Services',
    jobTitle: 'IT Operations Manager',
    timeZone: 'Africa/Nairobi',
    bio: 'Seasoned IT professional with over 10 years in operations.',
  },
  {
    id: 7,
    name: 'Chrispine Wachira',
    email: 'chrispine.wachira@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=11',
    status: 'active',
    lastLogin: '2025-04-21T13:50:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254734567890',
    department: 'Tech Strategy',
    jobTitle: 'Technical Project Manager',
    timeZone: 'Africa/Nairobi',
    bio: 'Leading complex IT projects from planning to execution.',
  },
  {
    id: 8,
    name: 'Eunice Akinyi',
    email: 'eunice.akinyi@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=12',
    status: 'active',
    lastLogin: '2025-05-04T08:40:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254701112233',
    department: 'Customer Relations',
    jobTitle: 'Support Representative',
    timeZone: 'Africa/Nairobi',
    bio: 'Building trust through excellent customer service.',
  },
  {
    id: 9,
    name: 'Elijah Nyakwara',
    email: 'elijah.nyakwara@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=13',
    status: 'inactive',
    lastLogin: '2025-04-15T12:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254715667788',
    department: 'Security',
    jobTitle: 'Cyber Security Analyst',
    timeZone: 'Africa/Nairobi',
    bio: 'Passionate about digital safety and policy enforcement.',
  },{
      id: 10,
    name: 'Alex Brown',
    email: 'alex.brown@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=10',
    status: 'active',
    lastLogin: '2025-05-01T15:30:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254712345678',
    department: 'Technical Support',
    jobTitle: 'Support Specialist',
    timeZone: 'Africa/Nairobi',
    bio: 'Tech-savvy and solution-oriented support agent.',
  },
  {
    id: 11,
    name: 'Diana Wronsky',
    email: 'diana.wronsky@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=11',
    status: 'inactive',
    lastLogin: '2025-04-18T11:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254722334455',
    department: 'Administration',
    jobTitle: 'System Administrator',
    timeZone: 'Africa/Nairobi',
    bio: 'Experienced admin with a knack for systems and security.',
  },
  {
    id: 12,
    name: 'Marion Wakio',
    email: 'marion.wakio@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=12',
    status: 'active',
    lastLogin: '2025-05-02T10:20:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254711223344',
    department: 'Customer Experience',
    jobTitle: 'Support Agent',
    timeZone: 'Africa/Nairobi',
    bio: 'Friendly and professional support with a focus on client retention.',
  },
  {
    id: 13,
    name: 'Damaris Wangui',
    email: 'damaris.wangui@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=13',
    status: 'inactive',
    lastLogin: '2025-04-20T09:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254733445566',
    department: 'IT Management',
    jobTitle: 'Network Administrator',
    timeZone: 'Africa/Nairobi',
    bio: 'Specialist in network and infrastructure management.',
  },
  {
    id: 14,
    name: 'Karen Juma',
    email: 'karen.juma@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=14',
    status: 'active',
    lastLogin: '2025-05-03T14:15:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254700123456',
    department: 'Support',
    jobTitle: 'Client Support Officer',
    timeZone: 'Africa/Nairobi',
    bio: 'Detail-oriented with strong problem-solving skills.',
  },
  {
    id: 15,
    name: 'Emmanuel Peti',
    email: 'emmanuel.peti@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=15',
    status: 'inactive',
    lastLogin: '2025-04-10T16:45:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254723556677',
    department: 'IT Services',
    jobTitle: 'IT Operations Manager',
    timeZone: 'Africa/Nairobi',
    bio: 'Seasoned IT professional with over 10 years in operations.',
  },
  {
    id: 16,
    name: 'Chrispine Wachira',
    email: 'chrispine.wachira@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=16',
    status: 'active',
    lastLogin: '2025-04-21T13:50:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254734567890',
    department: 'Tech Strategy',
    jobTitle: 'Technical Project Manager',
    timeZone: 'Africa/Nairobi',
    bio: 'Leading complex IT projects from planning to execution.',
  },
  {
    id: 17,
    name: 'Eunice Akinyi',
    email: 'eunice.akinyi@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=17',
    status: 'active',
    lastLogin: '2025-05-04T08:40:00Z',
    roles: [{ value: 'support', label: 'Support' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canClose', label: 'Can Close Tickets' },
    ],
    phone: '+254701112233',
    department: 'Customer Relations',
    jobTitle: 'Support Representative',
    timeZone: 'Africa/Nairobi',
    bio: 'Building trust through excellent customer service.',
  },
  {
    id: 18,
    name: 'Elijah Nyakwara',
    email: 'elijah.nyakwara@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=18',
    status: 'inactive',
    lastLogin: '2025-04-15T12:00:00Z',
    roles: [{ value: 'admin', label: 'Admin' }],
    permissions: [
      { value: 'canAssign', label: 'Can Assign Tickets' },
      { value: 'canDelete', label: 'Can Delete Tickets' },
    ],
    phone: '+254715667788',
    department: 'Security',
    jobTitle: 'Cyber Security Analyst',
    timeZone: 'Africa/Nairobi',
    bio: 'Passionate about digital safety and policy enforcement.',
  },
];

const UserManagement = () => {
  const [selectedTab, setSelectedTab] = useState('users');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => setSelectedUser(user);

  return (
    <div className="user-management-page">
      <div className="tabs">
        <button
          className={selectedTab === 'users' ? 'active' : ''}
          onClick={() => setSelectedTab('users')}
        >
          Users
        </button>
        <button
          className={selectedTab === 'teams' ? 'active' : ''}
          onClick={() => setSelectedTab('teams')}
        >
          Teams
        </button>
        <button
          className={selectedTab === 'departments' ? 'active' : ''}
          onClick={() => setSelectedTab('departments')}
        >
          Departments
        </button>
      </div>

      <div className="user-management-grid">
        {selectedTab === 'users' && (
          <>
            <UserList
              users={sampleUsers}
              onSelect={handleSelectUser}
              selectedUser={selectedUser}
            />
            {selectedUser ? (
              <UserDetail user={selectedUser} />
            ) : (
              <div className="user-details-placeholder">
                <p>Select a user to view their details</p>
              </div>
            )}
          </>
        )}

        {selectedTab === 'teams' && <TeamsPanel />}

        {selectedTab === 'departments' && <DepartmentsPanel />}
      </div>
    </div>
  );
};

export default UserManagement;
