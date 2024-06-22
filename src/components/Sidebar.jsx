import React from 'react';
import { Home, Briefcase, Users, PieChart, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
      <div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Home size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Briefcase size={20} />
            <span>Job Postings</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Users size={20} />
            <span>Candidates</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <PieChart size={20} />
            <span>Reports</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
      </div>
      <div>
        <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;