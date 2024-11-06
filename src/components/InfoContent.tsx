import React from 'react';
import UserInfo from './UserInfo';
import LoadingSpinner from './LoadingSpinner';
import { useUserInfo } from '../utils/getUserInfo';

interface InfoContentProps {
  lang: string;
  translations: { [key: string]: string };
}

const InfoContent: React.FC<InfoContentProps> = ({ lang, translations }) => {
  const userInfo = useUserInfo(lang);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-text">
      <h1 className="text-3xl font-bold mb-8">{translations.userInfo}</h1>
      {!userInfo ? (
        <LoadingSpinner />
      ) : (
        <UserInfo lang={lang} translations={translations} />
      )}
      <button
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-3 text-lg bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus-visible"
      >
        {translations.backButton}
      </button>
    </div>
  );
};

export default InfoContent;