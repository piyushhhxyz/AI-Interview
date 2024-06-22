import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, Video, Star, ChevronLeft, ChevronRight, User, Settings, HelpCircle } from 'lucide-react';

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
    <aside className={`bg-gray-800 text-white transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'} min-h-screen flex flex-col`}>
      <div className="p-4 flex justify-between items-center">
        {isExpanded && (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            WellHire.ai
          </h1>
        )}
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-700">
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-4 hover:bg-gray-700 transition-colors ${
              location.pathname === item.path
                ? 'bg-purple-600 rounded-l-full mr-4'
                : ''
            }`}
          >
            {item.icon}
            {isExpanded && <span className="ml-4">{item.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <button
          onClick={toggleProfile}
          className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <User size={20} />
          {isExpanded && <span className="ml-4">Profile</span>}
        </button>
        {isExpanded && profileOpen && (
          <div className="mt-2 p-2 bg-gray-700 rounded-lg">
            <p>John Doe</p>
            <p className="text-sm text-gray-400">john@example.com</p>
          </div>
        )}
        {isExpanded && (
          <>
            <Link to="/settings" className="flex items-center mt-4 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Settings size={20} />
              <span className="ml-4">Settings</span>
            </Link>
            <Link to="/help" className="flex items-center mt-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <HelpCircle size={20} />
              <span className="ml-4">Help & Support</span>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;