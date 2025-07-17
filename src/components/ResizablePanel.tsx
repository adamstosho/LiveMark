import React, { useState, useCallback } from 'react';
import { GripVertical } from 'lucide-react';

interface ResizablePanelProps {
  children: [React.ReactNode, React.ReactNode];
  defaultLeftWidth?: number;
  minLeftWidth?: number;
  maxLeftWidth?: number;
}

const ResizablePanel: React.FC<ResizablePanelProps> = ({
  children,
  defaultLeftWidth = 50,
  minLeftWidth = 25,
  maxLeftWidth = 75
}) => {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const container = document.getElementById('resizable-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - rect.left) / rect.width) * 100;
    
    if (newLeftWidth >= minLeftWidth && newLeftWidth <= maxLeftWidth) {
      setLeftWidth(newLeftWidth);
    }
  }, [isDragging, minLeftWidth, maxLeftWidth]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div id="resizable-container" className="flex h-full">
      <div
        className="bg-gray-50 dark:bg-slate-700 border-r border-gray-200 dark:border-slate-600"
        style={{ width: `${leftWidth}%` }}
      >
        {children[0]}
      </div>
      
      <div
        className="w-1 bg-gray-200 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-500 cursor-col-resize flex items-center justify-center group transition-colors"
        onMouseDown={handleMouseDown}
      >
        <GripVertical className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      </div>
      
      <div
        className="bg-white dark:bg-slate-800"
        style={{ width: `${100 - leftWidth}%` }}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default ResizablePanel;