import React, { useState } from 'react';
import KnowledgeArticles from '../../components/KnowledgeArticles/KnowledgeArticles';
import KnowledgeFilters from '../../components/KnowledgeFilters/KnowledgeFilters';
import './knowledge-base.css';
import { Link } from 'react-router-dom';
import articles from './data';


const KnowledgeBase = () => {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleApplyFilters = ({ categories, systems, tags }) => {
    const filtered = articles.filter((article) => {
      const categoryMatch =
        categories.length === 0 || categories.includes(article.category);
      const systemMatch =
        systems.length === 0 || systems.includes(article.system);
      const tagMatch =
        tags.length === 0 ||
        tags.some((tag) =>
          article.tags.map((t) => t.toLowerCase()).includes(`#${tag.toLowerCase()}`)
        );

      return categoryMatch && systemMatch && tagMatch;
    });

    setFilteredArticles(filtered);
  };

  return (
    <div className="kb-page">
      <div className="kb-header">
        <h2>Knowledge is Power</h2>
        <Link to='/new-article' className="btn-pri">+ Create Article</Link>
      </div>
      <div className="kb-grid">
        <KnowledgeArticles articles={filteredArticles} />
        <KnowledgeFilters onApplyFilters={handleApplyFilters} />
      </div>
    </div>
  );
};

export default KnowledgeBase;