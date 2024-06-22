import React, { useState, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff } from 'lucide-react';
import { Vapi } from '@vapi-ai/web';

const AIInterviewMaestro = () => {
  useEffect(() => {
    const vapi = new Vapi('YOUR_VAPI_API_KEY');
  })
  
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [interviewStatus, setInterviewStatus] = useState('waiting'); // 'waiting', 'in-progress', 'completed'

  useEffect(() => {
    // Simulating interview start after 3 seconds
    const timer = setTimeout(() => {
      setInterviewStatus('in-progress');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">AIInterviewMaestro™</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-gray-800">
          {/* This would be replaced with actual video feed */}
          <div className="flex items-center justify-center text-white">
            {interviewStatus === 'waiting' && <p>Waiting for AI interviewer...</p>}
            {interviewStatus === 'in-progress' && <p>AI Interview in progress</p>}
            {interviewStatus === 'completed' && <p>Interview completed</p>}
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleVideo}
              className={`p-2 rounded-full ${isVideoOn ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
            </button>
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full ${isAudioOn ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {isAudioOn ? <Mic size={24} /> : <MicOff size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Interview Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure you're in a quiet environment</li>
          <li>Test your camera and microphone before starting</li>
          <li>Speak clearly and at a moderate pace</li>
          <li>Look directly into the camera to maintain "eye contact"</li>
          <li>The AI will ask questions based on your resume and the job description</li>
        </ul>
      </div>
    </div>
  );
};

export default AIInterviewMaestro;