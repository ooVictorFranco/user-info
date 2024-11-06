import React from 'react';
import { languages } from '../utils/languages';

interface LanguageSelectProps {
  onValueChange: (value: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ onValueChange }) => {
  return (
    <select
      onChange={(e) => onValueChange(e.target.value)}
      className="px-4 py-2 bg-white text-gray-700 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.flag} {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;