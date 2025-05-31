import { useEffect, useRef } from "react";
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
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import { BiSolidBoltCircle } from "react-icons/bi";
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
      { label: "Knowledge Base", icon: <FiLayers />, route: "/knowledge-base" },
    ],
  },
  {
    title: "Reports & Admin",
    items: [
      { label: "SLA Monitor", icon: <FiClock />, route: "/sla-monitor" },
      {
        label: "Workflow Assigment",
        icon: <FiClock />,
        route: "/request-type-config",
      },
      { label: "Reports", icon: <FiBarChart2 />, route: "/reports" },
      { label: "Manage Users", icon: <FiUserCheck />, route: "/users" },
    ],
  },
];

const Sidebar = ({ collapsed }) => {
  const location = useLocation();
  const sidebarRef = useRef();

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.querySelector(".sidebar");
      if (window.innerWidth <= 768 && sidebar.classList.contains("show")) {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
          sidebar.classList.remove("show");
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("show");
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className={`sidebar ${collapsed ? "collapsed" : ""}`}
      >
        <div className="sidebar-top">
          <div className="sidebar-header">
            <BiSolidBoltCircle className="logo-icon" />
            {!collapsed && <span className="logo-text">QuickDesk</span>}
            {/* Mobile Close Icon */}
            <span className="sidebar-close-icon" onClick={closeSidebar}>
              <FiX />
            </span>
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
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Link to="/profile" className="sidebar-footer" onClick={closeSidebar}>
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

      {/* Mobile Backdrop */}
      <div className="sidebar-backdrop" onClick={closeSidebar}></div>
    </>
  );
};

export default Sidebar;
