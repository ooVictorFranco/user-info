import React, { useState, useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { languages } from '../utils/languages';
import { useIsMobile } from '../hooks/useIsMobile';

interface LanguageSelectProps {
  onValueChange: (value: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ onValueChange }) => {
  const [isMobileState, setIsMobileState] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  if (isMobileState) {
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
  }

  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="inline-flex items-center justify-center rounded px-4 py-2 text-sm leading-none gap-1 bg-white text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-48" aria-label="Select a language">
        <Select.Value placeholder="Select a language" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            {languages.map((language) => (
              <Select.Item
                key={language.value}
                value={language.value}
                className="relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md select-none hover:bg-blue-100 focus:bg-blue-100 focus:outline-none cursor-pointer"
              >
                <Select.ItemText>
                  <span className="mr-2" role="img" aria-label={`Flag for ${language.label}`}>
                    {language.flag}
                  </span>
                  {language.label}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default LanguageSelect;