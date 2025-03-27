'use client';

import { useState } from 'react';
import StreamedResume from '../components/StreamedResume';

export default function StreamingDemoPage() {
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Resume Generator - Streaming Demo</h1>
      
      <div className="mb-6">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          rows={8}
          className="w-full rounded border border-gray-300 p-3"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      
      <StreamedResume jobDescription={jobDescription} />
      
      <div className="mt-10 text-sm text-gray-500">
        <h2 className="text-lg font-semibold mb-2">How it works</h2>
        <p>This demo demonstrates streaming resume generation:</p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>Enter a job description</li>
          <li>Click "Generate Resume"</li>
          <li>The resume will be generated in real-time, with chunks arriving as they're produced</li>
          <li>You can cancel generation at any time</li>
        </ol>
      </div>
    </div>
  );
} 