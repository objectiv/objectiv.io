import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import { getLocationHref, getOrMakeTracker, getTrackerRepository, windowExists } from "@objectiv/tracker-browser";
import { NoopConsoleImplementation, TrackerConsole } from "@objectiv/tracker-core";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { scrollToAnchor } from '../components/scroll-to-anchor/scrollToAnchor';

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
  const [trackerInitialized, setTrackerInitialized] = useState<boolean>(false);
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(cookiebotConsentStatistics());
  const { siteConfig } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Listen for 'CookiebotOnAccept' and if `Cookiebot.consent.statistics` changed, update state
  registerCookiebotEventListeners(function () {
    if (cookiebotStatisticsConsent !== cookiebotConsentStatistics()) {
      setCookiebotStatisticsConsent(cookiebotConsentStatistics());
    }
  })

  // Initialize Tracker only if we have all required configuration variables, and we are not in SSR.
  if (!trackerInitialized && trackerEndPoint && trackerDocsApplicationId && trackerEndPoint && windowExists()) {

    // Configure TrackerConsole based on `trackerConsoleEnabled` from siteConfig.
    TrackerConsole.setImplementation(trackerConsoleEnabled ? console : NoopConsoleImplementation);

    // This component can re-mount. Use `getOrMakeTracker` instead of `makeTracker`. It's safe to call multiple times.
    getOrMakeTracker({
      applicationId: trackerDocsApplicationId as string,
      endpoint: trackerEndPoint as string,
      active: cookiebotStatisticsConsent,
      plugins: [
        new RootLocationContextFromURLPlugin({
          idFactoryFunction: () => {
            const secondSlug = location.pathname.split('/')[2];

            return secondSlug ? secondSlug.trim().toLowerCase() : 'home';
          }
        })
      ]
    });

    setTrackerInitialized(true);
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

  // Ignore if we are in SSR
  const locationHref = getLocationHref();
  useLayoutEffect(() => {
    if (!locationHref) {
      return;
    }
    scrollToAnchor();
  }, [locationHref]);

  return (
    <>
      {children}
    </>
  );
}

export default Root;