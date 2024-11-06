'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { languages, getTranslations } from '../../utils/languages';
import LoadingSpinner from '../../components/LoadingSpinner';
import UserInfo from '../../components/UserInfo';
import { useUserInfo } from '../../utils/getUserInfo';

export default function Info() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const selectedLanguage = languages.find(l => l.value === lang) || languages[0];
  const translations = getTranslations(lang);
  const userInfo = useUserInfo(selectedLanguage.value);

  useEffect(() => {
    if (userInfo) {
      setIsLoading(false);
    }
  }, [userInfo]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${selectedLanguage.direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      <h1 className="text-3xl font-bold mb-8">{translations.userInfo}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <UserInfo userInfo={userInfo} translations={translations} />
      )}
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
      >
        {translations.backButton || 'Back'}
      </button>
    </div>
  );
}