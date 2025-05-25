import React, { useState } from 'react';
import './OverdueTickets.css';
import TicketList from '../../components/MyTickets/TicketList/TicketList';
import TicketFilter from '../../components/TicketFilter/TicketFilter';

const overdueTicketsData = [
  {
    id: 401,
    name: 'Lilian Otieno',
    subject: 'No delivery after estimated date',
    status: 'Waiting on customer',
    priority: 'Urgent',
    category: 'Shipping',
    group: 'Logistics',
    tags: ['Delivery', 'Overdue'],
    createdAt: '5 days ago',
    responded: 'Not yet responded',
  },
  {
    id: 402,
    name: 'James Mwangi',
    subject: 'Request pending approval for 1 week',
    status: 'Open',
    priority: 'High',
    category: 'Support',
    group: 'Approvals',
    tags: ['Pending', 'Escalation'],
    createdAt: '7 days ago',
    responded: 'Responded',
  },
  {
    id: 403,
    name: 'Beatrice Njeri',
    subject: 'Product still not replaced',
    status: 'Pending',
    priority: 'Medium',
    category: 'Returns',
    group: 'QA',
    tags: ['Return', 'Delay'],
    createdAt: '10 days ago',
    responded: 'Not yet responded',
  },
  {
    id: 404,
    name: 'Ronald Kiprotich',
    subject: 'Overdue service ticket',
    status: 'Open',
    priority: 'Urgent',
    category: 'Maintenance',
    group: 'Technical Support',
    tags: ['Urgent', 'Service'],
    createdAt: '8 days ago',
    responded: 'Pending',
  },
  {
    id: 405,
    name: 'Naomi Wanjiru',
    subject: 'Escalated ticket still not resolved',
    status: 'Escalated',
    priority: 'High',
    category: 'Technical Issue',
    group: 'Tech Escalation',
    tags: ['Tech', 'Urgent'],
    createdAt: '6 days ago',
    responded: 'No reply',
  }
];

const OverdueTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="overdue-tickets-container">
      <h2 className="page-title">My Overdue Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={overdueTicketsData}
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

export default OverdueTickets;
