import React from 'react';
import { LineChart, Line } from 'recharts';

const MiniSparkline = ({ data, color }) => {
  return (
    <LineChart width={100} height={30} data={data}>
      <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
    </LineChart>
  );
};

export default MiniSparkline;
