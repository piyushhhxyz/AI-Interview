import React, { useState, useRef, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff, MessageSquare } from 'lucide-react';

const AIInterview = () => {
  const [step, setStep] = useState('guidelines');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (step === 'interview' && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.error("Error accessing media devices:", err));
    }
  }, [step]);

  const guidelines = [
    "Ensure you're in a quiet environment",
    "Test your camera and microphone before starting",
    "Speak clearly and at a moderate pace",
    "Look directly into the camera to maintain 'eye contact'",
    "The AI will ask questions based on your resume and the job description",
    "Take your time to think before answering, just like in a real interview"
  ];

  const startInterview = () => setStep('interview');
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);
  const toggleChat = () => setChatOpen(!chatOpen);

  return (
      <div className="flex-1 bg-gray-900">
        {step === 'guidelines' && (
          <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">AI Interview Guidelines</h1>
            <ul className="space-y-4 mb-8">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-center">
                  <input type="checkbox" className="mr-4" />
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={startInterview}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300"
            >
              Start Interview
            </button>
          </div>
        )}
        {step === 'interview' && (
          <div className="relative h-screen">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-cover transform scale-x-[-1]"
          />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
              <button
                onClick={toggleVideo}
                className={`p-3 rounded-full ${isVideoOn ? 'bg-purple-600' : 'bg-red-600'}`}
              >
                {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
              </button>
              <button
                onClick={toggleAudio}
                className={`p-3 rounded-full ${isAudioOn ? 'bg-purple-600' : 'bg-red-600'}`}
              >
                {isAudioOn ? <Mic size={24} /> : <MicOff size={24} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-3 rounded-full bg-purple-600"
              >
                <MessageSquare size={24} />
              </button>
            </div>
            {chatOpen && (
              <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-800 p-4 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Chat</h2>
                {/* Chat messages would go here */}
                <div className="mt-auto">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-700 rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
  );
};

export default AIInterview;