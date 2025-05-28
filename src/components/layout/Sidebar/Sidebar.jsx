import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiLifeBuoy,
  FiHome,
  FiBookOpen,
  FiFolder,
  FiUserCheck,
  FiActivity,
  FiUsers,
  FiLayers,
  FiSettings,
  FiBarChart2,
  FiAlertCircle,
  FiClock,
  FiCheckSquare,
  FiTrendingUp
} from "react-icons/fi";
import "./Sidebar.css";

const navSections = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", icon: <FiHome />, route: "/dashboard" },
      { label: "Notifications", icon: <FiActivity />, route: "/notifications" },
    ],
  },
  {
    title: "Tickets",
    items: [
      { label: "My Tickets", icon: <FiBookOpen />, route: "/my-tickets" },
      { label: "All Tickets", icon: <FiUsers />, route: "/all-tickets" },
      { label: "Open Tickets", icon: <FiFolder />, route: "/open-tickets" },
      {
        label: "Replied Tickets",
        icon: <FiActivity />,
        route: "/replied-tickets",
      },
      {
        label: "Overdue Tickets",
        icon: <FiAlertCircle />,
        route: "/overdue-tickets",
      },
      {
        label: "Closed Tickets",
        icon: <FiCheckSquare />,
        route: "/closed-tickets",
      },
      { label: "Escalations", icon: <FiTrendingUp />, route: "/escalations" },

    ],
  },
  {
    title: "Knowledge",
    items: [
      { label: "Knowledge Base", icon: <FiLayers />, route: "/knowledge-base" }
    ],
  },
  {
    title: "Reports & Admin",
    items: [
      { label: "SLA Monitor", icon: <FiClock />, route: "/sla-monitor" },
      { label: "Workflow Builder", icon: <FiClock />, route: "/workflow-admin" },
      { label: "Reports", icon: <FiBarChart2 />, route: "/reports" },
      { label: "Manage Users", icon: <FiUserCheck />, route: "/users" },
    ],
  },
];

const Sidebar = ({ collapsed }) => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-header">
          <FiLifeBuoy className="logo-icon" />
          {!collapsed && <span className="logo-text">QuickDesk</span>}

        </div>

        <div className="sidebar-nav">
          {navSections.map((section, index) => (
            <div className="nav-section" key={index}>
              {!collapsed && (
                <div className="side-section-title">{section.title}</div>
              )}
              {section.items.map((item, idx) => (
                <Link
                  to={item.route}
                  key={idx}
                  className={`menu-item ${
                    location.pathname === item.route ? "active" : ""
                  }`}
                >
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Link to='/profile' className="sidebar-footer">
        <img
          src="https://i.imgur.com/0y0y0y0.png"
          alt="User"
          className="user-avatar"
        />
        {!collapsed && (
          <div className="user-info">
            <span className="user-name">John Indakwa</span>
            <span className="user-role">Account Settings</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Sidebar;
