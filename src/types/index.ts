export interface EditorState {
  content: string;
  theme: 'light' | 'dark';
  isPreviewMode: boolean;
  leftPanelWidth: number;
}

export interface FileStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
}

export interface MarkdownCheatsheet {
  syntax: string;
  description: string;
  example: string;
}

export interface AutocompleteSuggestion {
  text: string;
  insertText: string;
  kind: 'keyword' | 'snippet' | 'word' | 'emoji';
  description?: string;
  detail?: string;
}

export interface SuggestionPosition {
  top: number;
  left: number;
}