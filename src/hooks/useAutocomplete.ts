import { useState, useCallback, useMemo } from 'react';
import { AutocompleteSuggestion, SuggestionPosition } from '../types';
import { markdownSuggestions, emojiSuggestions, commonWords } from '../data/suggestions';

export function useAutocomplete() {
  const [suggestions, setSuggestions] = useState<AutocompleteSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<SuggestionPosition>({ top: 0, left: 0 });
  const [triggerWord, setTriggerWord] = useState('');
  const [triggerStart, setTriggerStart] = useState(0);

  const allSuggestions = useMemo(() => [
    ...markdownSuggestions,
    ...emojiSuggestions,
    ...commonWords.map(word => ({
      text: word,
      insertText: word,
      kind: 'word' as const,
      description: `Word: ${word}`,
    }))
  ], []);

  const getSuggestions = useCallback((query: string, isEmojiTrigger: boolean = false): AutocompleteSuggestion[] => {
    if (!query) return [];

    const filtered = allSuggestions.filter(suggestion => {
      if (isEmojiTrigger) {
        return suggestion.kind === 'emoji' && suggestion.text.toLowerCase().includes(query.toLowerCase());
      }
      
      // For regular text, prioritize markdown syntax and snippets
      if (query.startsWith('#') || query.startsWith('*') || query.startsWith('`') || query.startsWith('[') || query.startsWith('!')) {
        return suggestion.kind !== 'word' && suggestion.text.toLowerCase().startsWith(query.toLowerCase());
      }
      
      return suggestion.text.toLowerCase().startsWith(query.toLowerCase());
    });

    // Sort suggestions by relevance
    return filtered.sort((a, b) => {
      // Prioritize exact matches
      if (a.text.toLowerCase() === query.toLowerCase()) return -1;
      if (b.text.toLowerCase() === query.toLowerCase()) return 1;
      
      // Prioritize by kind: snippets > keywords > emojis > words
      const kindOrder = { snippet: 0, keyword: 1, emoji: 2, word: 3 };
      const aOrder = kindOrder[a.kind];
      const bOrder = kindOrder[b.kind];
      
      if (aOrder !== bOrder) return aOrder - bOrder;
      
      // Then by length (shorter first)
      return a.text.length - b.text.length;
    }).slice(0, 10); // Limit to 10 suggestions
  }, [allSuggestions]);

  const updateSuggestions = useCallback((
    content: string,
    cursorPosition: number,
    textareaElement: HTMLTextAreaElement
  ) => {
    // Find the word being typed
    const beforeCursor = content.substring(0, cursorPosition);
    const afterCursor = content.substring(cursorPosition);
    
    // Check for emoji trigger (:)
    const emojiMatch = beforeCursor.match(/:([a-zA-Z]*)$/);
    if (emojiMatch) {
      const query = emojiMatch[1];
      const suggestions = getSuggestions(query, true);
      
      if (suggestions.length > 0) {
        const coords = getCaretCoordinates(textareaElement, cursorPosition);
        setTriggerWord(`:${query}`);
        setTriggerStart(cursorPosition - query.length - 1);
        setSuggestions(suggestions);
        setPosition(coords);
        setSelectedIndex(0);
        setIsVisible(true);
        return;
      }
    }
    
    // Check for regular word completion
    const wordMatch = beforeCursor.match(/(\S+)$/);
    if (wordMatch) {
      const query = wordMatch[1];
      
      // Only show suggestions for words longer than 1 character or markdown syntax
      if (query.length > 1 || query.match(/^[#*`\[\!>-]/)) {
        const suggestions = getSuggestions(query);
        
        if (suggestions.length > 0) {
          const coords = getCaretCoordinates(textareaElement, cursorPosition);
          setTriggerWord(query);
          setTriggerStart(cursorPosition - query.length);
          setSuggestions(suggestions);
          setPosition(coords);
          setSelectedIndex(0);
          setIsVisible(true);
          return;
        }
      }
    }
    
    // Hide suggestions if no match
    setIsVisible(false);
  }, [getSuggestions]);

  const applySuggestion = useCallback((
    suggestion: AutocompleteSuggestion,
    content: string,
    cursorPosition: number
  ): { newContent: string; newCursorPosition: number } => {
    const beforeTrigger = content.substring(0, triggerStart);
    const afterCursor = content.substring(cursorPosition);
    
    let insertText = suggestion.insertText;
    let newCursorPosition = triggerStart + insertText.length;
    
    // Handle snippet placeholders (${1:text})
    const placeholderMatch = insertText.match(/\$\{(\d+):([^}]*)\}/);
    if (placeholderMatch) {
      const placeholderText = placeholderMatch[2];
      insertText = insertText.replace(/\$\{\d+:([^}]*)\}/g, '$1');
      
      // Position cursor at the first placeholder
      const placeholderStart = insertText.indexOf(placeholderText);
      if (placeholderStart !== -1) {
        newCursorPosition = triggerStart + placeholderStart + placeholderText.length;
      }
    }
    
    const newContent = beforeTrigger + insertText + afterCursor;
    
    setIsVisible(false);
    return { newContent, newCursorPosition };
  }, [triggerStart]);

  const navigateSuggestions = useCallback((direction: 'up' | 'down') => {
    if (!isVisible || suggestions.length === 0) return;
    
    setSelectedIndex(prev => {
      if (direction === 'up') {
        return prev > 0 ? prev - 1 : suggestions.length - 1;
      } else {
        return prev < suggestions.length - 1 ? prev + 1 : 0;
      }
    });
  }, [isVisible, suggestions.length]);

  const hideSuggestions = useCallback(() => {
    setIsVisible(false);
    setSuggestions([]);
    setSelectedIndex(0);
  }, []);

  return {
    suggestions,
    selectedIndex,
    isVisible,
    position,
    updateSuggestions,
    applySuggestion,
    navigateSuggestions,
    hideSuggestions,
  };
}

// Helper function to get caret coordinates
function getCaretCoordinates(element: HTMLTextAreaElement, position: number): SuggestionPosition {
  const div = document.createElement('div');
  const style = getComputedStyle(element);
  
  // Copy styles
  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'pre-wrap';
  div.style.wordWrap = 'break-word';
  div.style.font = style.font;
  div.style.padding = style.padding;
  div.style.border = style.border;
  div.style.width = style.width;
  div.style.height = style.height;
  div.style.lineHeight = style.lineHeight;
  
  document.body.appendChild(div);
  
  const text = element.value.substring(0, position);
  div.textContent = text;
  
  const span = document.createElement('span');
  span.textContent = element.value.substring(position) || '.';
  div.appendChild(span);
  
  const rect = element.getBoundingClientRect();
  const spanRect = span.getBoundingClientRect();
  const divRect = div.getBoundingClientRect();
  
  document.body.removeChild(div);
  
  return {
    top: rect.top + (spanRect.top - divRect.top) + 20,
    left: rect.left + (spanRect.left - divRect.left),
  };
}