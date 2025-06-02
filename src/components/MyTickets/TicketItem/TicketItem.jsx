import React, { useState } from "react";
import "./TicketItem.css";
import { Link } from "react-router-dom";
import moment from 'moment';

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const getColor = (name) => {
  const colors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#6366f1"];
  return colors[name.length % colors.length];
};

const TicketItem = ({ ticket, selected, onToggle }) => {
  const [showDetails, setShowDetails] = useState(false);
  const initials = getInitials(ticket.name);
  const color = getColor(ticket.name);

  return (
    <div
      className={`ti-item-wrapper ${selected ? "selected" : ""}`}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Header section with checkbox + avatar */}
      <div
        className="ti-clickable-head"
        onClick={(e) => e.stopPropagation()} // prevent toggle when clicking inside
      >
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        />
        <div className="ti-avatar" style={{ backgroundColor: color }}>
          {initials}
        </div>
      </div>

      {/* Main content */}
      <div className="ti-content">
        <div className="ti-subject-row">
          <Link
            to={`/ticket/${ticket.id}`}
            state={{ ticket }}
            className="ti-subject-link"
            onClick={(e) => e.stopPropagation()}
          >
            {ticket.subject}
            {ticket.hasNewReply && (
              <span className="ti-new-reply-dot" title="New reply" />
            )}
          </Link>

          <div className="ti-status-view">
            <span className={`ti-status-pill ${ticket.status.toLowerCase()}`}>
              {ticket.status}
            </span>
            <span
              className="ti-quick-view"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(!showDetails);
              }}
            >
              {showDetails ? "Hide" : "Quick view"}
            </span>
          </div>
        </div>

        <div className="ti-meta">
          {/* <span>{ticket.name}</span> • <span>{ticket.createdAt}</span>  */}
          <span>{moment(ticket.createdAt).format('MMM D, YYYY h:mm A')}</span>•{" "}
          <span>{ticket.responded}</span>
        </div>

        {showDetails && (
          <div className="ti-details-wrapper">
            <div className="border-division"></div>
            <div className="ti-details">
              <div className="ti-left">
                <div className="ti-field">
                  <label className="ti-label">Priority</label>
                  <div className="ti-pill ti-priority">{ticket.priority}</div>
                </div>
                <div className="ti-field">
                  <label className="ti-label">Status</label>
                  <div className="ti-pill ti-status">{ticket.status}</div>
                </div>
                <div className="ti-field">
                  <label className="ti-label">Category</label>
                  <div className="ti-pill ti-category">{ticket.category}</div>
                </div>
                <div className="ti-field">
                  <label className="ti-label">Group</label>
                  <div className="ti-pill ti-group">{ticket.group}</div>
                </div>
              </div>

              <div className="ti-right">
                <label className="ti-label">Tags</label>
                <div className="ti-tags">
                  {ticket.tags.map((tag, i) => (
                    <span className="ti-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketItem;
