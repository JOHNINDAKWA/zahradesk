import React, { useState } from "react";
import "./TicketConversation.css";
import CustomQuillEditor from "./CustomQuillEditor";

const messages = [
  {
    id: 1,
    sender: "Alberta Jefferson",
    avatar: "https://i.pravatar.cc/40?img=1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timestamp: "07 May 2025",
    isUser: false,
  },
  {
    id: 2,
    sender: "Gene Sutter",
    avatar: "https://i.pravatar.cc/40?img=2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timestamp: "07 May 2025",
    isUser: true,
  },
  {
    id: 3,
    sender: "Alberta Jefferson",
    avatar: "https://i.pravatar.cc/40?img=1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timestamp: "07 May 2025",
    isUser: false,
  },
];

const TicketConversation = ({ ticket }) => {
  const [editorContent, setEditorContent] = useState("");

  const handleSend = () => {
    if (editorContent && editorContent !== "<p><br></p>") {
      alert("Reply submitted:\n\n" + editorContent);
      setEditorContent(""); // clear
    }
  };

  return (
    <div className="ticket-conversation">
      <div className="conversation-header">
        <h3>{ticket.subject || "Untitled Ticket"}</h3>
        <p>
          Created by {ticket.name || "Unknown"} • {ticket.createdAt}
        </p>
      </div>

      <div className="conversation-thread">
        {messages.map((msg) => (
          <div key={msg.id} className="message-row">
            <img className="avatar" src={msg.avatar} alt={msg.sender} />
            <div className="message-bubble">
              <div className="message-meta">
                <strong>{msg.sender}</strong>
                <span className="message-time">{msg.timestamp}</span>
              </div>
              <div
                className="message-content"
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="editor-wrapper">
        <CustomQuillEditor value={editorContent} onChange={setEditorContent} />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default TicketConversation;
