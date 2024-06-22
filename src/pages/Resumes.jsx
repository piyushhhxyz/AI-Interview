import React, { useState } from 'react';
import { Upload, File, CheckCircle, AlertCircle, Search } from 'lucide-react';

const Resumes = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Simulating upload process
      setTimeout(() => {
        setUploadStatus('success');
      }, 2000);
    } else {
      setUploadStatus('error');
    }
  };

  const recentResumes = [
    { id: 1, name: 'John_Doe_Resume.pdf', date: '2023-06-20' },
    { id: 2, name: 'Jane_Smith_CV.docx', date: '2023-06-19' },
    { id: 3, name: 'Mike_Johnson_Resume.pdf', date: '2023-06-18' },
  ];

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Resumes</h1>

      {/* Upload Section */}
      <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`flex flex-col items-center px-4 py-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-blue rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300`}>
              <Upload className="w-8 h-8" />
              <span className="mt-2 text-base">Select a file</span>
              <input type='file' className="hidden" onChange={handleFileChange} />
            </label>
          </div>
          {file && (
            <p className="mb-4 text-sm">{file.name}</p>
          )}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white font-semibold transition duration-300`}
          >
            Upload Resume
          </button>
        </form>
        {uploadStatus === 'success' && (
          <div className="mt-4 flex items-center text-green-500">
            <CheckCircle className="mr-2" size={20} />
            <span>Resume uploaded successfully!</span>
          </div>
        )}
        {uploadStatus === 'error' && (
          <div className="mt-4 flex items-center text-red-500">
            <AlertCircle className="mr-2" size={20} />
            <span>Error uploading resume. Please try again.</span>
          </div>
        )}
      </div>

      {/* Recent Resumes */}
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h2 className="text-xl font-semibold mb-4">Recent Resumes</h2>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resumes..."
              className={`w-full p-3 pl-10 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <ul className="space-y-2">
          {recentResumes.map((resume) => (
            <li key={resume.id} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center">
                <File className="mr-3" size={20} />
                <span>{resume.name}</span>
              </div>
              <span className="text-sm text-gray-500">{resume.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resumes;