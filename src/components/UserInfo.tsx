import React from 'react';
import { UserInfo as UserInfoType } from '../utils/getUserInfo';

interface UserInfoProps {
  translations: { [key: string]: string };
  userInfo: UserInfoType;
}

export const UserInfo: React.FC<UserInfoProps> = ({ translations, userInfo }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
      <h2 className="text-2xl font-semibold mb-4">{translations.systemInfo}</h2>
      <p><strong>{translations.os}:</strong> {userInfo.os}</p>
      <p><strong>{translations.browser}:</strong> {userInfo.browser} {userInfo.browserVersion}</p>
      <p><strong>{translations.platform}:</strong> {userInfo.platform}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.displayInfo}</h2>
      <p><strong>{translations.screenSize}:</strong> {userInfo.screenSize}</p>
      <p><strong>{translations.colorDepth}:</strong> {userInfo.colorDepth}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.otherInfo}</h2>
      <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
      <p><strong>{translations.timezone}:</strong> {userInfo.timezone}</p>
      <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
      <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.otherInfo}</h2>
      <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
      <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
      <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.otherInfo}</h2>
      <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
      <p><strong>{translations.deviceMemory}:</strong> {userInfo.deviceMemory}</p>
      <p><strong>{translations.connectionType}:</strong> {userInfo.connectionType}</p>
      <p><strong>{translations.prefersDarkMode}:</strong> {userInfo.prefersDarkMode ? translations.yes : translations.no}</p>
      <p><strong>{translations.touchPoints}:</strong> {userInfo.touchPoints}</p>
      <p><strong>{translations.webglVendor}:</strong> {userInfo.webglVendor}</p>
      <p><strong>{translations.webglRenderer}:</strong> {userInfo.webglRenderer}</p>
      <p><strong>{translations.battery}:</strong> {userInfo.battery}</p>
      <p><strong>{translations.storageQuota}:</strong> {userInfo.storageQuota}</p>
      <p><strong>{translations.orientation}:</strong> {userInfo.orientation}</p>
      <p><strong>{translations.webRTC}:</strong> {userInfo.webRTC ? translations.yes : translations.no}</p>
      <p><strong>{translations.webWorker}:</strong> {userInfo.webWorker ? translations.yes : translations.no}</p>
      <p><strong>{translations.serviceWorker}:</strong> {userInfo.serviceWorker ? translations.yes : translations.no}</p>
      <p><strong>{translations.prefersReducedMotion}:</strong> {userInfo.prefersReducedMotion ? translations.yes : translations.no}</p>
      <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
      <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>
      <p><strong>{translations.doNotTrack}:</strong> {userInfo.doNotTrack || translations.notSet}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{translations.fullUserAgent}</h2>
      <p className="break-words">{userInfo.userAgent}</p>
    </div>
  );
};

export default UserInfo;