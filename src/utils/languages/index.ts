import { enTranslations } from './en';
import { ptTranslations } from './pt';
import { esTranslations } from './es';
import { frTranslations } from './fr';
import { deTranslations } from './de';
import { arTranslations } from './ar';

// Definir um tipo que represente os códigos de idioma válidos
export type LanguageCode = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'ar';

export const languages = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'pt', label: 'Português', flag: '🇧🇷' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { value: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export const translations: Record<LanguageCode, { [key: string]: string }> = {
  en: enTranslations,
  pt: ptTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  ar: arTranslations,
};

export const getEnterButtonText = (langCode: LanguageCode): string => {
  const texts: Record<LanguageCode, string> = {
    en: 'Enter',
    pt: 'Entrar',
    es: 'Entrar',
    fr: 'Entrer',
    de: 'Eingeben',
    ar: 'دخول',
  };
  return texts[langCode] || 'Enter';
};

export const getTranslations = (langCode: LanguageCode) => {
  return translations[langCode] || translations['en'];
};