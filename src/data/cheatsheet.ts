import { MarkdownCheatsheet } from '../types';

export const markdownCheatsheet: MarkdownCheatsheet[] = [
  {
    syntax: '# Heading 1',
    description: 'Create a large heading',
    example: '# My Title'
  },
  {
    syntax: '## Heading 2',
    description: 'Create a medium heading',
    example: '## My Subtitle'
  },
  {
    syntax: '**bold text**',
    description: 'Make text bold',
    example: '**Important note**'
  },
  {
    syntax: '*italic text*',
    description: 'Make text italic',
    example: '*Emphasis*'
  },
  {
    syntax: '`code`',
    description: 'Inline code',
    example: '`console.log("Hello")`'
  },
  {
    syntax: '```language\ncode\n```',
    description: 'Code block with syntax highlighting',
    example: '```javascript\nconst x = 5;\n```'
  },
  {
    syntax: '[Link Text](URL)',
    description: 'Create a link',
    example: '[Google](https://google.com)'
  },
  {
    syntax: '![Alt Text](URL)',
    description: 'Insert an image',
    example: '![Logo](image.png)'
  },
  {
    syntax: '- Item 1\n- Item 2',
    description: 'Unordered list',
    example: '- First item\n- Second item'
  },
  {
    syntax: '1. Item 1\n2. Item 2',
    description: 'Ordered list',
    example: '1. First step\n2. Second step'
  },
  {
    syntax: '> Quote',
    description: 'Create a blockquote',
    example: '> This is a quote'
  },
  {
    syntax: '---',
    description: 'Horizontal rule',
    example: '---'
  },
  {
    syntax: '| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |',
    description: 'Create a table',
    example: '| Name | Age |\n| ---- | --- |\n| John | 25  |'
  },
  {
    syntax: '~~strikethrough~~',
    description: 'Strikethrough text',
    example: '~~deleted text~~'
  }
];