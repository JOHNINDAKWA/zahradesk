import React, { useState } from 'react';
import './MyTickets.css';
import TicketFilter from '../../components/TicketFilter/TicketFilter';
import TicketList from '../../components/MyTickets/TicketList/TicketList';


const sampleTickets = [
  {
    id: 1,
    name: 'Matilda Glen',
    subject: 'Received defecting product',
    status: 'Pending',
    priority: 'Urgent',
    category: 'Problem',
    group: 'Billing',
    tags: ['Billing', 'Product', 'Payment'],
    createdAt: '26min ago',
    responded: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },
  {
    id: 2,
    name: 'Kathy Mateo',
    subject: 'Can I change or modify orders that are already placed?',
    status: 'Replied',
    priority: 'Urgent',
    category: 'Question',
    group: 'Sales',
    tags: ['Order'],
    createdAt: '26min ago',
    responded: 'Responded',
     hasNewReply: true,
     assignedTo: 'John Indakwa',
  },
  {
    id: 3,
    name: 'Stephanie Wafula',
    subject: 'How can I order the same items again?',
    status: 'Replied',
    priority: 'High',
    category: 'Reorder',
    group: 'Customer Care',
    tags: ['Repeat', 'Order'],
    createdAt: '45min ago',
    responded: 'Not yet responded',
     hasNewReply: true,
     assignedTo: 'John Indakwa',
  },
  {
    id: 4,
    name: 'Chris Rock',
    subject: 'I ordered a wrong item. How can I stop the order?',
    status: 'Pending',
    priority: 'Medium',
    category: 'Cancellation',
    group: 'Billing',
    tags: ['Order', 'Cancel'],
    createdAt: '1h ago',
    responded: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },
  {
    id: 5,
    name: 'Eddie Butita',
    subject: 'Payment not yet received',
    status: 'Replied',
    priority: 'High',
    category: 'Payment',
    group: 'Finance',
    tags: ['Invoice'],
    createdAt: '2h ago',
    responded: 'Responded',
    hasNewReply: true,
    assignedTo: 'John Indakwa',
  },
  {
    id: 6,
    name: 'Carina Rosenburg',
    subject: 'Payment Issues',
    status: 'Closed',
    priority: 'Low',
    category: 'Payment',
    group: 'Finance',
    tags: ['Refund'],
    createdAt: 'Yesterday',
    responded: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },
  {
    id: 7,
    name: 'Paula Moraa',
    subject: 'Received damaged producMoving forward we want to push our packages especially what we have in the website.',
    status: 'Resolved',
    priority: 'Trivial',
    category: 'Product',
    group: 'Shipping',
    tags: ['Return'],
    createdAt: '2d ago',
    respondedAt: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },
  {
    id: 8,
    name: 'Robert Wawire',
    subject: 'Unable to track order',
    status: 'Open',
    priority: 'Medium',
    category: 'Shipping',
    group: 'Support',
    tags: ['Tracking', 'Order'],
    createdAt: '3d ago',
    responded: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },

    {
    id: 9,
    name: 'Eddie Mafi',
    subject: 'Payment not yet received',
    status: 'Replied',
    priority: 'High',
    category: 'Payment',
    group: 'Finance',
    tags: ['Invoice'],
    createdAt: '2h ago',
    responded: 'Responded',
  },
  {
    id: 10,
    name: 'Carina Rosenburg',
    subject: 'Payment Issues',
    status: 'Closed',
    priority: 'Low',
    category: 'Payment',
    group: 'Finance',
    tags: ['Refund'],
    createdAt: 'Yesterday',
    responded: 'Not yet responded',
  },
  {
    id: 11,
    name: 'Paula Moraa',
    subject: 'Received damaged product',
    status: 'Resolved',
    priority: 'Trivial',
    category: 'Product',
    group: 'Shipping',
    tags: ['Return'],
    createdAt: '2d ago',
    respondedAt: 'Not yet responded',
  },
  {
    id: 12,
    name: 'Robert Wawire',
    subject: 'Unable to track order',
    status: 'Open',
    priority: 'Medium',
    category: 'Shipping',
    group: 'Support',
    tags: ['Tracking', 'Order'],
    createdAt: '3d ago',
    responded: 'Not yet responded',
  },
];

const MyTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return (
    <div className="my-tickets-container">
      <h2 className="page-title">My Tickets</h2>
      <div className="ticket-page-layout">
        <div className="ticket-list-panel">
          <TicketList
            tickets={sampleTickets}
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

export default MyTickets;
