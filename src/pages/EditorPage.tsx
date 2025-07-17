import React, { useState, useCallback, useMemo } from 'react';
import Header from '../components/Header';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import CheatsheetModal from '../components/CheatsheetModal';
import ResizablePanel from '../components/ResizablePanel';
import Toast from '../components/Toast';
import { useTheme } from '../hooks/useTheme';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { parseMarkdown, getFileStats } from '../utils/markdown';
import { downloadFile, uploadFile, copyToClipboard } from '../utils/file';

const defaultContent = `# Welcome to Markdown Previewer\n\nThis is a **live preview** of your Markdown content.\n\n## Features\n\n- 🔥 Real-time preview\n- 🎨 Dark/Light theme\n- 📁 File upload/download\n- 📊 Word count\n- 🎯 Syntax highlighting\n- 📋 Copy to clipboard\n\n## Code Example\n\n\`\`\`javascript\nfunction greet(name) {\n  console.log(\`Hello, \${name}!\`);\n}\n\ngreet("World");\n\`\`\`\n\n## Lists\n\n### Todo List\n- [x] Create awesome Markdown editor\n- [x] Add live preview\n- [ ] Add more features\n\n### Numbered List\n1. First item\n2. Second item\n3. Third item\n\n## Blockquote\n\n> "The best way to predict the future is to create it."\n> — Peter Drucker\n\n## Table\n\n| Feature | Status |\n|---------|--------|\n| Live Preview | ✅ |\n| Dark Mode | ✅ |\n| File Export | ✅ |\n| Syntax Highlighting | ✅ |\n\n---\n\n**Start editing** to see the magic happen! ✨\n`;

const EditorPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [content, setContent] = useLocalStorage('markdown-content', defaultContent);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const parsedContent = useMemo(() => parseMarkdown(content), [content]);
  const stats = useMemo(() => getFileStats(content), [content]);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, isVisible: false }));
  }, []);

  const handleDownloadMd = useCallback(() => {
    downloadFile(content, 'document.md', 'text/markdown');
    showToast('Markdown file downloaded successfully!', 'success');
  }, [content, showToast]);

  const handleDownloadHtml = useCallback(() => {
    const htmlContent = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Markdown Document</title>\n    <style>\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 2rem;\n            line-height: 1.6;\n            color: #333;\n        }\n        pre {\n            background: #f5f5f5;\n            padding: 1rem;\n            border-radius: 4px;\n            overflow-x: auto;\n        }\n        code {\n            background: #f5f5f5;\n            padding: 0.2rem 0.4rem;\n            border-radius: 3px;\n            font-family: 'Monaco', 'Menlo', monospace;\n        }\n        blockquote {\n            border-left: 4px solid #3B82F6;\n            margin: 0;\n            padding-left: 1rem;\n            color: #666;\n        }\n        table {\n            border-collapse: collapse;\n            width: 100%;\n            margin: 1rem 0;\n        }\n        th, td {\n            border: 1px solid #ddd;\n            padding: 0.5rem;\n            text-align: left;\n        }\n        th {\n            background: #f9f9f9;\n        }\n    </style>\n</head>\n<body>\n    ${parsedContent}\n</body>\n</html>`;
    downloadFile(htmlContent, 'document.html', 'text/html');
    showToast('HTML file downloaded successfully!', 'success');
  }, [parsedContent, showToast]);

  const handleUpload = useCallback(async () => {
    try {
      const fileContent = await uploadFile();
      setContent(fileContent);
      showToast('File uploaded successfully!', 'success');
    } catch (error) {
      showToast('Error uploading file', 'error');
    }
  }, [setContent, showToast]);

  const handleCopyHtml = useCallback(async () => {
    try {
      await copyToClipboard(parsedContent);
      showToast('HTML copied to clipboard!', 'success');
    } catch (error) {
      showToast('Error copying to clipboard', 'error');
    }
  }, [parsedContent, showToast]);

  const handleClear = useCallback(() => {
    if (confirm('Are you sure you want to clear the editor?')) {
      setContent('');
      showToast('Editor cleared', 'success');
    }
  }, [setContent, showToast]);

  return (
    <div className={`editorPage1 min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <Header
          theme={theme}
          onThemeToggle={toggleTheme}
          onDownloadMd={handleDownloadMd}
          onDownloadHtml={handleDownloadHtml}
          onUpload={handleUpload}
          onCopyHtml={handleCopyHtml}
          onClear={handleClear}
          onShowCheatsheet={() => setShowCheatsheet(true)}
          onBackToLanding={() => window.location.replace('/')} // simple redirect
        />
        <div className="flex-1 overflow-hidden">
          <div className="hidden md:block h-full">
            <ResizablePanel>
              <Editor
                content={content}
                onChange={setContent}
                stats={stats}
                placeholder="Start typing your Markdown here..."
              />
              <Preview content={parsedContent} theme={theme} />
            </ResizablePanel>
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden h-full">
            <div className="h-1/2 bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
              <Editor
                content={content}
                onChange={setContent}
                stats={stats}
                placeholder="Start typing your Markdown here..."
              />
            </div>
            <div className="h-1/2 bg-white dark:bg-slate-800">
              <Preview content={parsedContent} theme={theme} />
            </div>
          </div>
        </div>
        <CheatsheetModal
          isOpen={showCheatsheet}
          onClose={() => setShowCheatsheet(false)}
        />
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </div>
    </div>
  );
};

export default EditorPage; 