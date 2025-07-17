import { AutocompleteSuggestion } from '../types';

export const markdownSuggestions: AutocompleteSuggestion[] = [
  // Headers
  { text: '#', insertText: '# ', kind: 'keyword', description: 'Heading 1', detail: 'Large heading' },
  { text: '##', insertText: '## ', kind: 'keyword', description: 'Heading 2', detail: 'Medium heading' },
  { text: '###', insertText: '### ', kind: 'keyword', description: 'Heading 3', detail: 'Small heading' },
  { text: '####', insertText: '#### ', kind: 'keyword', description: 'Heading 4', detail: 'Extra small heading' },
  
  // Text formatting
  { text: '**', insertText: '**${1:bold text}**', kind: 'snippet', description: 'Bold text', detail: 'Make text bold' },
  { text: '*', insertText: '*${1:italic text}*', kind: 'snippet', description: 'Italic text', detail: 'Make text italic' },
  { text: '~~', insertText: '~~${1:strikethrough}~~', kind: 'snippet', description: 'Strikethrough', detail: 'Strike through text' },
  { text: '`', insertText: '`${1:code}`', kind: 'snippet', description: 'Inline code', detail: 'Inline code formatting' },
  
  // Links and images
  { text: '[', insertText: '[${1:link text}](${2:url})', kind: 'snippet', description: 'Link', detail: 'Create a hyperlink' },
  { text: '![', insertText: '![${1:alt text}](${2:image url})', kind: 'snippet', description: 'Image', detail: 'Insert an image' },
  
  // Lists
  { text: '-', insertText: '- ${1:item}', kind: 'snippet', description: 'Unordered list', detail: 'Bullet point list' },
  { text: '1.', insertText: '1. ${1:item}', kind: 'snippet', description: 'Ordered list', detail: 'Numbered list' },
  { text: '- [ ]', insertText: '- [ ] ${1:task}', kind: 'snippet', description: 'Task list', detail: 'Checkbox list item' },
  { text: '- [x]', insertText: '- [x] ${1:completed task}', kind: 'snippet', description: 'Completed task', detail: 'Checked checkbox item' },
  
  // Code blocks
  { text: '```', insertText: '```${1:language}\n${2:code}\n```', kind: 'snippet', description: 'Code block', detail: 'Multi-line code block' },
  { text: '```js', insertText: '```javascript\n${1:code}\n```', kind: 'snippet', description: 'JavaScript code', detail: 'JavaScript code block' },
  { text: '```py', insertText: '```python\n${1:code}\n```', kind: 'snippet', description: 'Python code', detail: 'Python code block' },
  { text: '```ts', insertText: '```typescript\n${1:code}\n```', kind: 'snippet', description: 'TypeScript code', detail: 'TypeScript code block' },
  { text: '```html', insertText: '```html\n${1:code}\n```', kind: 'snippet', description: 'HTML code', detail: 'HTML code block' },
  { text: '```css', insertText: '```css\n${1:code}\n```', kind: 'snippet', description: 'CSS code', detail: 'CSS code block' },
  
  // Blockquotes and dividers
  { text: '>', insertText: '> ${1:quote}', kind: 'snippet', description: 'Blockquote', detail: 'Quote or citation' },
  { text: '---', insertText: '---', kind: 'keyword', description: 'Horizontal rule', detail: 'Divider line' },
  
  // Tables
  { text: '|', insertText: '| ${1:Header 1} | ${2:Header 2} |\n| --------- | --------- |\n| ${3:Cell 1}   | ${4:Cell 2}   |', kind: 'snippet', description: 'Table', detail: 'Create a table' },
  
  // Common snippets
  { text: 'todo', insertText: '## TODO\n\n- [ ] ${1:task}', kind: 'snippet', description: 'TODO section', detail: 'Create a TODO list' },
  { text: 'note', insertText: '> **Note:** ${1:important information}', kind: 'snippet', description: 'Note block', detail: 'Important note' },
  { text: 'warning', insertText: '> ⚠️ **Warning:** ${1:warning message}', kind: 'snippet', description: 'Warning block', detail: 'Warning message' },
  { text: 'info', insertText: '> ℹ️ **Info:** ${1:information}', kind: 'snippet', description: 'Info block', detail: 'Information note' },
];

