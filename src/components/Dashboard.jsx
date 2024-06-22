import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Home, Briefcase, Users, PieChart as PieChartIcon, Settings, Sun, Moon, Clock, TrendingUp } from 'lucide-react';


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const applicationData = [
    { stage: 'Resume Screened', count: 1000 },
    { stage: 'Applied', count: 500 },
    { stage: 'AI Interview Invited', count: 550 },
    { stage: 'AI Interview Completed', count: 750 },
    { stage: 'Human Interview', count: 233 },
    { stage: 'Offer Extended', count: 150 },
    { stage: 'Hired', count: 420 },
  ];

  const sourceData = [
    { name: 'LinkedIn', value: 400, color: '#0088FE' },
    { name: 'Company Website', value: 300, color: '#00C49F' },
    { name: 'Referrals', value: 200, color: '#FFBB28' },
    { name: 'Job Boards', value: 100, color: '#FF8042' },
  ];

  const recentActivities = [
    { id: 1, action: 'New application received', position: 'Software Engineer', time: '5 minutes ago' },
    { id: 2, action: 'AI Interview completed', candidate: 'John Doe', position: 'Product Manager', time: '1 hour ago' },
    { id: 3, action: 'Candidate shortlisted', candidate: 'Jane Smith', position: 'UX Designer', time: '3 hours ago' },
  ];

  const upcomingInterviews = [
    { id: 1, candidate: 'Alice Johnson', position: 'Data Scientist', time: 'Today, 2:00 PM' },
    { id: 2, candidate: 'Bob Williams', position: 'Frontend Developer', time: 'Tomorrow, 10:00 AM' },
    { id: 3, candidate: 'Carol Brown', position: 'Marketing Specialist', time: 'Jun 25, 11:30 AM' },
  ];

  const jobPostingPerformance = [
    { id: 1, position: 'Software Engineer', applicants: 150, interviews: 20, hires: 3 },
    { id: 2, position: 'Product Manager', applicants: 80, interviews: 15, hires: 1 },
    { id: 3, position: 'UX Designer', applicants: 100, interviews: 18, hires: 2 },
  ];

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Main content */}                                        
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Hiring Dashboard</h2>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-900'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        
        {/* AI Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Ask AI anything about your hiring process..."
            className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Applications', value: '1,234', icon: <Users size={20} /> },
            { title: 'Pass Rate', value: '68%', icon: <TrendingUp size={20} /> },
            { title: 'Avg. Time to Hire', value: '14 days', icon: <Clock size={20} /> },
            { title: 'Top Source', value: 'LinkedIn', icon: <Briefcase size={20} /> },
          ].map((stat) => (
            <div key={stat.title} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} flex items-center`}>
              <div className="mr-4 text-purple-500">{stat.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <h3 className="text-xl font-semibold mb-4">TalentFlow™ Pipeline</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={applicationData}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
          <XAxis dataKey="stage" stroke={darkMode ? '#9ca3af' : '#4b5563'} angle={-45} textAnchor="end" height={80} />
          <YAxis stroke={darkMode ? '#9ca3af' : '#4b5563'} />
          <Tooltip
            contentStyle={{ backgroundColor: darkMode ? '#1f2937' : '#ffffff', border: 'none' }}
            labelStyle={{ color: darkMode ? '#ffffff' : '#000000' }}
          />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            <h3 className="text-xl font-semibold mb-4">Source Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activities */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-400">{activity.position}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Interviews */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            <h3 className="text-xl font-semibold mb-4">Upcoming Interviews</h3>
            <ul className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <li key={interview.id} className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-3"></div>
                  <div>
                    <p className="font-medium">{interview.candidate}</p>
                    <p className="text-sm text-gray-400">{interview.position}</p>
                    <p className="text-xs text-gray-500">{interview.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Posting Performance */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            <h3 className="text-xl font-semibold mb-4">Job Posting Performance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-3">Position</th>
                    <th className="pb-3">Applicants</th>
                    <th className="pb-3">Interviews</th>
                    <th className="pb-3">Hires</th>
                  </tr>
                </thead>
                <tbody>
                  {jobPostingPerformance.map((job) => (
                    <tr key={job.id}>
                      <td className="py-2">{job.position}</td>
                      <td className="py-2">{job.applicants}</td>
                      <td className="py-2">{job.interviews}</td>
                      <td className="py-2">{job.hires}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;