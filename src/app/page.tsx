"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LanguageSelect from '../components/LanguageSelect';
import AnimatedTitle from '../components/AnimatedTitle';
import { getEnterButtonText, LanguageCode } from '../utils/languages';

export default function Home() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value as LanguageCode);
  };

  const handleEnter = () => {
    // Redireciona para a página de informações com o idioma selecionado
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
        className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {getEnterButtonText(selectedLanguage)}
      </button>
    </div>
  );
}