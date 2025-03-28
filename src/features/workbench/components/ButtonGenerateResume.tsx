'use client';

import { useState, useEffect } from 'react';
import { SetStateAction } from 'react';

interface StreamedResumeProps {
    jobDescription: string;
    setResume: (value: SetStateAction<string>) => void;
    onError: (error: string) => void;
    onLoadingChange: (isLoading: boolean) => void;
    abortControllerRef: React.MutableRefObject<AbortController | null>;
}

export default function ButtonGenerateResume({ 
    jobDescription, 
    setResume, 
    onError,
    onLoadingChange,
    abortControllerRef
}: StreamedResumeProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [abortControllerRef]);

    const generateResume = async () => {
        if (!jobDescription.trim()) {
            onError('Please provide a job description.');
            return;
        }

        setResume('');
        onError('');
        setIsLoading(true);
        onLoadingChange(true);

        try {
            abortControllerRef.current = new AbortController();

            const response = await fetch('/api/v1/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/event-stream',
                },
                body: JSON.stringify({ 
                    jobDescription,
                    userId: 11 // Hardcoded user ID for now
                }),
                signal: abortControllerRef.current.signal,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate resume');
            }

            if (!response.body) {
                throw new Error('Response body is null');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const text = decoder.decode(value);
                text.split('\n').filter(Boolean).forEach(line => {
                    try {
                        const data = JSON.parse(line);
                        if (data.error) {
                            onError(data.error);
                            return;
                        }
                        if (data.chunk) {
                            setResume(prev => prev + data.chunk);
                        }
                    } catch (e) {
                        console.error('Failed to parse streaming response line:', line, e);
                    }
                });
            }
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                console.log('Request was aborted');
                return;
            }
            onError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
            onLoadingChange(false);
        }
    };

    return (
        <button
            onClick={generateResume}
            disabled={!jobDescription.trim() || isLoading}
            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Resume...
                </>
            ) : (
                'Generate Resume'
            )}
        </button>
    );
}