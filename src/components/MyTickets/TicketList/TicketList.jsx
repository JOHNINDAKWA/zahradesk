import React from "react";
import "./TicketList.css";
import TicketItem from "../TicketItem/TicketItem";
import {
  FiUserPlus,
  FiLink2,
  FiRefreshCw,
  FiCheckCircle,
  FiTrash2,
  FiSlash,
  FiMoreHorizontal,
  FiUpload,
  FiRotateCw,
  FiArrowUpRight,
  FiTrendingUp,
  FiCopy,
} from "react-icons/fi";

const TicketList = ({ tickets = [], selectedTickets, setSelectedTickets }) => {
  const toggleTicket = (id) => {
    setSelectedTickets((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedTickets.includes(id);

  return (
    <div className="ticket-list-wrapper">
      {selectedTickets.length > 0 && (
        <div className="ticket-actions-bar">
          <button>
            <FiUserPlus /> <span>Assign</span>
          </button>
          <button>
            <FiRefreshCw /> <span>Update</span>
          </button>
          <button>
            <FiCheckCircle /> <span>Close</span>
          </button>
          <button>
            <FiTrash2 /> <span>Delete</span>
          </button>
          <button>
             <FiRotateCw /> <span>Reopen</span>
          </button>
           <button>
              <FiCopy /> <span>Clone</span>
          </button>

          <button>
            <FiTrendingUp /><span>Escalate</span>
          </button>

          <div className="action-divider" />

          <button className="export-btn">
            <FiUpload /> <span>Export</span>
          </button>
        </div>
      )}

      {tickets.length === 0 ? (
        <div className="no-tickets-message">
          <p>No tickets to display.</p>
        </div>
      ) : (
        tickets.map((ticket) => (
          <TicketItem
            key={ticket.id}
            ticket={ticket}
            selected={isSelected(ticket.id)}
            onToggle={() => toggleTicket(ticket.id)}
          />
        ))
      )}
    </div>
  );
};

export default TicketList;
