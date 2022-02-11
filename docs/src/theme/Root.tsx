import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HttpContextPlugin } from '@objectiv/plugin-http-context';
import { PathContextFromURLPlugin } from '@objectiv/plugin-path-context-from-url';
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import {
  getLocationHref,
  getOrMakeTracker,
  getTrackerRepository,
  makeDefaultPluginsList,
  TrackerPlugins,
  windowExists
} from "@objectiv/tracker-browser";
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
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(cookiebotConsentStatistics());
  const { siteConfig } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

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
        applicationId: trackerDocsApplicationId as string,
        endpoint: trackerEndPoint as string,
        console: trackerConsoleEnabled ? console : undefined
      }

      const trackerPlugins = new TrackerPlugins({
        plugins: [
          ...makeDefaultPluginsList(trackerOptions),
          new HttpContextPlugin(trackerOptions),
          new PathContextFromURLPlugin(trackerOptions),
          new RootLocationContextFromURLPlugin({
            ...trackerOptions,
            idFactoryFunction: () => {
              const secondSlug = location.pathname.split('/')[2];

              return secondSlug ? secondSlug.trim().toLowerCase() : 'home';
            }
          })
        ],
      });

      if (trackerDocsApplicationId) {
        getOrMakeTracker({
          ...trackerOptions,
          plugins: trackerPlugins,
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