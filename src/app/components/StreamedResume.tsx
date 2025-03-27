 'use client';

import { useState, useEffect, useRef } from 'react';
import { Markdown } from './Markdown';

interface StreamedResumeProps {
  jobDescription: string;
}

export default function StreamedResume({ jobDescription }: StreamedResumeProps) {
  const [resume, setResume] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [source, setSource] = useState<string | null>(null);
  const [isDone, setIsDone] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const generateResume = async () => {
    if (!jobDescription.trim()) {
      setError('Please provide a job description.');
      return;
    }

    setResume('');
    setError(null);
    setIsLoading(true);
    setSource(null);
    setIsDone(false);

    try {
      // Create a new AbortController for this request
      abortControllerRef.current = new AbortController();
      
      // Start the streaming request
      const response = await fetch('/api/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify({ jobDescription }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate resume');
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      // Set up the reader for the stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      // Process the stream
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }

        // Decode the chunk
        const text = decoder.decode(value);
        
        // Process each line (each JSON object)
        text.split('\n').filter(Boolean).forEach(line => {
          try {
            const data = JSON.parse(line);
            
            // Check if it's a source information message
            if (data.source) {
              setSource(data.source);
              return;
            }

            // Check if it's an error message
            if (data.error) {
              setError(data.error);
              return;
            }

            // It's a chunk of the resume
            if (data.chunk) {
              setResume(prev => prev + data.chunk);
              
              // Check if we're done
              if (data.done) {
                setIsDone(true);
              }
            }
          } catch (e) {
            console.error('Failed to parse streaming response line:', line, e);
          }
        });
      }

      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        console.log('Request was aborted');
        return;
      }
      
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
    }
  };

  const cancelGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <button 
          onClick={generateResume}
          disabled={isLoading} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Generating...' : 'Generate Resume'}
        </button>
        
        {isLoading && (
          <button 
            onClick={cancelGeneration}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
        )}
      </div>
      
      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {resume && (
        <div className="border rounded p-4 bg-white">
          <div className="mb-2 text-sm text-gray-500 flex justify-between">
            {source && (
              <span>Generated using: <strong>AI Model</strong></span>
            )}
            {isLoading && <span className="text-blue-500">Generating...</span>}
            {isDone && <span className="text-green-500">Complete!</span>}
          </div>
          <Markdown content={resume} />
        </div>
      )}
    </div>
  );
}