import React, { useState, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff, MessageSquare } from 'lucide-react';

const AIInterview = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [interviewStatus, setInterviewStatus] = useState('waiting'); // 'waiting', 'in-progress', 'completed'
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulating interview start after 3 seconds
    const timer = setTimeout(() => {
      setInterviewStatus('in-progress');
      simulateInterview();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);

  const simulateInterview = () => {
    const questions = [
      "Tell me about yourself.",
      "What's your greatest professional achievement?",
      "How do you handle difficult situations at work?",
      "Where do you see yourself in 5 years?",
      "Do you have any questions for us?"
    ];

    questions.forEach((question, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', content: question }]);
      }, index * 10000); // Ask a new question every 10 seconds
    });

    setTimeout(() => {
      setInterviewStatus('completed');
    }, questions.length * 10000);
  };

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">AI Interview</h1>

      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        {/* Video Feed */}
        <div className="lg:col-span-2">
          <div className={`aspect-w-16 aspect-h-9 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg overflow-hidden`}>
            {/* This would be replaced with actual video feed */}
            <div className="flex items-center justify-center text-2xl">
              {interviewStatus === 'waiting' && "Preparing AI Interviewer..."}
              {interviewStatus === 'in-progress' && "AI Interview in Progress"}
              {interviewStatus === 'completed' && "Interview Completed"}
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={toggleVideo}
              className={`p-2 rounded-full ${isVideoOn ? 'bg-purple-600' : 'bg-red-500'} text-white`}
            >
              {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
            </button>
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full ${isAudioOn ? 'bg-purple-600' : 'bg-red-500'} text-white`}
            >
              {isAudioOn ? <Mic size={24} /> : <MicOff size={24} />}
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4 flex flex-col h-[400px]`}>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.type === 'ai' ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.type === 'ai' ? (darkMode ? 'bg-gray-600' : 'bg-gray-200') : 'bg-purple-500 text-white'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your response..."
              className={`flex-grow p-2 rounded-l-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} focus:outline-none`}
            />
            <button className="bg-purple-500 text-white p-2 rounded-r-lg">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Interview Guidelines */}
      <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Interview Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure you're in a quiet environment</li>
          <li>Test your camera and microphone before starting</li>
          <li>Speak clearly and at a moderate pace</li>
          <li>Look directly into the camera to maintain "eye contact"</li>
          <li>The AI will ask questions based on your resume and the job description</li>
          <li>Take your time to think before answering, just like in a real interview</li>
          <li>If you need clarification, feel free to ask the AI to rephrase the question</li>
        </ul>
      </div>
    </div>
  );
};

export default AIInterview;