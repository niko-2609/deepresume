"use client";

import { useState, useRef } from "react";
import ButtonGenerateResume from "./ButtonGenerateResume";
import { ComponentMarkdown } from './ComponentMarkdown';

function ResumeGenerator() {
  const [resume, setResume] = useState<string>('');
  const [jobDescription, setJobDescription] = useState("");
  const [isClearing, setIsClearing] = useState(false);
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleClear = async () => {
    setIsClearing(true);
    setJobDescription("");
    setResume("");
    setError("");
    setIsClearing(false);
    setIsGenerating(false);
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsGenerating(false);
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">DeepResume</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Paste your target job description below and let AI tailor your resume
            for maximum impact
          </p>
        </div>

        {/* Main Input Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your job description
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-64 resize-none"
                disabled={isGenerating}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6">
              <button
                onClick={handleClear}
                disabled={!jobDescription.trim() || isClearing || isGenerating}
                className={`inline-flex items-center px-5 py-3 border text-base font-semibold rounded-md transition-all duration-200
                  ${!jobDescription.trim() || isClearing || isGenerating
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {isClearing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Clearing...
                  </>
                ) : (
                  "Clear Input"
                )}
              </button>

              <div className="flex items-center space-x-4">
                {isGenerating && (
                  <button
                    onClick={handleCancel}
                    className="inline-flex items-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Cancel Generation
                  </button>
                )}
                <ButtonGenerateResume 
                  jobDescription={jobDescription} 
                  setResume={setResume}
                  onError={setError}
                  onLoadingChange={setIsGenerating}
                  abortControllerRef={abortControllerRef}
                />
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Generated Resume */}
        {resume && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Generated Resume</h2>
            <div className="prose max-w-none">
              <ComponentMarkdown content={resume} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ResumeGenerator; 