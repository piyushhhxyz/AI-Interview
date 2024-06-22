import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const candidateProfiles = [
    {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      currentPosition: 'Senior Software Engineer',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'AWS'],
    },
    // Add 9 more sample candidates here
  ];

  const filteredCandidates = candidateProfiles.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Candidates</h1>
        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full p-3 mb-8 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-purple-600 p-4">
                <h2 className="text-xl font-bold">{candidate.name}</h2>
                <p className="text-sm opacity-75">{candidate.currentPosition}</p>
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
                      <span key={index} className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;