'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}; 