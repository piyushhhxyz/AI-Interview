import React from 'react';

const OverviewCard = ({ title, value, bgColor }) => (
  <div className={`${bgColor} p-6 rounded-lg shadow-lg glass-effect hover-scale animate-slide-in`}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <OverviewCard title="Total Applications" value="1,234" bgColor="bg-purple-600 bg-opacity-50" />
      <OverviewCard title="Pass Rate" value="68%" bgColor="bg-pink-600 bg-opacity-50" />
      <OverviewCard title="Avg. Time to Hire" value="14 days" bgColor="bg-blue-600 bg-opacity-50" />
      <OverviewCard title="Top Source" value="LinkedIn" bgColor="bg-green-600 bg-opacity-50" />
    </div>
  );
};

export default Overview;