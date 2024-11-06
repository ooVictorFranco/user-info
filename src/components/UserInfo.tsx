import React from 'react';
import AccordionItem from './Accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { UserInfo as UserInfoType } from '../utils/getUserInfo';

interface UserInfoProps {
  translations: { [key: string]: string };
  userInfo: UserInfoType;
}

const UserInfo: React.FC<UserInfoProps> = ({ translations, userInfo }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
      <h1 className="text-3xl font-bold mb-6">{translations.userInfo}</h1>

      <AccordionPrimitive.Root type="multiple" className="space-y-2">
        {/* Sistema */}
        <AccordionItem title={translations.systemInfo} value="system-info">
          <p><strong>{translations.os}:</strong> {userInfo.os}</p>
          <p><strong>{translations.browser}:</strong> {userInfo.browser} {userInfo.browserVersion}</p>
          <p><strong>{translations.platform}:</strong> {userInfo.platform}</p>
          <p><strong>{translations.cpuCores}:</strong> {userInfo.cpuCores}</p>
          <p><strong>{translations.ram}:</strong> {userInfo.ram}</p>
        </AccordionItem>

        {/* Informações de Exibição */}
        <AccordionItem title={translations.displayInfo} value="display-info">
          <p><strong>{translations.screenSize}:</strong> {userInfo.screenSize}</p>
          <p><strong>{translations.colorDepth}:</strong> {userInfo.colorDepth}</p>
          <p><strong>{translations.pixelRatio}:</strong> {userInfo.devicePixelRatio}</p>
        </AccordionItem>

        {/* Localização */}
        <AccordionItem title={translations.locationInfo} value="location-info">
          <p><strong>{translations.location}:</strong> {userInfo.location}</p>
          <p><strong>{translations.ip}:</strong> {userInfo.ip}</p>
          <p><strong>{translations.timezone}:</strong> {userInfo.timezone}</p>
          <p><strong>{translations.language}:</strong> {userInfo.language}</p>
        </AccordionItem>

        {/* Outras Informações */}
        <AccordionItem title={translations.otherInfo} value="other-info">
          <p><strong>{translations.datetime}:</strong> {userInfo.datetime}</p>
          <p><strong>{translations.touchSupport}:</strong> {userInfo.touchSupport ? translations.yes : translations.no}</p>
          <p><strong>{translations.cookiesEnabled}:</strong> {userInfo.cookiesEnabled ? translations.yes : translations.no}</p>
          <p><strong>{translations.doNotTrack}:</strong> {userInfo.doNotTrack || translations.notSet}</p>
        </AccordionItem>

        {/* Informações Avançadas */}
        <AccordionItem title={translations.advanced} value="advanced-info">
          <p><strong>{translations.deviceMemory}:</strong> {userInfo.deviceMemory}</p>
          <p><strong>{translations.connectionType}:</strong> {userInfo.connectionType}</p>
          <p><strong>{translations.prefersDarkMode}:</strong> {userInfo.prefersDarkMode ? translations.yes : translations.no}</p>
          <p><strong>{translations.touchPoints}:</strong> {userInfo.touchPoints}</p>
          <p><strong>{translations.webglVendor}:</strong> {userInfo.webglVendor}</p>
          <p><strong>{translations.webglRenderer}:</strong> {userInfo.webglRenderer}</p>
          <p><strong>{translations.battery}:</strong> {userInfo.battery.includes('Charging') ? translations.batteryCharging : translations.batteryNotCharging}</p>
          <p><strong>{translations.storageQuota}:</strong> {userInfo.storageQuota}</p>
          <p><strong>{translations.orientation}:</strong> {userInfo.orientation}</p>
          <p><strong>{translations.webRTC}:</strong> {userInfo.webRTC ? translations.yes : translations.no}</p>
          <p><strong>{translations.webWorker}:</strong> {userInfo.webWorker ? translations.yes : translations.no}</p>
          <p><strong>{translations.serviceWorker}:</strong> {userInfo.serviceWorker ? translations.yes : translations.no}</p>
          <p><strong>{translations.prefersReducedMotion}:</strong> {userInfo.prefersReducedMotion ? translations.yes : translations.no}</p>
        </AccordionItem>

        {/* User Agent */}
        <AccordionItem title={translations.fullUserAgent} value="user-agent">
          <p className="break-words">{userInfo.userAgent}</p>
        </AccordionItem>
      </AccordionPrimitive.Root>
    </div>
  );
};

export default UserInfo;