export const emojiSuggestions: AutocompleteSuggestion[] = [
  { text: ':smile:', insertText: '😊', kind: 'emoji', description: 'Smile', detail: 'Smiling face' },
  { text: ':heart:', insertText: '❤️', kind: 'emoji', description: 'Heart', detail: 'Red heart' },
  { text: ':fire:', insertText: '🔥', kind: 'emoji', description: 'Fire', detail: 'Fire emoji' },
  { text: ':rocket:', insertText: '🚀', kind: 'emoji', description: 'Rocket', detail: 'Rocket emoji' },
  { text: ':star:', insertText: '⭐', kind: 'emoji', description: 'Star', detail: 'Star emoji' },
  { text: ':check:', insertText: '✅', kind: 'emoji', description: 'Check', detail: 'Check mark' },
  { text: ':x:', insertText: '❌', kind: 'emoji', description: 'X', detail: 'Cross mark' },
  { text: ':warning:', insertText: '⚠️', kind: 'emoji', description: 'Warning', detail: 'Warning sign' },
  { text: ':info:', insertText: 'ℹ️', kind: 'emoji', description: 'Info', detail: 'Information' },
  { text: ':bulb:', insertText: '💡', kind: 'emoji', description: 'Bulb', detail: 'Light bulb' },
  { text: ':gear:', insertText: '⚙️', kind: 'emoji', description: 'Gear', detail: 'Settings gear' },
  { text: ':book:', insertText: '📚', kind: 'emoji', description: 'Book', detail: 'Books' },
  { text: ':computer:', insertText: '💻', kind: 'emoji', description: 'Computer', detail: 'Laptop computer' },
  { text: ':phone:', insertText: '📱', kind: 'emoji', description: 'Phone', detail: 'Mobile phone' },
  { text: ':email:', insertText: '📧', kind: 'emoji', description: 'Email', detail: 'Email' },
  { text: ':calendar:', insertText: '📅', kind: 'emoji', description: 'Calendar', detail: 'Calendar' },
  { text: ':clock:', insertText: '🕐', kind: 'emoji', description: 'Clock', detail: 'Clock' },
  { text: ':thumbsup:', insertText: '👍', kind: 'emoji', description: 'Thumbs up', detail: 'Thumbs up' },
  { text: ':thumbsdown:', insertText: '👎', kind: 'emoji', description: 'Thumbs down', detail: 'Thumbs down' },
  { text: ':party:', insertText: '🎉', kind: 'emoji', description: 'Party', detail: 'Party popper' },
];

// Common English words for word completion
export const commonWords = [
  'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use',
  'about', 'after', 'again', 'before', 'being', 'could', 'every', 'first', 'found', 'great', 'group', 'hand', 'here', 'high', 'important', 'into', 'just', 'know', 'large', 'last', 'left', 'life', 'little', 'long', 'made', 'make', 'most', 'move', 'much', 'must', 'name', 'need', 'never', 'next', 'night', 'number', 'often', 'only', 'open', 'order', 'over', 'own', 'part', 'place', 'point', 'right', 'said', 'same', 'seem', 'several', 'show', 'side', 'since', 'small', 'something', 'still', 'such', 'system', 'take', 'than', 'that', 'their', 'them', 'there', 'these', 'they', 'thing', 'think', 'this', 'those', 'through', 'time', 'today', 'together', 'turn', 'under', 'until', 'very', 'want', 'water', 'well', 'went', 'were', 'what', 'where', 'which', 'while', 'will', 'with', 'work', 'world', 'would', 'write', 'year', 'young'
];