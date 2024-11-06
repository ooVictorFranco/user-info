"use client";

import { useSearchParams } from 'next/navigation';
import { getTranslations, LanguageCode } from '../utils/languages';
import InfoContent from './InfoContent';

export default function InfoWrapper() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  // Type Guard para garantir que lang seja um LanguageCode
  const isValidLanguageCode = (lang: string): lang is LanguageCode => {
    return ['en', 'pt', 'es', 'fr', 'de', 'ar'].includes(lang);
  };

  const translations = getTranslations(isValidLanguageCode(lang) ? lang : 'en');

  return <InfoContent lang={lang} translations={translations} />;
}