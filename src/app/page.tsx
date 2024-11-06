'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelect from '../components/LanguageSelect';
import { getEnterButtonText } from '../utils/languages';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const router = useRouter();

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleEnter = () => {
    router.push(`/info?lang=${selectedLanguage}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome / Bem-vindo / Bienvenido</h1>
      <div className="mb-4">
        <LanguageSelect onValueChange={handleLanguageChange} />
      </div>
      <button
        onClick={handleEnter}
        onKeyDown={handleKeyDown}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label={`${getEnterButtonText(selectedLanguage)} to view user information`}
      >
        {getEnterButtonText(selectedLanguage)}
      </button>
    </div>
  );
}