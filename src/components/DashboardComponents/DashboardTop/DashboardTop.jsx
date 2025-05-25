import React from 'react';
import CircularProgress from './CircularProgress';
import MiniSparkline from './MiniSparkline';
import './DashboardTop.css';

const randomData = () =>
  Array.from({ length: 20 }, () => ({ value: Math.floor(Math.random() * 100) }));

const allTickets = [
  {
    title: 'Open Tickets',
    value: 213,
    color: '#4CAF50',
    progress: 78,
  },
  {
    title: 'Need Answers',
    value: 176,
    color: '#F44336',
    progress: 60,
  },
  {
    title: 'Waiting for Reply',
    value: 16,
    color: '#2196F3',
    progress: 25,
  },
];

const myTickets = [
  {
    title: 'Assigned to Me',
    value: 9,
    color: '#FF9800',
    progress: 90,
    type: 'highlight',
  },
  {
    title: 'Resolved Tickets',
    value: 328,
    color: '#9C27B0',
    progress: 95,
    type: 'highlight',
  },
];

const DashboardTop = () => {
 return (
  <div className="ticket-sections-row">
    {/* All Tickets Overview */}
    <section className="ticket-overview-section">
      <h3 className="section-title">All Tickets Overview</h3>
      <div className="dashboard-top">
        {allTickets.map((card, index) => (
          <div className="top-card" key={index}>
            <div className="card-title">{card.title}</div>
            <div className="card-content">
              <div>
                <div className="card-value">{card.value}</div>
                <MiniSparkline data={randomData()} color={card.color} />
              </div>
              <CircularProgress value={card.progress} color={card.color} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* My Tickets */}
    <section className="ticket-overview-section right">
      <h3 className="section-title">My Tickets</h3>
      <div className="dashboard-top">
        {myTickets.map((card, index) => (
          <div className="top-card highlight" key={index}>
            <div className="card-title">{card.title}</div>
            <div className="card-content">
              <div>
                <div className="card-value">{card.value}</div>
                <MiniSparkline data={randomData()} color={card.color} />
              </div>
              <CircularProgress value={card.progress} color={card.color} />
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

};

export default DashboardTop;
