import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, Video, Star, ChevronLeft, ChevronRight, User, Settings, HelpCircle, LogOut } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const navItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Users size={20} />, label: 'Candidates', path: '/candidates' },
    { icon: <FileText size={20} />, label: 'Resumes', path: '/resumes' },
    { icon: <Video size={20} />, label: 'AI Interview', path: '/ai-interview' },
    { icon: <Star size={20} />, label: 'Evaluations', path: '/evaluations' },
  ];

  return (
    <aside className={`bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'} min-h-screen flex flex-col shadow-lg`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {isExpanded && (
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            WellHire.ai
          </h1>
        )}
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      <nav className="flex-1 py-6 px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 mb-3 rounded-lg transition-all ${
              location.pathname === item.path
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                : 'hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="inline-block w-8">{item.icon}</span>
            {isExpanded && <span className="ml-3 font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={toggleProfile}
          className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <User size={20} />
          {isExpanded && <span className="ml-3 font-medium">Profile</span>}
        </button>
        {isExpanded && profileOpen && (
          <div className="mt-2 p-3 bg-gray-700 rounded-lg shadow-inner">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-300">john@example.com</p>
          </div>
        )}
        {isExpanded && (
          <>
            <Link to="/settings" className="flex items-center mt-4 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Settings size={20} />
              <span className="ml-3 font-medium">Settings</span>
            </Link>
            <Link to="/help" className="flex items-center mt-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <HelpCircle size={20} />
              <span className="ml-3 font-medium">Help & Support</span>
            </Link>
            <button className="flex items-center mt-4 p-2 w-full rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white">
              <LogOut size={20} />
              <span className="ml-3 font-medium">Logout</span>
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;