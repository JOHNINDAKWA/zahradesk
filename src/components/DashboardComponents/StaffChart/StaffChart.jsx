import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { FiUser, FiHeadphones } from "react-icons/fi";
import "./StaffChart.css";

const staffData = [
  { name: "Total", count: 106, fill: "white" },
  { name: "Core Staff", count: 66, fill: "#C3EBFA" },
  { name: "Support Team", count: 40, fill: "#FAE27C" },
];

const priorityData = [
  { level: 1, label: "CRITICAL", value: 82, color: "#ef4444" },
  { level: 2, label: "HIGH", value: 36, color: "#f59e0b" },
  { level: 3, label: "MEDIUM", value: 64, color: "#fbbf24" },
  { level: 4, label: "LOW", value: 18, color: "#3b82f6" },
  { level: 5, label: "TRIVIAL", value: 52, color: "#10b981" },
];

const StaffChart = () => {
  return (
    <div className="staff-chart-container">
      {/* LEFT: Staff distribution */}
      <div className="mini-chart">
        <h4 className="mini-chart-title">Core vs Support Team</h4>
        <div className="chart-inner">
          <ResponsiveContainer width="100%" height={160}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={18}
              data={staffData}
            >
              <RadialBar dataKey="count" background />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="chart-center-icons">
            <div className="icon-label">
              <FiUser className="staff-icon core" />
            </div>
            <div className="icon-label">
              <FiHeadphones className="staff-icon support" />
            </div>
          </div>
        </div>

        <div className="mini-chart-legend">
          <div className="legend-item">
            <span className="dot dot-core" />
            <div>
              <div className="legend-label">Core Staff</div>
              <div className="legend-value">66</div>
            </div>
          </div>
          <div className="legend-item">
            <span className="dot dot-support" />
            <div>
              <div className="legend-label">Support Team</div>
              <div className="legend-value">40</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Tickets by Priority */}
      <div className="mini-chart">
        <h4 className="mini-chart-title">Tickets by Priority</h4>
        <div className="priority-bar">
          {priorityData.map((item) => (
            <div className="priority-item" key={item.level}>
              <div
                className="priority-icon"
                style={{ borderColor: item.color, color: item.color }}
              >
                <span>{item.level}</span>
              </div>
              <span className="priority-label">{item.label}</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
              <span className="priority-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffChart;
