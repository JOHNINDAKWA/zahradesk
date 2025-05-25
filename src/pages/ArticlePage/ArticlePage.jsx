import { Link, useLocation, useParams } from "react-router-dom";
import articles from "../knowledge-base/data";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const fallback = articles.find((a) => a.id === parseInt(id));
  const article = state?.article || fallback;

  if (!article) return <p>Article not found.</p>;

  return (
    <>
      <div className="article-page-header">
        <div className="article-breadcrumb">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/knowledge-base">Knowledge Base</Link>
          </span>
          <span>/</span>
          <span>View Article</span>
        </div>

        <Link to="/knowledge-base" className="article-back-link">
          ← Back to All Articles
        </Link>
      </div>
      <div className="article-layout">
        {/* Left Side - Article Content */}
        <div className="article-left">
          <div className="article-meta">
            <span>System: {article.system}</span>
            <span>Category: {article.category}</span>
            <span>Updated: {article.updatedAt}</span>
            <span>Author: {article.author}</span>
            <span>Read Time: {article.readTime}</span>
          </div>

          <h1 className="article-title">{article.title}</h1>
          <p className="article-description">{article.description}</p>

          <div className="article-tags">
            {article.tags?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div className="article-content">
            <p>
              Managing access rights is essential for system security and
              efficient team collaboration. By setting proper permissions, you
              reduce the risk of unauthorized actions and maintain clear
              accountability.
            </p>
            <p>
              Whether you're onboarding new team members or adjusting roles,
              it's crucial to understand how your admin console handles user
              privileges. Most platforms offer role-based controls that let you
              fine-tune what each user can view or edit.
            </p>
            <p>
              This guide will walk you through the steps to review, assign, and
              audit user permissions to ensure your system remains secure and
              streamlined.
            </p>

            <p>
              Whether you're onboarding new team members or adjusting roles,
              it's crucial to understand how your admin console handles user
              privileges. Most platforms offer role-based controls that let you
              fine-tune what each user can view or edit.
            </p>
            <p>
              This guide will walk you through the steps to review, assign, and
              audit user permissions to ensure your system remains secure and
              streamlined.
            </p>

            <h3>Steps to Update Access Permissions</h3>
            <ol>
              <li>
                Log in to your Admin Console with administrator credentials.
              </li>
              <li>Navigate to the "Users" or "Team" section.</li>
              <li>Select the user whose permissions you want to modify.</li>
              <li>
                Choose an appropriate role or manually adjust their access
                levels.
              </li>
              <li>Click "Save" and confirm the changes take effect.</li>
              <li>
                Log in to your Admin Console with administrator credentials.
              </li>
              <li>Navigate to the "Users" or "Team" section.</li>
              <li>Select the user whose permissions you want to modify.</li>
              <li>
                Choose an appropriate role or manually adjust their access
                levels.
              </li>
              <li>Click "Save" and confirm the changes take effect.</li>
            </ol>
          </div>
        </div>

        {/* Right Side - Categories and Related Articles */}
        <div className="article-right">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="#">Networking</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
              <li>
                <a href="#">Performance Tips</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
              <li>
                <a href="#">Performance Tips</a>
              </li>
              <li>
                <a href="#">Connectivity</a>
              </li>
              <li>
                <a href="#">Connectivity</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Related Articles</h3>
            <ul>
              <li>
                <a href="#">10 Tips to Boost Your Wi-Fi Signal</a>
              </li>
              <li>
                <a href="#">Understanding Bandwidth</a>
              </li>
              <li>
                <a href="#">Common Router Mistakes to Avoid</a>
              </li>
              <li>
                <a href="#">Understanding Bandwidth</a>
              </li>
              <li>
                <a href="#">Common Router Mistakes to Avoid</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
