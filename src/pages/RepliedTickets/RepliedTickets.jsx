import React, { useState } from 'react';
import './RepliedTickets.css';
import TicketFilter from '../../components/TicketFilter/TicketFilter';
import TicketList from '../../components/MyTickets/TicketList/TicketList';

const repliedTicketsData = [
  {
    id: 601,
    name: 'Susan Nyambura',
    subject: 'Inquiry about recent invoice',
    status: 'Replied',
    priority: 'Medium',
    category: 'Billing',
    group: 'Finance',
    tags: ['Invoice', 'Payment'],
    createdAt: '2 days ago',
    responded: 'Responded',
     hasNewReply: true,
  },
  {
    id: 602,
    name: 'Victor Wekesa',
    subject: 'Follow-up on shipment delay',
    status: 'Replied',
    priority: 'High',
    category: 'Shipping',
    group: 'Logistics',
    tags: ['Delay', 'Shipping'],
    createdAt: '1 day ago',
    responded: 'Responded',
     hasNewReply: true,
  },
  {
    id: 603,
    name: 'Grace Oduor',
    subject: 'Issue with login credentials',
    status: 'Replied',
    priority: 'Urgent',
    category: 'Account',
    group: 'Technical Support',
    tags: ['Login', 'Account'],
    createdAt: '3 days ago',
    responded: 'Responded',
     hasNewReply: true,
  },
  {
    id: 604,
    name: 'David Mwangi',
    subject: 'Unable to upload profile image',
    status: 'Replied',
    priority: 'Low',
    category: 'Profile',
    group: 'Support',
    tags: ['Upload', 'Bug'],
    createdAt: '4 days ago',
    responded: 'Responded',
     hasNewReply: true,
  },
  {
    id: 605,
    name: 'Janet Mutiso',
    subject: 'Clarification on refund policy',
    status: 'Replied',
    priority: 'Trivial',
    category: 'Policy',
    group: 'Customer Care',
    tags: ['Refund', 'Policy'],
    createdAt: '5 days ago',
    responded: 'Responded',
     hasNewReply: true,
  }
];

const RepliedTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="replied-tickets-container">
      <h2 className="page-title">My Replied Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={repliedTicketsData}
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

export default RepliedTickets;
