import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { uuidv4 } from "@objectiv/tracker-core";
import { ObjectivProvider, ReactTracker, useOnToggle } from "@objectiv/tracker-react";
import React, { useState } from 'react';

export const windowExists = () => typeof window !== 'undefined';

declare namespace cookiebot {
  class Cookiebot {
    consent: {
      statistics: boolean
    };
  }
}

declare const Cookiebot: cookiebot.Cookiebot;

const registerCookiebotEventListeners = (callback: EventListenerOrEventListenerObject) => {
  // Skip if we are in SSR
  if (!windowExists()) {
    return;
  }

  window.addEventListener('CookiebotOnAccept', callback, false);
  window.addEventListener('CookiebotOnDecline', callback, false);
}

const cookiebotConsentStatistics = (): boolean => {
  // Skip if we are in SSR
  if (!windowExists()) {
    return false;
  }

  return Cookiebot?.consent?.statistics ?? false;
}

function Root({children}) {
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(cookiebotConsentStatistics());
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Listen for 'CookiebotOnAccept' and if `Cookiebot.consent.statistics` changed, update state
  registerCookiebotEventListeners(function () {
    if (cookiebotStatisticsConsent !== cookiebotConsentStatistics()) {
      setCookiebotStatisticsConsent(cookiebotConsentStatistics());
    }
  })

  // Configure DeveloperTools based on `trackerConsoleEnabled` from siteConfig
  if (trackerConsoleEnabled && windowExists()) {
    require('@objectiv/developer-tools');
  }

  // Create React Tracker instance
  const tracker = new ReactTracker({
    endpoint: trackerEndPoint as string,
    applicationId: trackerApplicationId as string,
    active: cookiebotStatisticsConsent,
    generateGUID: uuidv4
  })

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instance
  useOnToggle(cookiebotStatisticsConsent, () => tracker.setActive(cookiebotStatisticsConsent))

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}

export default Root;