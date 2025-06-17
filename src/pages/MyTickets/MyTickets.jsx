import React, { useState } from "react";
import "./MyTickets.css";
import TicketFilter from "../../components/TicketFilter/TicketFilter";
import TicketList from "../../components/MyTickets/TicketList/TicketList";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi"; // Import filter icon

const sampleTickets = [
  {
    id: 1,
    name: "Matilda Glen",
    subject: "Received defecting product",
    status: "Pending",
    priority: "Urgent",
    category: "Problem",
    group: "Billing",
    tags: ["Billing", "Product", "Payment"],
    createdAt: "26min ago",
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: 2,
    name: "Kathy Mateo",
    subject: "Can I change or modify orders that are already placed?",
    status: "Replied",
    priority: "Urgent",
    category: "Question",
    group: "Sales",
    tags: ["Order"],
    createdAt: "26min ago",
    responded: "Responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
  {
    id: 3,
    name: "Stephanie Wafula",
    subject: "How can I order the same items again?",
    status: "Replied",
    priority: "High",
    category: "Reorder",
    group: "Customer Care",
    tags: ["Repeat", "Order"],
    createdAt: "45min ago",
    responded: "Not yet responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
  {
    id: 4,
    name: "Chris Rock",
    subject: "I ordered a wrong item. How can I stop the order?",
    status: "Pending",
    priority: "Medium",
    category: "Cancellation",
    group: "Billing",
    tags: ["Order", "Cancel"],
    createdAt: "1h ago",
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: 5,
    name: "Eddie Butita",
    subject: "Payment not yet received",
    status: "Replied",
    priority: "High",
    category: "Payment",
    group: "Finance",
    tags: ["Invoice"],
    createdAt: "2h ago",
    responded: "Responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
];

const MyTickets = () => {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // State for filter visibility

  return (
    <div className="my-tickets-container">
      <div className="mytickets-header">
        <h2 className="page-title">My Tickets</h2>
        <div className="ticket-tab-bar">
          <button className="ticket-tab active">List View</button>
          <Link to="/my-tickets/calendar" className="ticket-tab">
            Calendar View
          </Link>
          {/* Filter toggle button, visible only on small screens via CSS */}
          <button
            className="ticket-tab filter-toggle-button"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      {/* Main page layout */}
      <div className={`ticket-page-layout ${showFilter ? 'filter-open' : ''}`}>
        <div className="ticket-list-panel">
          <TicketList
            tickets={sampleTickets}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        </div>
        {/* The filter panel, which will be an overlay on small screens */}
        <div className={`ticket-filter-panel ${showFilter ? 'visible' : 'hidden'}`}>
          <TicketFilter onClose={() => setShowFilter(false)} /> {/* Pass onClose prop */}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
