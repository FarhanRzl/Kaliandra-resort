'use client';

import React, { useState } from 'react';
import FontPicker from './FontPicker';
import ColorPicker from './ColorPicker';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { useTheme } from '@/context/ThemeContext';

interface ThemeUpdates {
  font?: string | null;
  textColor?: string | null;
  buttonColor?: string | null;
}

interface ThemeSelectorProps {
  onApplyTheme?: (theme: ThemeUpdates) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onApplyTheme }) => {
  const [activeTab, setActiveTab] = useState<'font' | 'textColor' | 'buttonColor'>('font');
  const [selectedFont, setSelectedFont] = useState<string | null>(null);
  const [selectedTextColor, setSelectedTextColor] = useState<string | null>(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState<string | null>(null);
  
  const handleApply = () => {
    const themeUpdates: ThemeUpdates = {
      font: selectedFont,
      textColor: selectedTextColor,
      buttonColor: selectedButtonColor
    };
    
    if (onApplyTheme) {
      onApplyTheme(themeUpdates);
    }
  };
  
  const hasChanges = selectedFont || selectedTextColor || selectedButtonColor;
  
  return (
    <div className="border rounded-lg shadow-sm max-w-md mx-auto bg-white">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Theme Selector</h2>
      </div>
      
      <div className="border-b">
        <div className="flex">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'font' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('font')}
            type="button"
          >
            Typography
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'textColor' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('textColor')}
            type="button"
          >
            Text Color
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'buttonColor' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('buttonColor')}
            type="button"
          >
            Button Color
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {activeTab === 'font' && (
          <FontPicker onSelectFont={setSelectedFont} />
        )}
        
        {activeTab === 'textColor' && (
          <ColorPicker type="text" onSelectColor={setSelectedTextColor} />
        )}
        
        {activeTab === 'buttonColor' && (
          <ColorPicker type="button" onSelectColor={setSelectedButtonColor} />
        )}
      </div>
      
      {/* Preview section */}
      <div className="p-4 border-t">
        {activeTab === 'font' && selectedFont && (
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <Typography variant={selectedFont as any}>
              Sample Text with {selectedFont} style
            </Typography>
          </div>
        )}
        
        {activeTab === 'textColor' && selectedTextColor && (
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <Typography color={selectedTextColor as any} variant="bodyBold">
              Sample Text with {selectedTextColor} color
            </Typography>
          </div>
        )}
        
        {activeTab === 'buttonColor' && selectedButtonColor && (
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <Button variant={selectedButtonColor as any}>
              {selectedButtonColor.charAt(0).toUpperCase() + selectedButtonColor.slice(1)} Button
            </Button>
          </div>
        )}
        
        <button
          className="w-full bg-primary text-white py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!hasChanges}
          onClick={handleApply}
          type="button"
        >
          Apply Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;