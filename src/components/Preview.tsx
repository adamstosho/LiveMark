import React, { useEffect, useRef } from 'react';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/github-dark.css';

interface PreviewProps {
  content: string;
  theme: 'light' | 'dark';
}

const Preview: React.FC<PreviewProps> = ({ content, theme }) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) {
      // Add smooth fade-in animation
      previewRef.current.style.opacity = '0';
      setTimeout(() => {
        if (previewRef.current) {
          previewRef.current.style.opacity = '1';
        }
      }, 50);
    }
  }, [content]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto">
        <div
          ref={previewRef}
          className={`
            prose prose-sm max-w-none
            ${theme === 'dark' 
              ? 'prose-invert prose-pre:bg-gray-800 prose-code:text-blue-300' 
              : 'prose-blue prose-pre:bg-gray-100 prose-code:text-blue-600'
            }
            prose-headings:scroll-mt-6
            prose-pre:rounded-lg
            prose-pre:border
            prose-pre:border-gray-200
            dark:prose-pre:border-gray-700
            prose-code:rounded
            prose-code:px-1
            prose-code:py-0.5
            prose-code:bg-gray-100
            dark:prose-code:bg-gray-800
            prose-blockquote:border-l-blue-500
            prose-blockquote:bg-blue-50
            dark:prose-blockquote:bg-blue-900/20
            prose-table:border-collapse
            prose-th:border
            prose-th:border-gray-300
            dark:prose-th:border-gray-600
            prose-td:border
            prose-td:border-gray-300
            dark:prose-td:border-gray-600
            transition-opacity duration-200
          `}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {!content.trim() && (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <p className="text-lg mb-2">Preview will appear here</p>
              <p className="text-sm">Start typing in the editor to see the magic! ✨</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="px-4 py-2 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Live preview with syntax highlighting
        </div>
      </div>
    </div>
  );
};

export default Preview;