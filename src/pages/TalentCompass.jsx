import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const TalentCompass = () => {
  const candidateProfile = {
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
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">TalentCompass™</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold">{candidateProfile.name}</h2>
          <p className="text-lg">{candidateProfile.currentPosition}</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Mail className="mr-2" size={20} />
              <span>{candidateProfile.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <span>{candidateProfile.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>{candidateProfile.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2" size={20} />
              <span>{candidateProfile.experience} experience</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h3>
            <p>{candidateProfile.education}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap">
              {candidateProfile.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Award className="mr-2" size={24} />
              Key Achievements
            </h3>
            <ul className="list-disc list-inside">
              {candidateProfile.achievements.map((achievement, index) => (
                <li key={index} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCompass;