import { useState, useEffect } from 'react';

export interface UserInfo {
  os: string;
  browser: string;
  browserVersion: string;
  location: string;
  ip: string;
  datetime: string;
  screenSize: string;
  colorDepth: string;
  devicePixelRatio: number;
  cpuCores: number | string;
  ram: string;
  language: string;
  timezone: string;
  touchSupport: boolean;
  cookiesEnabled: boolean;
  doNotTrack: string | null;
  platform: string;
  userAgent: string;
}

export const useUserInfo = (lang: string): UserInfo | null => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        const infoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const infoData = await infoResponse.json();

        const userAgent = window.navigator.userAgent;
        const os = getOS(userAgent);
        const browserInfo = getBrowser(userAgent);

        const formattedDateTime = new Intl.DateTimeFormat(lang, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: lang.startsWith('en'),
        }).format(new Date());

        setUserInfo({
          os,
          browser: browserInfo.name,
          browserVersion: browserInfo.version,
          location: `${infoData.city}, ${infoData.country_name}`,
          ip: ipData.ip,
          datetime: formattedDateTime,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          colorDepth: `${window.screen.colorDepth}-bit`,
          devicePixelRatio: window.devicePixelRatio,
          cpuCores: navigator.hardwareConcurrency || 'Unknown',
          ram: 'Unknown', // It's not possible to get RAM info from browser
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
          cookiesEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack,
          platform: navigator.platform,
          userAgent,
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
        setUserInfo(null);
      }
    };

    getUserInfo();
  }, [lang]);

  return userInfo;
};

function getOS(ua: string): string {
  if (ua.indexOf('Win') !== -1) return 'Windows';
  if (ua.indexOf('Mac') !== -1) return 'MacOS';
  if (ua.indexOf('Linux') !== -1) return 'Linux';
  if (ua.indexOf('Android') !== -1) return 'Android';
  if (ua.indexOf('like Mac') !== -1) return 'iOS';
  return 'Unknown OS';
}

function getBrowser(ua: string): { name: string; version: string } {
  const browserRegexes = [
    { name: 'Chrome', regex: /Chrome\/(\S+)/ },
    { name: 'Firefox', regex: /Firefox\/(\S+)/ },
    { name: 'Safari', regex: /Version\/(\S+).*Safari/ },
    { name: 'Opera', regex: /(Opera|OPR)\/(\S+)/ },
    { name: 'Edge', regex: /Edg\/(\S+)/ },
    { name: 'Internet Explorer', regex: /Trident.*rv:(\S+)/ },
  ];

  for (const browser of browserRegexes) {
    const match = ua.match(browser.regex);
    if (match) {
      return { name: browser.name, version: match[1] };
    }
  }

  return { name: 'Unknown Browser', version: 'Unknown' };
}