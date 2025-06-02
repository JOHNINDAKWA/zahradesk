import React, { useState } from 'react';
import './ClosedTickets.css';
import TicketList from '../../components/MyTickets/TicketList/TicketList';
import TicketFilter from '../../components/TicketFilter/TicketFilter';

const closedTicketsData = [
  {
    id: 201,
    name: 'George Mwangi',
    subject: 'Refund request for overcharge',
    status: 'Closed',
    priority: 'High',
    category: 'Billing',
    group: 'Finance',
    tags: ['Refund', 'Billing'],
    createdAt: '3 days ago',
    responded: 'Responded',
  },
  {
    id: 202,
    name: 'Diana Kioko',
    subject: 'Issue with password reset',
    status: 'Closed',
    priority: 'Medium',
    category: 'Support',
    group: 'Customer Care',
    tags: ['Login', 'Security'],
    createdAt: '3 days ago',
    responded: 'Resolved',
  },
  {
    id: 203,
    name: 'Felix Ochieng',
    subject: 'Request to deactivate account',
    status: 'Closed',
    priority: 'Low',
    category: 'Account',
    group: 'Support',
    tags: ['Account', 'Request'],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 
    responded: 'Closed with confirmation',
  },
  {
    id: 204,
    name: 'Nadia Wambua',
    subject: 'Bug in transaction reporting',
    status: 'Closed',
    priority: 'High',
    category: 'Technical',
    group: 'Engineering',
    tags: ['Bug', 'Reports'],
   createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 
    responded: 'Resolved',
  },
  {
    id: 205,
    name: 'Brian Kiptoo',
    subject: 'Feedback on new dashboard layout',
    status: 'Closed',
    priority: 'Trivial',
    category: 'UI/UX',
    group: 'Design',
    tags: ['Feedback', 'UI'],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 
    responded: 'Reviewed',
  },
];

const ClosedTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="closed-tickets-container">
      <h2 className="page-title">Closed Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={closedTicketsData}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        </div>
        <div className="ticket-filter-panel">
          <TicketFilter />
        </div>
      </div>
    </div>
  );
};

export default ClosedTickets;
