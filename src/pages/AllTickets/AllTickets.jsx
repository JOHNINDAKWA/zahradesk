import React, { useState } from 'react';
import './AllTickets.css'; // You can reuse or duplicate styling from MyTickets
import TicketList from '../../components/MyTickets/TicketList/TicketList';
import TicketFilter from '../../components/TicketFilter/TicketFilter';


// Sample All Tickets (You can replace this with actual data from an API)
const allTickets = [
//   {
//     id: 101,
//     name: 'Alice Mwangi',
//     subject: 'Issue with subscription plan',
//     status: 'Open',
//     priority: 'High',
//     category: 'Billing',
//     group: 'Finance',
//     tags: ['Subscription', 'Plan'],
//     createdAt: '30min ago',
//     responded: 'Not yet responded',
//   },
//   {
//     id: 102,
//     name: 'Brian Otieno',
//     subject: 'Need help with onboarding',
//     status: 'Pending',
//     priority: 'Medium',
//     category: 'Onboarding',
//     group: 'Support',
//     tags: ['Help', 'Setup'],
//     createdAt: '2h ago',
//     responded: 'Responded',
//   },
//   {
//     id: 103,
//     name: 'Joan Kirui',
//     subject: 'Incorrect invoice received',
//     status: 'Replied',
//     priority: 'Urgent',
//     category: 'Finance',
//     group: 'Accounts',
//     tags: ['Billing', 'Invoice'],
//     createdAt: '1d ago',
//     responded: 'Responded',
//   },
 
];

const AllTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="all-tickets-container">
      <h2 className="page-title">All Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={allTickets}
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

export default AllTickets;
