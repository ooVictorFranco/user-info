'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import { useUserInfo } from '../../utils/getUserInfo';
import { languages, getTranslations } from '../../utils/languages';

export default function Info() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = searchParams.get('lang') || 'en';
  const selectedLanguage = languages.find(l => l.value === lang) || languages[0];
  const translations = getTranslations(lang);
  
  const userInfo = useUserInfo(selectedLanguage.value);

  if (!userInfo) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${selectedLanguage.direction === 'rtl' ? 'rtl' : 'ltr'} p-4`}>
      <h1 className="text-3xl font-bold mb-8">{translations.userInfo}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">{translations.systemInfo}</h2>
        <p><strong>{translations.os}:</strong> {userInfo.os}</p>
        <p><strong>{translations.browser}:</strong> {userInfo.browser} {userInfo.browserVersion}</p>
        <p><strong>{translations.platform}:</strong> {userInfo.platform}</p>
        <p><strong>{translations.cpuCores}:</strong> {userInfo.cpuCores}</p>
        <p><strong>{translations.ram}:</strong> {userInfo.ram}</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">{translations.displayInfo}</h2>
        <p><strong>{translations.screenSize}:</strong> {userInfo.screenSize}</p>
        <p><strong>{translations.colorDepth}:</strong> {userInfo.colorDepth}</p>
        <p><strong>{translations.pixelRatio}:</strong> {userInfo.devicePixelRatio}</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">{translations.locationInfo}</h2>
        <p><strong>{translations.location}:</strong> {userInfo.location}</p>
        <p><strong>{translations.ip}:</strong> {userInfo.ip}</p>
        <p><strong>{translations.language}:</strong> {userInfo.language}</p>
        <p><strong>{translations.timezone}:</strong> {userInfo.timezone}</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">{translations.otherInfo}</h2>
        <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
        <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
        <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>
        <p><strong>{translations.doNotTrack}:</strong> {userInfo.doNotTrack || translations.notSet}</p>

        <h2 className="text-xl font-semibold mt-6 mb-4">{translations.fullUserAgent}</h2>
        <p className="break-words">{userInfo.userAgent}</p>
      </div>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {translations.backButton || 'Back'}
      </button>
    </div>
  );
}