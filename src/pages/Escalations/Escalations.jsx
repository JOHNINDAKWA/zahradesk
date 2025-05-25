import React, { useState } from 'react';

import './Escalations.css';
import TicketList from '../../components/MyTickets/TicketList/TicketList';
import TicketFilter from '../../components/TicketFilter/TicketFilter';

const escalatedTickets = [
  {
    id: 701,
    name: 'Brian Ouma',
    subject: 'Payment gateway failed during checkout',
    status: 'Escalated',
    priority: 'Urgent',
    category: 'Payment',
    group: 'Finance',
    tags: ['Gateway', 'Failure'],
    createdAt: '1 hour ago',
    responded: 'Not yet responded',
  },
  {
    id: 702,
    name: 'Carol Muthoni',
    subject: 'System crash after latest update',
    status: 'Escalated',
    priority: 'High',
    category: 'Bug',
    group: 'Engineering',
    tags: ['System', 'Crash'],
    createdAt: '3 hours ago',
    responded: 'Pending review',
  },
  {
    id: 703,
    name: 'Thomas Kariuki',
    subject: 'Sensitive data exposure in reports',
    status: 'Escalated',
    priority: 'Critical',
    category: 'Security',
    group: 'Compliance',
    tags: ['Security', 'Privacy'],
    createdAt: 'Today',
    responded: 'Escalated to CISO',
  },
  {
    id: 704,
    name: 'Elizabeth Wairimu',
    subject: 'Unresponsive UI on mobile version',
    status: 'Escalated',
    priority: 'Medium',
    category: 'UI Bug',
    group: 'UX',
    tags: ['Mobile', 'Interface'],
    createdAt: 'Yesterday',
    responded: 'Not yet responded',
  },
  {
    id: 705,
    name: 'Dennis Kilonzo',
    subject: 'Frequent app downtime in morning hours',
    status: 'Escalated',
    priority: 'High',
    category: 'Performance',
    group: 'DevOps',
    tags: ['Downtime', 'Performance'],
    createdAt: '2 days ago',
    responded: 'Investigating',
  },
];

const Escalations = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="escalations-container">
      <h2 className="page-title">Escalated Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={escalatedTickets}
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

export default Escalations;
