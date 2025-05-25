import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import './TicketChart.css';

const sampleData = {
  thisWeek: [
    { day: 'Mon', Bugs: 10, Resolved: 5 },
    { day: 'Tue', Bugs: 30, Resolved: 15 },
    { day: 'Wed', Bugs: 20, Resolved: 25 },
    { day: 'Thu', Bugs: 27, Resolved: 22 },
    { day: 'Fri', Bugs: 40, Resolved: 32 },
    { day: 'Sat', Bugs: 35, Resolved: 38 },
    { day: 'Sun', Bugs: 50, Resolved: 45 },
  ],
  lastWeek: [
    { day: 'Mon', Bugs: 12, Resolved: 6 },
    { day: 'Tue', Bugs: 18, Resolved: 12 },
    { day: 'Wed', Bugs: 15, Resolved: 10 },
    { day: 'Thu', Bugs: 30, Resolved: 18 },
    { day: 'Fri', Bugs: 38, Resolved: 22 },
    { day: 'Sat', Bugs: 29, Resolved: 34 },
    { day: 'Sun', Bugs: 33, Resolved: 28 },
  ],
};


const TicketChart = () => {
  const [selectedRange, setSelectedRange] = useState('thisWeek');
  const data = sampleData[selectedRange];


  const [rangeOpen, setRangeOpen] = useState(false);
const rangeOptions = ['This Week', 'Last Week'];


  return (
    <div className="ticket-chart-card">
<div className="ticket-chart-header">
  <h3 className="section-title">My Tickets History</h3>
  <div className="custom-dropdown" onClick={() => setRangeOpen(!rangeOpen)}>
    <span>{selectedRange === 'thisWeek' ? 'This Week' : 'Last Week'}</span>
    <div className={`dropdown-menu ${rangeOpen ? 'show' : ''}`}>
      {rangeOptions.map((label, idx) => {
        const key = idx === 0 ? 'thisWeek' : 'lastWeek';
        return (
          <div
            key={key}
            className={`dropdown-item ${selectedRange === key ? 'active' : ''}`}
            onClick={() => {
              setSelectedRange(key);
              setRangeOpen(false);
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  </div>
</div>


      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            tick={{ textAnchor: 'middle' }}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
<Line type="monotone" dataKey="Bugs" stroke="#f44336" strokeWidth={2} />
<Line type="monotone" dataKey="Resolved" stroke="#4caf50" strokeWidth={2} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketChart;
