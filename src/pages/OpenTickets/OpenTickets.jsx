import React, { useState } from 'react';
import TicketList from '../../components/MyTickets/TicketList/TicketList';
import TicketFilter from '../../components/TicketFilter/TicketFilter';
import './OpenTickets.css';

const openTicketsData = [
  {
    id: 301,
    name: 'Faith Mumo',
    subject: 'Order stuck in processing',
    status: 'Open',
    priority: 'High',
    category: 'Order',
    group: 'Sales',
    tags: ['Order', 'Stuck'],
    createdAt: '1 hour ago',
    responded: 'Not yet responded',
  },
  {
    id: 302,
    name: 'Kevin Njuguna',
    subject: 'Request for invoice copy',
    status: 'Open',
    priority: 'Medium',
    category: 'Billing',
    group: 'Finance',
    tags: ['Invoice', 'Billing'],
    createdAt: '2 hours ago',
    responded: 'Not yet responded',
  },
  {
    id: 303,
    name: 'Alice Kimani',
    subject: 'Cannot update delivery address',
    status: 'Open',
    priority: 'Urgent',
    category: 'Shipping',
    group: 'Customer Support',
    tags: ['Shipping', 'Address'],
    createdAt: 'Today',
    responded: 'Pending agent reply',
  },
  {
    id: 304,
    name: 'Brian Otieno',
    subject: 'Product image is incorrect',
    status: 'Open',
    priority: 'Low',
    category: 'Catalog',
    group: 'QA Team',
    tags: ['Product', 'Image'],
    createdAt: '3 days ago',
    responded: 'Not yet responded',
  },
  {
    id: 305,
    name: 'Christine Wairimu',
    subject: 'Request for call back',
    status: 'Open',
    priority: 'Trivial',
    category: 'Support',
    group: 'Customer Care',
    tags: ['Call', 'Support'],
    createdAt: 'Yesterday',
    responded: 'Not yet responded',
  }
];

const OpenTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="open-tickets-container">
      <h2 className="page-title">Open Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={openTicketsData}
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

export default OpenTickets;
