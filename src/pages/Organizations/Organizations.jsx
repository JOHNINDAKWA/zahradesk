import React, { useState } from "react";
import "./Organizations.css";
import {
  FaUsers,
  FaTicketAlt,
  FaTrash,
  FaPen,
  FaGlobe,
  FaEnvelope,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaCrown,
} from "react-icons/fa";

const Organizations = () => {
  const [organizations, setOrganizations] = useState([
    {
      id: "org_1",
      name: "Acme Ltd",
      slug: "acme",
      logo_url:
        "https://cdn.theorg.com/fbda2622-94f9-4102-bd6f-6a1c91796026_medium.jpg",
      users: 12,
      tickets: 34,
      status: "Active",
      subscription: "Pro",
      country: "USA",
      joinedDate: "2024-02-10",
      admin_email: "admin@acme.com",
    },
    {
      id: "org_2",
      name: "Globex Corp",
      slug: "globex",
      logo_url: "https://macromate-blush.vercel.app/assets/cloves-fxdVByd6.png",
      users: 8,
      tickets: 19,
      status: "Inactive",
      subscription: "Free",
      country: "UK",
      joinedDate: "2023-11-05",
      admin_email: "contact@globex.com",
    },
    {
      id: "org_3",
      name: "MacroMate",
      slug: "macromate",
      logo_url:
        "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094202/tech-trends.png",
      users: 8,
      tickets: 19,
      status: "Active",
      subscription: "Enterprise",
      country: "Kenya",
      joinedDate: "2024-01-20",
      admin_email: "support@macromate.io",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [orgToDelete, setOrgToDelete] = useState(null);

  const [newOrg, setNewOrg] = useState({
    name: "",
    slug: "",
    logo_url: "",
    status: "Active",
    subscription: "Free",
    country: "",
    adminEmail: "",
    joinedDate: "",
  });

  const handleSave = () => {
    if (isEditing) {
      setOrganizations((prev) =>
        prev.map((o) => (o.id === newOrg.id ? { ...o, ...newOrg } : o))
      );
    } else {
      setOrganizations([
        ...organizations,
        {
          ...newOrg,
          id: Date.now().toString(),
          users: 0,
          tickets: 0,
        },
      ]);
    }

    setNewOrg({
      name: "",
      slug: "",
      logo_url: "",
      status: "Active",
      subscription: "Free",
      country: "",
      adminEmail: "",
      joinedDate: "",
    });
    setIsEditing(false);
    setShowModal(false);
  };

  const filteredOrgs = organizations.filter((org) =>
    org.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="org-page">
      <div className="org-toolbar">
        <h2 className="org-toolbar__title">Organizations</h2>
        <div className="org-toolbar__actions">
          <input
            className="org-toolbar__search"
            type="text"
            placeholder="Search organizations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="org-btn org-btn--primary"
            onClick={() => {
              setNewOrg({
                name: "",
                slug: "",
                logo_url: "",
                status: "Active",
                subscription: "Free",
                country: "",
                adminEmail: "",
                joinedDate: "",
              });
              setIsEditing(false);
              setShowModal(true);
            }}
          >
            + Add Organization
          </button>
        </div>
      </div>

      <div className="org-list">
        {filteredOrgs.map((org) => (
          <div
            className={`org-row ${
              org.status === "Inactive" ? "org-row--inactive" : ""
            }`}
            key={org.id}
          >
            <div className="org-row__left">
              <img
                src={org.logo_url}
                alt={org.name}
                className="org-row__logo"
              />
              <div className="org-row__name">
                <h4>{org.name}</h4>
                <span className="org-row__slug">@{org.slug}</span>
              </div>
            </div>

            <div className="org-row__middle">
              <div className="org-pill">
                <FaUsers />
                <span>{org.users} Users</span>
              </div>
              <div className="org-pill">
                <FaTicketAlt />
                <span>{org.tickets} Tickets</span>
              </div>
              <div
                className={`org-pill org-pill--${org.subscription.toLowerCase()}`}
              >
                <FaCrown />
                <span>{org.subscription}</span>
              </div>
              <div className="org-pill org-pill--email">
                <FaEnvelope />
                <span>{org.admin_email}</span>
              </div>
              <div className="org-pill">
                <FaGlobe />
                <span>{org.country}</span>
              </div>
              <div className="org-pill">
                <FaRegCalendarAlt />
                <span>{org.joinedDate}</span>
              </div>
            </div>

            <div className="org-row__right">
              <div className="org-row__status">
                {org.status === "Active" ? (
                  <span className="badge badge--green">
                    <FaCheckCircle /> Active
                  </span>
                ) : (
                  <span className="badge badge--red">
                    <FaTimesCircle /> Inactive
                  </span>
                )}
              </div>
              <div className="org-col__actions">
                <button
                  className="org-btn-icon"
                  onClick={() => {
                    setNewOrg({ ...org });
                    setIsEditing(true);
                    setShowModal(true);
                  }}
                >
                  <FaPen />
                </button>
                <button
                  className="org-btn-icon org-btn-icon--danger"
                  onClick={() => setOrgToDelete(org)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="org-modal__overlay">
          <div className="org-modal">
            <h3 className="org-modal__title">
              {isEditing ? "Edit Organization" : "Create Organization"}
            </h3>

            <div className="org-form__group">
              <label className="org-form__label">Name</label>
              <input
                className="org-form__input"
                value={newOrg.name}
                onChange={(e) =>
                  setNewOrg({
                    ...newOrg,
                    name: e.target.value,
                    slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                  })
                }
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Slug</label>
              <input
                className="org-form__input"
                value={newOrg.slug}
                onChange={(e) => setNewOrg({ ...newOrg, slug: e.target.value })}
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Logo URL</label>
              <input
                className="org-form__input"
                value={newOrg.logo_url}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, logo_url: e.target.value })
                }
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Admin Email</label>
              <input
                className="org-form__input"
                value={newOrg.adminEmail}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, adminEmail: e.target.value })
                }
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Country</label>
              <input
                className="org-form__input"
                value={newOrg.country}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, country: e.target.value })
                }
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Joined Date</label>
              <input
                className="org-form__input"
                type="date"
                value={newOrg.joinedDate}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, joinedDate: e.target.value })
                }
              />
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Status</label>
              <select
                className="org-form__select"
                value={newOrg.status}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="org-form__group">
              <label className="org-form__label">Subscription</label>
              <select
                className="org-form__select"
                value={newOrg.subscription}
                onChange={(e) =>
                  setNewOrg({ ...newOrg, subscription: e.target.value })
                }
              >
                <option value="Free">Free</option>
                <option value="Pro">Pro</option>
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>

            <div className="org-modal__actions">
              <button className="org-btn org-btn--primary" onClick={handleSave}>
                {isEditing ? "Update" : "Create"}
              </button>
              <button
                className="org-btn org-btn--secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {orgToDelete && (
        <div className="org-modal__overlay">
          <div className="org-modal">
            <h3 className="org-modal__title">Confirm Deletion</h3>
            <p>
              Are you sure you want to delete{" "}
              <strong>{orgToDelete.name}</strong>?
            </p>
            <div className="org-modal__actions">
              <button
                className="org-btn org-btn--danger"
                onClick={() => {
                  setOrganizations((prev) =>
                    prev.filter((o) => o.id !== orgToDelete.id)
                  );
                  setOrgToDelete(null);
                }}
              >
                Delete
              </button>
              <button
                className="org-btn org-btn--secondary"
                onClick={() => setOrgToDelete(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organizations;
