import React from "react";
import "./SlaSummaryCards.css";
import CircularProgress from "../../DashboardComponents/DashboardTop/CircularProgress";
import MiniSparkline from "../../DashboardComponents/DashboardTop/MiniSparkline";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const slaCards = [
  {
    title: "SLA On-Time Rate",
    value: 176,
    percent: 84,
    sparkline: [
      { value: 3 },
      { value: 5 },
      { value: 4 },
      { value: 6 },
      { value: 7 },
    ],
    color: "#4CAF50",
  },
  {
    title: "Breached Tickets",
    value: 24,
    percent: 16,
    sparkline: [
      { value: 4 },
      { value: 6 },
      { value: 5 },
      { value: 7 },
      { value: 8 },
    ],
    color: "#F44336",
  },
  {
    title: "Total Tickets",
    value: 200,
    percent: 100,
    sparkline: [
      { value: 1 },
      { value: 2 },
      { value: 1 },
      { value: 3 },
      { value: 2 },
    ],
    color: "#2196F3",
  },
];

const pieData = [
  { name: "On-Time", value: 146, color: "#4CAF50" },
  { name: "At Risk", value: 30, color: "#f59e0b" },
  { name: "Breached", value: 24, color: "#F44336" },
];

const SlaSummaryCards = () => {
  return (
  <section className="sla-summary-section">
  <div className="sla-summary-grid">
    {slaCards.map((card, index) => (
      <div className="sla-summary-card" key={index}>
        <div className="sla-card-left">
          <div className="sla-card-title">{card.title}</div>
          <div className="sla-card-value">{card.value}</div>
          <MiniSparkline data={card.sparkline} color={card.color} />
        </div>
        <div className="sla-card-right">
          <CircularProgress value={card.percent} color={card.color} />
        </div>
      </div>
    ))}

    {/* Move this into the grid */}
    <div className="sla-summary-card sla-chart-card">
      <div className="sla-card-title">SLA Chart</div>
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={20}
            outerRadius={35}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="sla-legend">
        {pieData.map((entry, i) => (
          <div key={i} className="sla-legend-item">
            <span
              className="sla-legend-dot"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default SlaSummaryCards;
