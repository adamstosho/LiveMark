import React, { useEffect, useRef } from 'react';
import { AutocompleteSuggestion, SuggestionPosition } from '../types';
import { Hash, Type, Smile, FileText } from 'lucide-react';

interface AutocompleteDropdownProps {
  suggestions: AutocompleteSuggestion[];
  selectedIndex: number;
  position: SuggestionPosition;
  isVisible: boolean;
  onSelect: (suggestion: AutocompleteSuggestion) => void;
}

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  suggestions,
  selectedIndex,
  position,
  isVisible,
  onSelect,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && dropdownRef.current) {
      const selectedElement = dropdownRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, isVisible]);

  if (!isVisible || suggestions.length === 0) return null;

  const getIcon = (kind: AutocompleteSuggestion['kind']) => {
    switch (kind) {
      case 'keyword':
        return <Hash className="w-4 h-4 text-blue-500" />;
      case 'snippet':
        return <FileText className="w-4 h-4 text-green-500" />;
      case 'emoji':
        return <Smile className="w-4 h-4 text-yellow-500" />;
      case 'word':
        return <Type className="w-4 h-4 text-gray-500" />;
      default:
        return <Type className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="fixed z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg max-h-64 overflow-y-auto min-w-64"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={`${suggestion.text}-${index}`}
          className={`
            flex items-center px-3 py-2 cursor-pointer border-b border-gray-100 dark:border-slate-700 last:border-b-0
            ${index === selectedIndex 
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
              : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100'
            }
          `}
          onClick={() => onSelect(suggestion)}
        >
          <div className="mr-3 flex-shrink-0">
            {getIcon(suggestion.kind)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-medium truncate">
                {suggestion.text}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                {suggestion.kind}
              </span>
            </div>
            
            {suggestion.description && (
              <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {suggestion.description}
              </div>
            )}
            
            {suggestion.detail && (
              <div className="text-xs text-gray-500 dark:text-gray-500 truncate">
                {suggestion.detail}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutocompleteDropdown;