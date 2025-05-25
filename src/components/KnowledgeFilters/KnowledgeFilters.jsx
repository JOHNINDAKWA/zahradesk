import React, { useState } from 'react';
import Select from 'react-select';
import './KnowledgeFilters.css';


const isDark = document.documentElement.classList.contains("dark");

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: isDark ? '#1f2937' : 'var(--color-surface)',
    borderColor: state.isFocused ? 'var(--color-primary)' : 'var(--color-border-light)',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'var(--color-primary-hover)',
    },
    color: isDark ? '#f9fafb' : 'var(--color-text)',
    fontSize: '0.85rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: isDark ? '#f9fafb' : 'var(--color-text)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? (isDark ? '#374151' : 'var(--color-primary)')
      : 'transparent',
    color: isDark ? '#f9fafb' : 'var(--color-text)',
    cursor: 'pointer',
    fontSize: '0.85rem',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: isDark ? '#1f2937' : 'var(--color-surface)',
    border: `1px solid ${isDark ? '#374151' : 'var(--color-border-light)'}`,
    zIndex: 20,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: isDark ? '#9ca3af' : '#6b7280',
  }),
  input: (provided) => ({
    ...provided,
    color: isDark ? '#f9fafb' : 'inherit',
  }),
};

const categoryOptions = [
  { value: 'Security', label: 'Security' },
  { value: 'Support', label: 'Support' },
  { value: 'Network', label: 'Network' },
  { value: 'Communication', label: 'Communication' },
  { value: 'Getting Started', label: 'Getting Started' },
  { value: 'Administration', label: 'Administration' },
];

const systems = ['User Portal', 'Helpdesk', 'Email Services', 'ZahraDesk', 'Admin Console'];

const tagOptions = [
  { value: 'setup', label: 'setup' },
  { value: 'errors', label: 'errors' },
  { value: 'access', label: 'access' },
  { value: 'permissions', label: 'permissions' },
  { value: 'login', label: 'login' },
  { value: 'configuration', label: 'configuration' },
];

const KnowledgeFilters = ({ onApplyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkedSystems, setCheckedSystems] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCheckboxChange = (system) => {
    setCheckedSystems((prev) =>
      prev.includes(system) ? prev.filter((s) => s !== system) : [...prev, system]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      categories: selectedCategories.map((c) => c.value),
      systems: checkedSystems,
      tags: selectedTags.map((t) => t.value),
    });
  };

  return (
    <div className="kb-filters">


              {/* System Filter */}
      <div className="kb-filters__section">
        <h4 className="kb-filters__title">Filter by System</h4>
        <div className="kb-filters__checkboxes">
          {systems.map((system, idx) => (
            <label key={idx} className="kb-filters__checkbox">
              <input
                type="checkbox"
                checked={checkedSystems.includes(system)}
                onChange={() => handleCheckboxChange(system)}
              />
              {system}
            </label>
          ))}
        </div>
      </div>
      {/* Category Filter */}
      <div className="kb-filters__section">
        <h4 className="kb-filters__title">Filter by Category</h4>
        <Select
          isMulti
          options={categoryOptions}
          value={selectedCategories}
          onChange={setSelectedCategories}
          className="kb-filters__select"
          styles={customStyles}
        />
      </div>



      {/* Tag Filter */}
      <div className="kb-filters__section">
        <h4 className="kb-filters__title">Filter by Tag</h4>
        <Select
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={setSelectedTags}
          className="kb-filters__select"
          styles={customStyles}      
        />
      </div>

      {/* Apply Button */}
      <div className="kb-filters__actions">
        <button className="kb-filters__apply-button" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default KnowledgeFilters;
