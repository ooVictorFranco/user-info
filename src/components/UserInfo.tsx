import React from 'react';
import { useUserInfo } from '../utils/getUserInfo';

interface UserInfoProps {
  lang: string;
  translations: { [key: string]: string };
}

const UserInfo: React.FC<UserInfoProps> = ({ lang, translations }) => {
  const userInfo = useUserInfo(lang);

  if (!userInfo) {
    return <div>{translations.loading || 'Loading...'}</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
      <h2 className="text-2xl font-semibold mb-4">{translations.systemInfo}</h2>
      <p><strong>{translations.os}:</strong> {userInfo.os}</p>
      <p><strong>{translations.browser}:</strong> {userInfo.browser} {userInfo.browserVersion}</p>
      <p><strong>{translations.platform}:</strong> {userInfo.platform}</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.displayInfo}</h2>
      <p><strong>{translations.screenSize}:</strong> {userInfo.screenSize}</p>
      <p><strong>{translations.colorDepth}:</strong> {userInfo.colorDepth}</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.locationInfo}</h2>
      <p><strong>{translations.location}:</strong> {userInfo.location}</p>
      <p><strong>{translations.ip}:</strong> {userInfo.ip}</p>
      <p><strong>{translations.language}:</strong> {userInfo.language}</p>
      <p><strong>{translations.timezone}:</strong> {userInfo.timezone}</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.otherInfo}</h2>
      <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
      <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
      <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>
    </div>
  );
};

export default UserInfo;