'use client'

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import UserInfo from '../../components/UserInfo';
import { getTranslations } from '../../utils/languages';

export default function Info() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = searchParams.get('lang') || 'en';
  const translations = getTranslations(lang);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-text">
      <h1 className="text-3xl font-bold mb-8">{translations.userInfo}</h1>
      <UserInfo lang={lang} translations={translations} />
      <button
        onClick={() => router.back()}
        className="mt-8 px-6 py-3 text-lg bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus-visible"
      >
        {translations.backButton}
      </button>
    </main>
  );
}