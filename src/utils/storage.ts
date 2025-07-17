import { EditorState } from '../types';

const STORAGE_KEY = 'markdown-previewer-state';

export const saveToStorage = (state: Partial<EditorState>): void => {
  try {
    const existingState = getFromStorage();
    const newState = { ...existingState, ...state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromStorage = (): Partial<EditorState> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return {};
  }
};

export const clearStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};