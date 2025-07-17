import React from 'react';
import { 
  FileText, 
  Eye, 
  Download, 
  Upload, 
  Palette, 
  Copy, 
  BarChart3,
  Sparkles,
  ArrowRight,
  Github,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Live Preview",
      description: "See your Markdown rendered in real-time as you type"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Autocomplete",
      description: "VS Code-like suggestions for Markdown syntax, snippets, and emojis"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Auto-Save",
      description: "Never lose your work with automatic localStorage persistence"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Options",
      description: "Download your work as .md or .html files"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "File Upload",
      description: "Upload existing Markdown files to continue editing"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Dark/Light Mode",
      description: "Switch between themes for comfortable writing"
    },
    {
      icon: <Copy className="w-6 h-6" />,
      title: "Copy HTML",
      description: "Copy rendered HTML to clipboard with one click"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Word Count",
      description: "Track your writing progress with real-time statistics"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Syntax Highlighting",
      description: "Beautiful code syntax highlighting in preview"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 dark:from-blue-500/20 dark:to-green-500/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <FileText className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Markdown Previewer
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                With Live Sync
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Write, preview, and export Markdown with ease. A modern, feature-rich editor 
              with real-time preview, syntax highlighting, and seamless file management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <a
                href="https://github.com/adamstosho/LiveMark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Github className="mr-2 w-5 h-5" />
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need for efficient Markdown editing and preview
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-24 bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Writing?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Jump into the editor and experience the power of live Markdown preview
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  markdown-previewer
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  # Welcome to Markdown
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Write **bold text** and *italic text* with ease
                </div>
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm">
                  `console.log("Hello, World!")`
                </div>
                <div className="text-blue-600 dark:text-blue-400 underline">
                  [Visit our docs](https://example.com)
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={onGetStarted}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <Zap className="mr-2 w-4 h-4" />
                  Try It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <FileText className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Markdown Previewer</span>
            </div>
            <p className="text-gray-400">
              Built by ART_Redox ©️ 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;