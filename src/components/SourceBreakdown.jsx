import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'LinkedIn', value: 400 },
  { name: 'Company Website', value: 300 },
  { name: 'Referrals', value: 200 },
  { name: 'Job Boards', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SourceBreakdown = () => {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Source Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SourceBreakdown;