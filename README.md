# Markdown Previewer with Live Sync

## Introduction

Markdown Previewer with Live Sync is a modern web application that lets you write, preview, and export Markdown documents easily. It provides a real-time preview, smart suggestions, and many helpful features to make writing Markdown simple and enjoyable.

## Problem It Solves

Writing Markdown can be confusing, especially for beginners. Switching between writing and previewing, remembering syntax, and managing files can slow you down. This app solves these problems by giving you:
- A live preview as you type
- Helpful suggestions for Markdown syntax and emojis
- Easy file management (upload, download, export)
- A clean, distraction-free interface

## Main Features

### 1. **Live Preview**
See your Markdown rendered instantly as you type. The preview updates in real-time, so you always know how your document will look.

### 2. **Smart Autocomplete**
Get suggestions for Markdown syntax, snippets, and emojis as you write. Use the Tab or Enter key to accept suggestions, and Esc to dismiss them. This makes writing faster and helps you remember Markdown syntax.

### 3. **Auto-Save**
Your work is automatically saved in your browser. You never have to worry about losing your progress, even if you close the tab.

### 4. **Export Options**
Download your document as a `.md` (Markdown) or `.html` (web page) file with one click. This makes it easy to share or use your work elsewhere.

### 5. **File Upload**
Upload existing Markdown files to continue editing them. This is helpful if you want to update or improve documents you already have.

### 6. **Dark/Light Mode**
Switch between dark and light themes for comfortable writing, day or night. Just click the theme toggle button in the header.

### 7. **Copy HTML**
Copy the rendered HTML version of your Markdown to the clipboard with one click. This is useful for using your content in blogs or websites.

### 8. **Word Count and Statistics**
See real-time statistics like word count and character count at the bottom of the editor. This helps you track your writing progress.

### 9. **Syntax Highlighting**
Code blocks in your Markdown are beautifully highlighted in the preview, making code easy to read and understand.

### 10. **Markdown Cheatsheet**
Access a handy Markdown cheatsheet anytime by clicking the help icon in the header. This helps you quickly find the syntax you need.

## How to Use and Navigate the App

1. **Landing Page**: When you open the app, you see a welcome page with a "Get Started" button. Click it to go to the editor.
2. **Editor Page**: The screen is split into two panels:
   - **Left Panel**: Write your Markdown here. As you type, suggestions may appear. Use Tab/Enter to accept, Esc to dismiss.
   - **Right Panel**: See your live preview. The preview updates instantly as you write.
3. **Header Actions**:
   - **Upload**: Click the upload icon to load a Markdown file from your computer.
   - **Download**: Click the download icon to save your work as `.md` or `.html`.
   - **Copy HTML**: Click the copy icon to copy the HTML version of your document.
   - **Cheatsheet**: Click the help icon to open the Markdown cheatsheet.
   - **Clear**: Click the trash icon to clear the editor (you will be asked to confirm).
   - **Theme Toggle**: Click the sun/moon icon to switch between light and dark mode.
   - **Back**: Click the app name to return to the landing page.
4. **Auto-Save**: Your work is saved automatically. You can close and reopen the app without losing your progress.
5. **Mobile Friendly**: The app works well on both desktop and mobile devices.


### Preview of the App Interface
![screenshot](/public/screenshot/screencapture-localhost-3000-2025-07-17-20_52_10.png)

This is the landing page for the app

![screenshot](/public/screenshot/screencapture-localhost-3000-editor-2025-07-17-20_57_01.png)

This is the editor page, showing the default code, which can actually be highlighted and clear or deleted to insert new code

![screenshot](/public/screenshot/screencapture-localhost-3000-editor-2025-07-17-21_06_11.png)

This is the template of the codes used for testing, note that it will also show pics if added

![screenshot](/public/screenshot/screencapture-localhost-3000-editor-2025-07-17-21_06_54.png)
This is the markdown cheatsheets

![screenshot](/public/screenshot/screencapture-localhost-3000-editor-2025-07-17-21_07_16.png)

This shows the header containing different functionalities including delete, copy, uploading or downloading of files in html or .md

![screenshot](/public/screenshot/image%20testing.png)
Proper testing of the app using both text and images

![screenshot](/public/screenshot/image%20testing.png)

This is to show the image insertion functionality of the app..


## Tools and Technologies Used

- **React**: For building the user interface
- **TypeScript**: For type safety and better code quality
- **Vite**: For fast development and build
- **Tailwind CSS**: For modern, responsive styling
- **Marked**: For parsing Markdown
- **DOMPurify**: For safe HTML rendering
- **highlight.js**: For code syntax highlighting
- **React Router**: For navigation between pages
- **Lucide React**: For beautiful icons

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adamstosho/LiveMark.git
   cd your-repo
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and go to `http://localhost:5173` (or the URL shown in your terminal).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Enjoy writing Markdown with ease and confidence! 