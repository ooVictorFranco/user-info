'use client'

import { useSearchParams } from 'next/navigation';
import InfoContent from '../../components/InfoContent';
import { getTranslations } from '../../utils/languages';

export default function Info() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const translations = getTranslations(lang);

  return <InfoContent lang={lang} translations={translations} />;
}