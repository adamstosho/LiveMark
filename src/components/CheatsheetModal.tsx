import React from 'react';
import { X } from 'lucide-react';
import { markdownCheatsheet } from '../data/cheatsheet';

interface CheatsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheatsheetModal: React.FC<CheatsheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in duration-300">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-600">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Markdown Cheatsheet
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid gap-6 md:grid-cols-2">
            {markdownCheatsheet.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.description}
                </h3>
                <div className="space-y-2">
                  <div className="p-2 bg-white dark:bg-slate-800 rounded border font-mono text-sm">
                    {item.syntax}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Example: <code className="font-mono bg-gray-200 dark:bg-slate-600 px-1 py-0.5 rounded">{item.example}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatsheetModal;