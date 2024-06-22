import React, { useState } from 'react';
import { Star, CheckCircle, XCircle, Search } from 'lucide-react';

const Evaluations = () => {
  const [darkMode, setDarkMode] = useState(true);

  const evaluations = [
    {
      id: 1,
      candidateName: 'John Smith',
      position: 'Senior Software Engineer',
      overallScore: 8.5,
      technicalSkills: 9,
      communicationSkills: 8,
      problemSolving: 9,
      culturalFit: 8,
      resumeAccuracy: 90,
      jdAlignment: 85,
      strengths: ['Strong problem-solving skills', 'Excellent knowledge of React and Node.js', 'Good team player'],
      areasForImprovement: ['Could improve on system design concepts', 'More experience with cloud technologies needed'],
      aiRecommendation: 'Strongly consider for next round'
    },
    // Add more evaluation objects here
  ];

  const renderStars = (score) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} size={20} className={index < Math.round(score / 2) ? 'text-yellow-400' : 'text-gray-300'} fill={index < Math.round(score / 2) ? 'currentColor' : 'none'} />
    ));
  };

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Evaluations</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search evaluations..."
            className={`w-full p-3 pl-10 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Evaluations List */}
      <div className="space-y-6">
        {evaluations.map((evaluation) => (
          <div key={evaluation.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
              <h2 className="text-xl font-bold text-white">{evaluation.candidateName}</h2>
              <p className="text-sm text-white opacity-75">{evaluation.position}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold mr-2">{evaluation.overallScore}</span>
                    <div className="flex">{renderStars(evaluation.overallScore)}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
                  <div className="flex">{renderStars(evaluation.technicalSkills)}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Communication</h3>
                  <div className="flex">{renderStars(evaluation.communicationSkills)}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                  <div className="flex">{renderStars(evaluation.problemSolving)}</div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Strengths</h3>
                <ul className="list-disc list-inside">
                  {evaluation.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Areas for Improvement</h3>
                <ul className="list-disc list-inside">
                  {evaluation.areasForImprovement.map((area, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <XCircle size={16} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">AI Recommendation</h3>
                <p className="text-lg font-medium text-purple-500">{evaluation.aiRecommendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluations;