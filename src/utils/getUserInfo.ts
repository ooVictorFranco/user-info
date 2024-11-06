import { useState, useEffect } from 'react';

// Declarar manualmente o tipo BatteryManager
interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: (() => void) | null;
  onchargingtimechange: (() => void) | null;
  ondischargingtimechange: (() => void) | null;
  onlevelchange: (() => void) | null;
}

// Declarar manualmente o tipo Navigator para APIs adicionais
interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType: string;
  };
  getBattery?: () => Promise<BatteryManager>;
}

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
  timezoneOffset: string;
  touchSupport: boolean;
  cookiesEnabled: boolean;
  doNotTrack: string | null;
  platform: string;
  userAgent: string;
  deviceMemory: number | 'Unknown';
  connectionType: string;
  prefersDarkMode: boolean;
  touchPoints: number;
  webglVendor: string;
  webglRenderer: string;
  battery: string;
  storageQuota: string;
  orientation: string;
  webRTC: boolean;
  webWorker: boolean;
  serviceWorker: boolean;
  prefersReducedMotion: boolean;
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

        const now = new Date();
        const timezoneOffset = getTimezoneOffset(now);
        const formattedDateTime = new Intl.DateTimeFormat(lang, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: lang.startsWith('en'),
        }).format(now);

        const extendedNavigator = navigator as NavigatorExtended;
        const deviceMemory: number | 'Unknown' = extendedNavigator.deviceMemory || 'Unknown';
        const connectionType: string = extendedNavigator.connection?.effectiveType || 'Unknown';
        const prefersDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const touchPoints: number = navigator.maxTouchPoints;

        let webglVendor = 'Unknown';
        let webglRenderer = 'Unknown';
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            webglVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) as string;
            webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;
          }
        }

        let batteryInfo = 'Not available';
        if (extendedNavigator.getBattery) {
          const battery = await extendedNavigator.getBattery();
          batteryInfo = `${(battery.level * 100).toFixed(2)}%, ${battery.charging ? 'Charging' : 'Not charging'}`;
        }

        let storageQuota = 'Unknown';
        if ('storage' in navigator && 'estimate' in navigator.storage) {
          const estimate = await navigator.storage.estimate();
          storageQuota = `${((estimate.usage || 0) / (1024 * 1024)).toFixed(2)} MB / ${((estimate.quota || 0) / (1024 * 1024)).toFixed(2)} MB`;
        }

        setUserInfo({
          os,
          browser: browserInfo.name,
          browserVersion: browserInfo.version,
          location: `${infoData.city}, ${infoData.country_name}`,
          ip: ipData.ip,
          datetime: `${formattedDateTime} (${timezoneOffset})`,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          colorDepth: `${window.screen.colorDepth}-bit`,
          devicePixelRatio: window.devicePixelRatio,
          cpuCores: navigator.hardwareConcurrency || 'Unknown',
          ram: 'Unknown',
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          timezoneOffset,
          touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
          cookiesEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack,
          platform: navigator.platform,
          userAgent,
          deviceMemory,
          connectionType,
          prefersDarkMode,
          touchPoints,
          webglVendor,
          webglRenderer,
          battery: batteryInfo,
          storageQuota,
          orientation: screen.orientation ? screen.orientation.type : 'Unknown',
          webRTC: 'RTCPeerConnection' in window,
          webWorker: 'Worker' in window,
          serviceWorker: 'serviceWorker' in navigator,
          prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
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
    { name: 'Opera', regex: /(Opera|OPR)\/([\d\.]+)/ },
    { name: 'Edge', regex: /Edg\/([\d\.]+)/ },
    { name: 'Chrome', regex: /Chrome\/([\d\.]+)/ },
    { name: 'Firefox', regex: /Firefox\/([\d\.]+)/ },
    { name: 'Safari', regex: /Version\/([\d\.]+).*Safari/ },
    { name: 'Internet Explorer', regex: /Trident.*rv:([\d\.]+)/ },
  ];

  for (const browser of browserRegexes) {
    const match = ua.match(browser.regex);
    if (match) {
      if (browser.name === 'Chrome' && ua.indexOf('Chromium') > -1) {
        return { name: 'Chromium', version: match[1] };
      }
      return { name: browser.name, version: match[1] };
    }
  }

  if (ua.indexOf('Chromium') > -1) {
    const match = ua.match(/Chromium\/([\d\.]+)/);
    if (match) {
      return { name: 'Chromium-based', version: match[1] };
    }
  }

  return { name: 'Unknown Browser', version: 'Unknown' };
}

function getTimezoneOffset(date: Date): string {
  const offset = -date.getTimezoneOffset();
  const hours = Math.abs(Math.floor(offset / 60));
  const minutes = Math.abs(offset % 60);
  const sign = offset >= 0 ? '+' : '-';
  return `GMT${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}