import React from 'react';
import { FileText, Sun, Moon, Download, Upload, Copy, Trash2, HelpCircle } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onDownloadMd: () => void;
  onDownloadHtml: () => void;
  onUpload: () => void;
  onCopyHtml: () => void;
  onClear: () => void;
  onShowCheatsheet: () => void;
  onBackToLanding: () => void;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  onThemeToggle,
  onDownloadMd,
  onDownloadHtml,
  onUpload,
  onCopyHtml,
  onClear,
  onShowCheatsheet,
  onBackToLanding
}) => {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToLanding}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <FileText className="w-6 h-6" />
            <span className="font-semibold text-lg">Markdown Previewer</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onUpload}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            title="Upload Markdown file"
          >
            <Upload className="w-5 h-5" />
          </button>
          
          <div className="relative group">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200">
              <Download className="w-5 h-5" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-700 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={onDownloadMd}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-t-lg"
              >
                Download as .md
              </button>
              <button
                onClick={onDownloadHtml}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-b-lg"
              >
                Download as .html
              </button>
            </div>
          </div>
          
          <button
            onClick={onCopyHtml}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            title="Copy HTML to clipboard"
          >
            <Copy className="w-5 h-5" />
          </button>
          
          <button
            onClick={onShowCheatsheet}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            title="Show Markdown cheatsheet"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <button
            onClick={onClear}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            title="Clear editor"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          
          <button
            onClick={onThemeToggle}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            title="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;