'use client';

import React, { useState } from 'react';

interface ColorOption {
  id: string;
  label: string;
  color: string;
}

interface ColorPickerProps {
  type?: 'text' | 'button';
  onSelectColor: (colorId: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ type = 'text', onSelectColor }) => {
  const [selected, setSelected] = useState<string | null>(null);
  
  const colorOptions: Record<string, ColorOption[]> = {
    text: [
      { id: 'primary', label: 'Primary', color: '#00703C' },
      { id: 'secondary', label: 'Secondary', color: '#4CAF7D' },
      { id: 'action', label: 'Action', color: '#F9C74F' },
      { id: 'black', label: 'Black', color: '#000000' },
    ],
    button: [
      { id: 'primary', label: 'Primary', color: '#00703C' },
      { id: 'secondary', label: 'Secondary', color: '#4CAF7D' },
      { id: 'action', label: 'Action', color: '#F9C74F' },
    ]
  };
  
  const options = colorOptions[type] || colorOptions.text;
  
  const handleSelect = (color: ColorOption) => {
    setSelected(color.id);
    onSelectColor(color.id);
  };
  
  return (
    <div className="p-4">
      <h3 className="text-base text-gray-500 mb-3">Color styles</h3>
      
      <div className="space-y-2">
        {options.map((color) => (
          <div 
            key={color.id}
            className={`flex items-center p-2 cursor-pointer rounded-md ${selected === color.id ? 'bg-gray-100' : ''}`}
            onClick={() => handleSelect(color)}
          >
            <div 
              className="w-5 h-5 rounded-full mr-3"
              style={{ backgroundColor: color.color }}
            ></div>
            <span>{color.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;