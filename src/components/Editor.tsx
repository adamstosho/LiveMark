import React, { useCallback, useEffect, useRef } from 'react';
import AutocompleteDropdown from './AutocompleteDropdown';
import { useAutocomplete } from '../hooks/useAutocomplete';
import { FileStats } from '../types';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  stats: FileStats;
  placeholder?: string;
}

const Editor: React.FC<EditorProps> = ({ content, onChange, stats, placeholder }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    suggestions,
    selectedIndex,
    isVisible,
    position,
    updateSuggestions,
    applySuggestion,
    navigateSuggestions,
    hideSuggestions,
  } = useAutocomplete();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle autocomplete navigation
    if (isVisible) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          navigateSuggestions('down');
          return;
        case 'ArrowUp':
          e.preventDefault();
          navigateSuggestions('up');
          return;
        case 'Enter':
        case 'Tab':
          e.preventDefault();
          if (suggestions[selectedIndex]) {
            const { newContent, newCursorPosition } = applySuggestion(
              suggestions[selectedIndex],
              content,
              e.currentTarget.selectionStart
            );
            onChange(newContent);
            
            // Set cursor position after applying suggestion
            setTimeout(() => {
              if (textareaRef.current) {
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursorPosition;
                textareaRef.current.focus();
              }
            }, 0);
          }
          return;
        case 'Escape':
          e.preventDefault();
          hideSuggestions();
          return;
      }
    }
    
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      const newContent = content.substring(0, start) + '  ' + content.substring(end);
      onChange(newContent);
      
      // Set cursor position after the inserted spaces
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  }, [content, onChange, isVisible, suggestions, selectedIndex, navigateSuggestions, applySuggestion, hideSuggestions]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    const cursorPosition = e.target.selectionStart;
    
    onChange(newContent);
    
    // Update autocomplete suggestions
    if (textareaRef.current) {
      updateSuggestions(newContent, cursorPosition, textareaRef.current);
    }
  }, [onChange, updateSuggestions]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLTextAreaElement>) => {
    const cursorPosition = e.currentTarget.selectionStart;
    
    // Update suggestions on click
    if (textareaRef.current) {
      updateSuggestions(content, cursorPosition, textareaRef.current);
    }
  }, [content, updateSuggestions]);

  const handleSuggestionSelect = useCallback((suggestion: any) => {
    if (textareaRef.current) {
      const cursorPosition = textareaRef.current.selectionStart;
      const { newContent, newCursorPosition } = applySuggestion(
        suggestion,
        content,
        cursorPosition
      );
      onChange(newContent);
      
      // Set cursor position after applying suggestion
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursorPosition;
          textareaRef.current.focus();
        }
      }, 0);
    }
  }, [applySuggestion, content, onChange]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <div className="Editorpage2 flex flex-col h-full">
      <div className="flex-1 p-4 overflow-auto ">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleInput}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            // Hide suggestions after a short delay to allow for clicks
            setTimeout(hideSuggestions, 150);
          }}
          placeholder={placeholder || "Start typing your Markdown here..."}
          className="w-full h-full min-h-[400px] resize-none border-0 outline-none text-gray-900 dark:text-gray-100 bg-transparent font-mono text-sm leading-relaxed placeholder-gray-500 dark:placeholder-gray-400 relative"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        
        <AutocompleteDropdown
          suggestions={suggestions}
          selectedIndex={selectedIndex}
          position={position}
          isVisible={isVisible}
          onSelect={handleSuggestionSelect}
        />
      </div>
      
      <div className="px-4 py-2 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <span>{stats.words} words</span>
            <span>{stats.characters} characters</span>
            <span>{stats.charactersNoSpaces} characters (no spaces)</span>
          </div>
          <div className="text-xs">
            Tip: Use Tab/Enter to accept suggestions, Esc to dismiss
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;