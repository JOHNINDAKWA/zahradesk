// src/pages/MyTicketsCalendar/MyTicketsCalendar.jsx
import React from "react";
import TicketCalendar from "../../components/TicketCalendar/TicketCalendar";
import { Link } from "react-router-dom";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();

const sampleTickets = [
  {
    id: "001",
    name: "Matilda Glen",
    subject: "Received defecting product",
    status: "Pending",
    priority: "Urgent",
    category: "Problem",
    group: "Billing",
    tags: ["Billing", "Product", "Payment"],
    createdAt: new Date(year, month, date, 9, 0),
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: "002",
    name: "Kathy Mateo",
    subject: "Can I change or modify orders that are already placed?",
    status: "Replied",
    priority: "Urgent",
    category: "Question",
    group: "Sales",
    tags: ["Order"],
    createdAt: new Date(year, month, date, 10, 30),
    responded: "Responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
  {
    id: "003",
    name: "Stephanie Wafula",
    subject: "How can I order the same items again?",
    status: "Replied",
    priority: "High",
    category: "Reorder",
    group: "Customer Care",
    tags: ["Repeat", "Order"],
    createdAt: new Date(year, month, date, 12, 0),
    responded: "Not yet responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
  {
    id: "004",
    name: "Chris Rock",
    subject: "I ordered a wrong item. How can I stop the order?",
    status: "Pending",
    priority: "Medium",
    category: "Cancellation",
    group: "Billing",
    tags: ["Order", "Cancel"],
    createdAt: new Date(year, month, date, 14, 0),
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: "005",
    name: "Eddie Butita",
    subject: "Payment not yet received",
    status: "Replied",
    priority: "High",
    category: "Payment",
    group: "Finance",
    tags: ["Invoice"],
    createdAt: new Date(year, month, date, 15, 30),
    responded: "Responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },

  // ➕ NEW: tight cluster events

  {
    id: "006",
    name: "Julie Nyambura",
    subject: "Cannot update billing info",
    status: "Pending",
    priority: "High",
    category: "Billing",
    group: "Billing",
    tags: ["Update"],
    createdAt: new Date(year, month, date, 9, 5),
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: "007",
    name: "Liam Ochieng",
    subject: "App crashed during order",
    status: "Open",
    priority: "Urgent",
    category: "Crash",
    group: "Technical",
    tags: ["App", "Order"],
    createdAt: new Date(year, month, date, 9, 15),
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: "008",
    name: "Grace Okello",
    subject: "Issue with promo code",
    status: "Pending",
    priority: "Medium",
    category: "Promotions",
    group: "Marketing",
    tags: ["Promo"],
    createdAt: new Date(year, month, date, 9, 25),
    responded: "Not yet responded",
    assignedTo: "John Indakwa",
  },
  {
    id: "009",
    name: "George Kimani",
    subject: "Cannot track order",
    status: "Replied",
    priority: "High",
    category: "Logistics",
    group: "Delivery",
    tags: ["Tracking"],
    createdAt: new Date(year, month, date, 9, 45),
    responded: "Responded",
    hasNewReply: true,
    assignedTo: "John Indakwa",
  },
];

const MyTicketsCalendar = () => {
  return (
    <div className="my-tickets-calendar-container">
      <div className="mytickets-header">
        <h2 className="page-title">My Tickets</h2>

        <div className="ticket-tab-bar">
          <Link to="/my-tickets" className="ticket-tab">
            List View
          </Link>
          <button className="ticket-tab active">Calendar View</button>
        </div>
      </div>

      <TicketCalendar tickets={sampleTickets} />
    </div>
  );
};

export default MyTicketsCalendar;
