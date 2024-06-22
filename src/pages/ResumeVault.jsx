import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const ResumeVault = () => {
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

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">ResumeVault™</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
              Upload Your Resume
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <Upload className="w-8 h-8" />
                <span className="mt-2 text-base leading-normal">Select a file</span>
                <input type='file' className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </div>
          {file && (
            <p className="mb-4 text-sm text-gray-600">
              Selected file: {file.name}
            </p>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
    </div>
  );
};

export default ResumeVault;