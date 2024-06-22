import React from 'react';
import { Star, CheckCircle, XCircle } from 'lucide-react';

const TalentEvaluator = () => {
  const interviewResults = {
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
  };

  const renderStars = (score) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} size={20} className={index < Math.round(score / 2) ? 'text-yellow-400' : 'text-gray-300'} fill={index < Math.round(score / 2) ? 'currentColor' : 'none'} />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">TalentEvaluator™</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">{interviewResults.candidateName}</h2>
          <p className="text-lg">{interviewResults.position}</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Overall Score</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2">{interviewResults.overallScore}</span>
              <div className="flex">{renderStars(interviewResults.overallScore)}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <div className="flex">{renderStars(interviewResults.technicalSkills)}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communication Skills</h3>
              <div className="flex">{renderStars(interviewResults.communicationSkills)}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
              <div className="flex">{renderStars(interviewResults.problemSolving)}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cultural Fit</h3>
              <div className="flex">{renderStars(interviewResults.culturalFit)}</div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Alignment</h3>
            <div className="flex items-center mb-2">
              <span className="w-32">Resume Accuracy:</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${interviewResults.resumeAccuracy}%`}}></div>
              </div>
              <span className="ml-2">{interviewResults.resumeAccuracy}%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32">JD Alignment:</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${interviewResults.jdAlignment}%`}}></div>
              </div>
              <span className="ml-2">{interviewResults.jdAlignment}%</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Strengths</h3>
            <ul className="list-disc list-inside">
              {interviewResults.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Areas for Improvement</h3>
            <ul className="list-disc list-inside">
              {interviewResults.areasForImprovement.map((area, index) => (
                <li key={index} className="flex items-start">
                  <XCircle size={20} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Recommendation</h3>
            <p className="text-lg font-medium text-blue-600">{interviewResults.aiRecommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentEvaluator;
              