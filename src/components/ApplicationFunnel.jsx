import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Applied', value: 400 },
  { name: 'Initial Test', value: 300 },
  { name: 'AI Interview', value: 200 },
  { name: 'Final Review', value: 100 },
];

const ApplicationFunnel = () => {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Application Funnel</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis type="number" stroke="#fff" />
          <YAxis dataKey="name" type="category" stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationFunnel;