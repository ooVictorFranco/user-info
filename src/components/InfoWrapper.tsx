'use client'

import { useSearchParams } from 'next/navigation';
import { getTranslations } from '../utils/languages';
import InfoContent from './InfoContent';

export default function InfoWrapper() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const translations = getTranslations(lang);

  return <InfoContent lang={lang} translations={translations} />;
}