import React, { useState } from 'react';
import { Star, Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Evaluations = () => {
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredEvaluations = evaluations.filter(evals =>
    evals.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evals.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (score) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} size={20} className={index < Math.round(score / 2) ? 'text-yellow-400' : 'text-gray-300'} fill={index < Math.round(score / 2) ? 'currentColor' : 'none'} />
    ));
  };

  const chartData = [
    { name: 'Technical Skills', value: evaluations[0].technicalSkills },
    { name: 'Communication', value: evaluations[0].communicationSkills },
    { name: 'Problem Solving', value: evaluations[0].problemSolving },
    { name: 'Cultural Fit', value: evaluations[0].culturalFit },
  ];

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Evaluations</h1>
        <input
          type="text"
          placeholder="Search evaluations..."
          className="w-full p-3 mb-8 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredEvaluations.map((evaluation) => (
          <div key={evaluation.id} className="bg-gray-800 rounded-lg overflow-hidden mb-8">
            <div className="bg-purple-600 p-4">
              <h2 className="text-xl font-bold">{evaluation.candidateName}</h2>
              <p className="text-sm opacity-75">{evaluation.position}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold mr-2">{evaluation.overallScore}</span>
                    <div className="flex">{renderStars(evaluation.overallScore)}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Skills Breakdown</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis stroke="#fff" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Strengths</h3>
                    <ul className="list-disc list-inside">
                      {evaluation.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Areas for Improvement</h3>
                    <ul className="list-disc list-inside">
                      {evaluation.areasForImprovement.map((area, index) => (
                        <li key={index}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Alignment</h3>
                  <div className="flex items-center mb-2">
                    <span className="w-32">Resume Accuracy:</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{width: `${evaluation.resumeAccuracy}%`}}
                      ></div>
                    </div>
                    <span className="ml-2">{evaluation.resumeAccuracy}%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32">JD Alignment:</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{width: `${evaluation.jdAlignment}%`}}
                      ></div>
                    </div>
                    <span className="ml-2">{evaluation.jdAlignment}%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Recommendation</h3>
                  <p className="text-lg font-medium text-purple-400">{evaluation.aiRecommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Evaluations;