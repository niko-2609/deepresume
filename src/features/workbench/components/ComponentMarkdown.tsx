'use client';

import ReactMarkdown from 'react-markdown';

interface ComponentMarkdownProps {
    content: string;
}

export function ComponentMarkdown({ content }: ComponentMarkdownProps) {
    return <ReactMarkdown>{content}</ReactMarkdown>;
} 