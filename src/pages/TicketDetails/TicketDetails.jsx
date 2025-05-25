import React from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import "./TicketDetails.css";
import TicketConversation from "../../components/TicketConversation/TicketConversation";
import TicketSidebarDetails from "../../components/TicketSidebarDetails/TicketSidebarDetails";

const TicketDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // ✅ move it here inside the component
  const ticket = location.state?.ticket;

  return (
    <>
      <div className="ticket-page-header">
        <div className="ticket-breadcrumb">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>/</span>
          <span>
            <button onClick={() => navigate(-1)}>Tickets</button>
          </span>
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
