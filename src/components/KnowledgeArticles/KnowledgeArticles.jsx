import React, { useState } from 'react';
import './KnowledgeArticles.css';
import { FiFileText } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const KnowledgeArticles = ({ articles }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); 

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.description.toLowerCase().includes(search.toLowerCase()) ||
    article.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="kb-articles">
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="kb-articles__search"
      />

      {filteredArticles.length === 0 ? (
        <p>No articles match your search.</p>
      ) : (
        filteredArticles.map((article) => (
          <div
            key={article.id}
            className="kb-article__card"
            onClick={() => navigate(`/article/${article.id}`, { state: { article } })}
          >
            <div className="kb-article__icon">
              <FiFileText />
            </div>
            <div className="kb-article__content">
              <h4 className="kb-article__title">{article.title}</h4>
              <div className="kb-article__meta">
                <span className="kb-article__badge">{article.category}</span>
                <span className="kb-article__badge light">{article.system}</span>
              </div>
              <div className="kb-article__body">
                <p className="kb-article__description">{article.description}</p>
                <div className="kb-article__tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="kb-article__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="kb-article__footer">
                <span className="kb-article__author">Written by {article.author}</span>
                <span className="kb-article__date">
                  {article.updatedAt} • {article.readTime}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default KnowledgeArticles;
