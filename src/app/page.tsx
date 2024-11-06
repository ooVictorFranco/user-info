'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelect from '../components/LanguageSelect';
import AnimatedTitle from '../components/AnimatedTitle';
import { getEnterButtonText } from '../utils/languages';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const router = useRouter();

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
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-text">
      <AnimatedTitle />
      <div className="mb-8 mt-8">
        <LanguageSelect onValueChange={handleLanguageChange} />
      </div>
      <button
        onClick={handleEnter}
        className="px-6 py-3 text-lg bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus-visible"
      >
        {getEnterButtonText(selectedLanguage)}
      </button>
    </main>
  );
}