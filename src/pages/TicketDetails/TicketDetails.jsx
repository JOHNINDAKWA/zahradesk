import React from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import "./TicketDetails.css";
import TicketConversation from "../../components/TicketConversation/TicketConversation";
import TicketSidebarDetails from "../../components/TicketSidebarDetails/TicketSidebarDetails";

// TEMP fallback sample data (can move to shared file)
const sampleTickets = [
  {
    id: '001',
    name: 'Matilda Glen',
    subject: 'Received defecting product',
    status: 'Pending',
    priority: 'Urgent',
    category: 'Problem',
    group: 'Billing',
    tags: ['Billing', 'Product', 'Payment'],
    createdAt: new Date(),
    responded: 'Not yet responded',
    assignedTo: 'John Indakwa',
  },
  // include the rest of your tickets...
];

const TicketDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Prefer state if available
  const ticket = location.state?.ticket || sampleTickets.find(t => t.id === id);

  if (!ticket) {
    return (
      <div className="ticket-not-found">
        <p>⚠️ Ticket data not available. Please go back to the ticket list and try again.</p>
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    );
  }

  return (
    <>
      <div className="ticket-page-header">
        <div className="ticket-breadcrumb">
          <span><Link to="/">Home</Link></span>
          <span>/</span>
          <span><button onClick={() => navigate(-1)}>Tickets</button></span>
          <span>/</span>
          <span>Ticket #{id}</span>
        </div>

        <button className="ticket-back-link" onClick={() => navigate(-1)}>
          ← Back 
        </button>
      </div>

      <div className="ticket-details-layout">
        <div className="ticket-conversation-panel">
          <TicketConversation ticket={ticket} id={id} />
        </div>
        <div className="ticket-sidebar-panel">
          <TicketSidebarDetails ticket={ticket} />
        </div>
      </div>
    </>
  );
};

export default TicketDetails;
