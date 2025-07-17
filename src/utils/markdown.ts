import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

// Configure marked with highlight.js
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        console.error('Highlight.js error:', err);
      }
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true,
});

export const parseMarkdown = (content: string): string => {
  try {
    const html = marked(content);
    return DOMPurify.sanitize(html);
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return 'Error parsing markdown';
  }
};

export const getFileStats = (content: string) => {
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  const characters = content.length;
  const charactersNoSpaces = content.replace(/\s/g, '').length;
  
  return {
    words,
    characters,
    charactersNoSpaces,
  };
};