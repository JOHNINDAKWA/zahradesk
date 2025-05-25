import React from "react";
import "./OngoingTickets.css";

const tickets = [
  {
    subject: "There is a big problem with Latest Updates",
    created: "12/09/2017",
    tag: "BUG",
    status: "OPEN",
    priority: 1,
  },
  {
    subject: "Request 502 on Console Tab",
    created: "12/14/2017",
    tag: "BUG",
    status: "OPEN",
    priority: 3,
  },
  {
    subject: "Offer message before upcoming update release",
    created: "12/15/2017",
    tag: "FEATURE",
    status: "REPLIED",
    priority: 3,
  },
  {
    subject:
      "Allow discussions of new topics, but not the creation of new ones",
    created: "12/18/2017",
    tag: "IDEA",
    status: "REPLIED",
    priority: 2,
  },
  {
    subject: "Allow custom fields for messages",
    created: "12/14/2017",
    tag: "BUG",
    status: "REPLIED",
    priority: 4,
  },
  {
    subject: "Close dialog keeps open up",
    created: "12/15/2017",
    tag: "DOCS",
    status: "OPEN",
    priority: 4,
  },
  {
    subject: "No feedback with buttons & filters",
    created: "12/18/2017",
    tag: "IDEA",
    status: "REPLIED",
    priority: 5,
  },
  {
    subject: "Integration with Visual Studio",
    created: "12/14/2017",
    tag: "BUG",
    status: "OPEN",
    priority: 5,
  },
  {
    subject: "Organize messages into a public topic",
    created: "12/15/2017",
    tag: "DOCS",
    status: "OPEN",
    priority: 5,
  },  
  {
    subject: "Close dialog keeps open up",
    created: "12/15/2017",
    tag: "DOCS",
    status: "OPEN",
    priority: 4,
  },

];

const OngoingTickets = () => {
  return (
    <div className="ongoing-tickets">
      <h3 className="section-title2">My Ongoing Tickets ({tickets.length})</h3>
      <div className="ticket-table2">
        <div className="ticket-table-header2">
          <span>Subject</span>
          <span>Status</span>
          <span className="tick-priority2">Priority</span>
          <span></span>
        </div>
        {tickets.map((ticket, index) => (
          <div className="ticket-row2" key={index}>
            <div className="ticket-subject2">
              <div className="ticket-title2">{ticket.subject}</div>
              <div className="ticket-meta2">
                Created on {ticket.created}
                <span className="ticket-tag2">{ticket.tag}</span>
              </div>
            </div>
            <div className={`ticket-status2 ${ticket.status.toLowerCase()}`}>
              {ticket.status}
            </div>
            <div className="ticket-priority2">
              <div className={`diamond2 priority2-${ticket.priority}`}>
                <span>{ticket.priority}</span>
              </div>
            </div>
            <div className="ticket-actions2">⋯</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTickets;
