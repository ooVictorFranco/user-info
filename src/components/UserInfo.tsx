'use client'

import React from 'react';
import { useUserInfo } from '../utils/getUserInfo';
import Skeleton from './Skeleton';

interface UserInfoProps {
  selectedLanguage: string;
  translations: Record<string, string>;
}

const UserInfo: React.FC<UserInfoProps> = ({ selectedLanguage, translations }) => {
  const userInfo = useUserInfo(selectedLanguage);

  if (!userInfo) {
    return <Skeleton />;
  }

  return (
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
  );
};

export default UserInfo;