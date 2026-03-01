'use client';

import React, { useState } from 'react';

interface FontOption {
  id: string;
  label: string;
  size: string;
}

interface FontPickerProps {
  onSelectFont: (fontId: string) => void;
}

const FontPicker: React.FC<FontPickerProps> = ({ onSelectFont }) => {
  const [selected, setSelected] = useState<string | null>(null);
  
  const fontOptions: FontOption[] = [
    { id: 'h1', label: 'Heading H1', size: '32/Auto' },
    { id: 'h2', label: 'Heading H2', size: '22/Auto' },
    { id: 'h2-2', label: 'Heading H2-2', size: '18/Auto' },
    { id: 'bodyBold', label: 'Body Text Bold', size: '20/Auto' },
    { id: 'body', label: 'Body Text', size: '16/Auto' },
    { id: 'caption', label: 'Caption', size: '12/Auto' },
  ];
  
  const handleSelect = (font: FontOption) => {
    setSelected(font.id);
    onSelectFont(font.id);
  };
  
  return (
    <div className="p-4">
      <h3 className="text-base text-gray-500 mb-3">Text styles</h3>
      
      <div className="space-y-2">
        {fontOptions.map((font) => (
          <div 
            key={font.id}
            className={`flex items-center p-2 cursor-pointer rounded-md ${selected === font.id ? 'bg-gray-100' : ''}`}
            onClick={() => handleSelect(font)}
          >
            <div className="w-7 h-7 flex items-center justify-center mr-3 text-sm">
              Ag
            </div>
            <div className="flex items-center">
              <span className="font-medium">{font.label}</span>
              <span className="text-xs text-gray-500 ml-2"> · {font.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontPicker;