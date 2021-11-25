import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getOrMakeTracker, getTrackerRepository, windowExists } from "@objectiv/tracker-browser";
import React, { useEffect, useState } from 'react';

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

  // This component can re-mount. Use `getOrMakeTracker` instead of `makeTracker`. It's safe to call multiple times.
  if (trackerEndPoint) {
    // Execute only if we are not in SSR
    if (windowExists()) {
      const trackerOptions = {
        endpoint: trackerEndPoint as string,
        console: trackerConsoleEnabled ? console : undefined
      }

      if (trackerApplicationId) {
        getOrMakeTracker({
          applicationId: trackerApplicationId as string,
          ...trackerOptions,
          active: cookiebotStatisticsConsent,
        });
      }
    }
  }

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instances
  useEffect(
    () => {
      // Skip if we are in SSR
      if (!windowExists()) {
        return;
      }
      if(cookiebotStatisticsConsent) {
        getTrackerRepository().activateAll();
      } else {
        getTrackerRepository().deactivateAll();
      }
    },
    [cookiebotStatisticsConsent] // execute every time `cookiebotStatisticsConsent` changes
  )

  return (
    <>
      {children}
    </>
  );
}

export default Root;