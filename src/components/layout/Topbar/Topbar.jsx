import React, { useState, useRef, useEffect } from 'react';
import {
  FiBell, FiChevronDown, FiUser, FiLogOut,
  FiHelpCircle, FiSettings, FiSun, FiMoon, FiMenu
} from 'react-icons/fi';
import './Topbar.css';
import { Link } from 'react-router-dom';

const Topbar = ({ collapsed, setCollapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Load saved theme preference from localStorage on first render
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Apply and persist theme change
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <FiMenu className="menu-icon" onClick={() => setCollapsed(!collapsed)} />
        <Link to='/dashboard' className="nav-link">Overview</Link>
        <Link className="nav-link">Apps</Link>
        <Link to='/knowledge-base' className="nav-link">Knowledge</Link>
      </div>

      <div className="topbar-right">

        <div className="topbar-search-container">
          <input
            type="text"
            placeholder="Search..."
            className="topbar-search-input"
          />
        </div>
        
        <Link to='/new-ticket' className="create-ticket-btn">+ Create Ticket</Link>

        <Link to="/notifications" className="icon-wrapper">
          <FiBell className="topbar-icon" />
          <span className="notification-badge">3</span>
        </Link>

        
        <Link to='/profile'><FiSettings className="topbar-icon" /></Link>

        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src="https://i.imgur.com/0y0y0y0.png" alt="User" className="profile-avatar" />
            <span className="profile-name">John Indakwa</span>
            <FiChevronDown />
          </div>

          {dropdownOpen && (
            <div className="dropdown-menu2 theme-dropdown2">
              <div className="dropdown-item2 toggle-theme2" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FiSun /> : <FiMoon />}
                <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
              </div>
              <Link to='/profile' className="dropdown-item2"><FiSettings /> Profile Settings</Link>
              <div className="dropdown-item2"><FiUser /> Customer Portal</div>
              <div className="dropdown-item2"><FiHelpCircle /> Help</div>
              <Link to='/login' className="dropdown-item2"><FiLogOut /> Sign Out</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
