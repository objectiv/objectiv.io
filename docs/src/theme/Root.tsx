import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ObjectivProvider, ReactTracker, useOnChange } from "@objectiv/tracker-react";
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
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
  const [tracker, setTracker] = useState<ReactTracker>();
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(cookiebotConsentStatistics());
  const { siteConfig } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

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

  // Create React Tracker instance once
  if (!tracker) {
    setTracker(
      new ReactTracker({
        endpoint: trackerEndPoint as string,
        applicationId: trackerDocsApplicationId as string,
        active: cookiebotStatisticsConsent,
        plugins: [
          new RootLocationContextFromURLPlugin({
            idFactoryFunction: () => {
              const secondSlug = location.pathname.split('/')[2];

              return secondSlug ? secondSlug.trim().toLowerCase() : 'home';
            }
          })
        ]
      })
    )
  }

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instances
  useOnChange(cookiebotStatisticsConsent, () => tracker.setActive(cookiebotStatisticsConsent))

  return (
    <ObjectivProvider tracker={tracker}>
      {children}
    </ObjectivProvider>
  );
}

export default Root;