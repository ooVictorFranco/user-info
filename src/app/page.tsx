'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelect from '../components/LanguageSelect';
import AnimatedTitle from '../components/AnimatedTitle';
import { getEnterButtonText } from '../utils/languages';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const router = useRouter();
  // Remova ou comente a linha abaixo se não estiver usando translations
  // const translations = getTranslations(selectedLanguage);

  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  const handleLanguageChange = (value: string) => {
    console.log('Language changed to:', value);
    setSelectedLanguage(value);
  };

  const handleEnter = () => {
    console.log('Enter button clicked');
    router.push(`/info?lang=${selectedLanguage}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AnimatedTitle />
      <div className="mb-4 mt-8">
        <LanguageSelect onValueChange={handleLanguageChange} />
      </div>
      <button
        onClick={handleEnter}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
      >
        {getEnterButtonText(selectedLanguage)}
      </button>
    </div>
  );
}