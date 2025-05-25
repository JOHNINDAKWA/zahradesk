import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Layout.css';

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`main-content ${collapsed ? 'collapsed' : ''}`}>
        <Topbar setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
