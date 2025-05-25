import React, { useEffect, useState } from "react";
import "./Profile.css";
import { FiEdit, FiTrash2, FiDownload } from "react-icons/fi";
import {
  FiUser,
  FiSliders,
  FiSettings,
  FiBell,
  FiUsers,
  FiShield,
  FiFileText,
  FiActivity,
  FiTool,
} from "react-icons/fi";

import { MdLockReset } from "react-icons/md";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="profile-page">
      <aside className="profile-page__sidebar">
        <nav>
          <ul className="profile-page__menu">
            <li className="profile-page__section-label">GENERAL</li>
            <li>
              <a href="#profile">
                <FiUser /> My Profile
              </a>
            </li>
            <li>
              <a href="#preferences">
                <FiSliders /> Preferences
              </a>
            </li>
            <li>
              <a href="#ticket-settings">
                <FiSettings /> Ticket Settings
              </a>
            </li>
            <li>
              <a href="#notifications">
                <FiBell /> Notification Settings
              </a>
            </li>

            <li className="profile-page__section-label">Admin & Security</li>

            <li>
              <a href="#user-management">
                <FiUsers /> User Management
              </a>
            </li>
            <li>
              <a href="#roles-permissions">
                <FiShield /> Roles & Permissions
              </a>
            </li>
            <li>
              <a href="#audit-logs">
                <FiActivity /> Audit Logs
              </a>
            </li>
            <li>
              <a href="#system-settings">
                <FiTool /> System Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="profile-page__main">
        <section id="profile" className="profile-page__card">
          <h3>Account details</h3>
          <p className="profile-page__section-note">
            Your organizational account details, activity status
          </p>

          <div className="profile-page__account-header">
            <div className="profile-page__avatar-block">
              <div className="profile-page__avatar">JI</div>
              <div>
                <div className="profile-page__name-status">
                  <span className="profile-page__org-name">John Indakwa</span>
                  <span className="profile-page__badge">Active</span>
                </div>
                <p className="profile-page__meta">johnindakwa@gmail.com</p>
                <p className="profile-page__meta">+25470 7323 4667</p>
              </div>
            </div>
            <div className="profile-page__account-actions">
              <button className="profile-page__btn edit">
                <FiEdit /> Edit
              </button>
              <button className="profile-page__btn danger">
                <MdLockReset />Change Password
              </button>
            </div>
          </div>

          <div className="profile-page__account-meta">
            <div>
              <p className="profile-page__label">Account active since</p>
              <p className="profile-page__value">01 May 2025 (4 months)</p>
            </div>
            <div>
              <p className="profile-page__label">Export account data</p>
              <a href="#" className="profile-page__export-link">
                <FiDownload /> Export data
              </a>
            </div>
          </div>
        </section>

        <section id="preferences" className="profile-page__card">
          <h3>Account preference</h3>
          <p className="profile-page__section-note">
            Language, region and interface settings
          </p>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Language</p>
              <p className="profile-page__meta">Your organizational language</p>
            </div>
            <select>
              <option>English</option>
            </select>
          </div>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Country</p>
              <p className="profile-page__meta">Country preference</p>
            </div>
            <select>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
              <option>Rwanda</option>
            </select>
          </div>
          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Theme</p>
              <p className="profile-page__meta">Select your Preferred Theme</p>
            </div>
            <select
              value={darkMode ? "dark" : "light"}
              onChange={(e) => {
                const newTheme = e.target.value;
                setDarkMode(newTheme === "dark");
                localStorage.setItem("theme", newTheme);
                document.documentElement.classList.toggle(
                  "dark",
                  newTheme === "dark"
                );
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </section>

        {/* Ticket Settings */}
        <section id="ticket-settings" className="profile-page__card">
          <h3>Ticket Settings</h3>
          <p className="profile-page__section-note">
            Customize how tickets are handled, assigned, and escalated
          </p>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Auto-assign tickets</p>
              <p className="profile-page__meta">
                Automatically assign new tickets to available agents
              </p>
            </div>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Default priority</p>
              <p className="profile-page__meta">
                Priority to assign to new tickets by default
              </p>
            </div>
            <select>
              <option>Medium</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
        </section>

        {/* Notification Settings */}
        <section id="notifications" className="profile-page__card">
          <h3>Notification Settings</h3>
          <p className="profile-page__section-note">
            Control how you receive updates about tickets and activity
          </p>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Email notifications</p>
              <p className="profile-page__meta">
                Get notified via email for ticket updates
              </p>
            </div>
            <select>
              <option>All updates</option>
              <option>Only important</option>
              <option>None</option>
            </select>
          </div>

          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">In-app alerts</p>
              <p className="profile-page__meta">
                Show popup alerts in the interface
              </p>
            </div>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </section>

        <section id="user-management" className="profile-page__card">
          <h3>User Management</h3>
          <p className="profile-page__section-note">
            Manage system users and their access
          </p>
          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Total Users</p>
              <p className="profile-page__value">28 Active Users</p>
            </div>
            <button className="profile-page__btn edit">Add User</button>
          </div>
        </section>

        <section id="roles-permissions" className="profile-page__card">
          <h3>Roles & Permissions</h3>
          <p className="profile-page__section-note">
            Define access levels for different roles
          </p>
          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Defined Roles</p>
              <p className="profile-page__value">5 Roles</p>
            </div>
            <button className="profile-page__btn edit">Manage Roles</button>
          </div>
        </section>

        <section id="audit-logs" className="profile-page__card">
          <h3>Audit Logs</h3>
          <p className="profile-page__section-note">
            System activity and historical changes
          </p>
          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Recent Activity</p>
              <p className="profile-page__meta">Last change: 2 days ago</p>
            </div>
            <a href="#" className="profile-page__export-link">
              <FiDownload /> Download Logs
            </a>
          </div>
        </section>

        <section id="system-settings" className="profile-page__card">
          <h3>System Settings</h3>
          <p className="profile-page__section-note">
            General application configuration
          </p>
          <div className="profile-page__pref-item">
            <div>
              <p className="profile-page__label">Default Ticket Expiry</p>
              <p className="profile-page__meta">7 Days</p>
            </div>
            <select>
              <option>3 Days</option>
              <option>7 Days</option>
              <option>14 Days</option>
            </select>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
