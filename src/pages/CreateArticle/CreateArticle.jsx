import React, { useState } from "react";
import Select from "react-select";
import "../CreateTicket/CreateTicket.css";
import CustomQuillEditor from "../../components/TicketConversation/CustomQuillEditor";
import { FiUploadCloud } from "react-icons/fi";

const categoryOptions = [
  { value: "Support", label: "Support" },
  { value: "Guide", label: "Guide" },
  { value: "Policy", label: "Policy" },
];

const systemOptions = [
  { value: "Helpdesk", label: "Helpdesk" },
  { value: "HRIS", label: "HRIS" },
  { value: "CRM", label: "CRM" },
];

const authorOptions = [
  { value: "John Mutai", label: "John Mutai" },
  { value: "Jane Wambui", label: "Jane Wambui" },
  { value: "Ali Yusuf", label: "Ali Yusuf" },
];

const tagOptions = [
  { value: "#support", label: "#support" },
  { value: "#tickets", label: "#tickets" },
  { value: "#escalation", label: "#escalation" },
];

const CreateArticle = () => {
  const [title, setTitle] = useState(
    "Understanding how ticket escalation works in our system"
  );
  const [category, setCategory] = useState([
    { value: "Support", label: "Support" },
  ]);
  const [system, setSystem] = useState([
    { value: "Helpdesk", label: "Helpdesk" },
  ]);
  const [updatedAt, ] = useState(new Date().toLocaleDateString());
  const [author, setAuthor] = useState([
    { value: "John Mutai", label: "John Mutai" },
  ]);
  const [description, setDescription] = useState(
    "An overview of the ticket escalation process, including SLAs and escalation levels."
  );
  const [tags, setTags] = useState([
    { value: "#support", label: "#support" },
    { value: "#tickets", label: "#tickets" },
    { value: "#escalation", label: "#escalation" },
  ]);
  const [readTime, setReadTime] = useState("3 min read");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      category: category.map((c) => c.value),
      system: system.map((s) => s.value),
      updatedAt,
      author: author.map((a) => a.value),
      description,
      tags: tags.map((t) => t.value),
      readTime,
      content,
      attachment,
    });
  };

  return (
    <div className="ticket-form-container">
      <h2 className="form-title">Create Knowledge Base Article</h2>
      <p className="form-subtext">
        Publish a new support article to the help center.
      </p>

      <form onSubmit={handleSubmit} className="ticket-form">
        <label>
          <span>
            Title <strong className="red-asterisk">*</strong>
          </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the article title"
            required
          />
        </label>

        <div className="form-row">
          <label>
            <span>Category</span>
            <Select
              isMulti
              options={categoryOptions}
              value={category}
              onChange={setCategory}
              placeholder="Select categories"
            />
          </label>

          <label>
            <span>System</span>
            <Select
              isMulti
              options={systemOptions}
              value={system}
              onChange={setSystem}
              placeholder="Select systems"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>Author</span>
            <Select
              isMulti
              options={authorOptions}
              value={author}
              onChange={setAuthor}
              placeholder="Select author(s)"
            />
          </label>

          <label>
            <span>Last Updated</span>
            <input type="text" value={updatedAt} readOnly />
          </label>
        </div>

        <label>
          <span>Short Description</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="One sentence summary"
          />
        </label>

        <div className="form-row">
          <label>
            <span>Tags</span>
            <Select
              isMulti
              options={tagOptions}
              value={tags}
              onChange={setTags}
              placeholder="e.g. #support, #tickets"
            />
          </label>

          <label>
            <span>Read Time</span>
            <input
              type="text"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="e.g. 3 min read"
            />
          </label>
        </div>

        <label>
          <span>
            Content <strong className="red-asterisk">*</strong>
          </span>
          <div style={{ height: "400px" }}>
            <CustomQuillEditor value={content} onChange={setContent} />
          </div>
        </label>

        <label className="file-upload-label">
          <span>Attach article thumbnail or doc</span>
          <div className="file-upload-box">
            <FiUploadCloud size={18} style={{ marginRight: 6 }} />
            <span>
              {attachment
                ? attachment.name
                : "Drag and drop a file or click to browse"}
            </span>
            <input
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
              className="file-input-hidden"
            />
          </div>
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Publish
          </button>
          <button type="reset" className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
