import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Search } from 'lucide-react';

const Candidates = () => {
  const [darkMode, setDarkMode] = useState(true);

  const candidateProfiles = [
    {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      currentPosition: 'Senior Software Engineer',
      experience: '8 years',
      education: 'M.S. Computer Science, Stanford University',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'AWS'],
      achievements: [
        'Led a team of 5 developers to launch a successful fintech app',
        'Increased system performance by 40% through optimizations',
        'Published 2 research papers on AI in reputable journals'
      ]
    },
    // ... add more candidate profiles
  ];

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Candidates</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search candidates..."
            className={`w-full p-3 pl-10 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Candidate List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidateProfiles.map((candidate) => (
          <div key={candidate.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
              <h2 className="text-xl font-bold text-white">{candidate.name}</h2>
              <p className="text-sm text-white opacity-75">{candidate.currentPosition}</p>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <Mail className="mr-2" size={16} />
                <span className="text-sm">{candidate.email}</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2" size={16} />
                <span className="text-sm">{candidate.phone}</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" size={16} />
                <span className="text-sm">{candidate.location}</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap">
                  {candidate.skills.map((skill, index) => (
                    <span key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className={`w-full py-2 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white font-semibold transition duration-300`}>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;