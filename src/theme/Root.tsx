// noinspection JSUnusedGlobalSymbols

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, getTrackerRepository, makeTracker, setDefaultTracker } from "@objectiv/tracker-browser";
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "@docusaurus/router";

declare namespace cookiebot {
  class Cookiebot {
    consent: {
      statistics: boolean
    };
  }
}

declare const Cookiebot: cookiebot.Cookiebot;

function Root({children}) {
  const [cookiebotStatisticsConsent, setCookiebotStatisticsConsent] = useState<boolean>(Cookiebot.consent.statistics ?? false);
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};
  const isDocs = useRouteMatch("/docs/") !== null;

  // Listen for 'CookiebotOnAccept' and if `Cookiebot.consent.statistics` changed, update state
  window.addEventListener('CookiebotOnAccept', function () {
    if (cookiebotStatisticsConsent !== Cookiebot.consent.statistics) {
      setCookiebotStatisticsConsent(Cookiebot.consent.statistics);
    }
  }, false);

  // This Effect is responsible for creating our Tracker Instances. It runs only once on mount
  useEffect(
    () => {
      // In DEV Mode Fast Refresh may rerun this hook regardless of its deps. This does not happen in production mode.
      const trackersExist = getTrackerRepository().trackersMap.size !== 0;
      if (trackerEndPoint && !trackersExist) {
        const trackerOptions = {
          endpoint: trackerEndPoint as string,
          console: trackerConsoleEnabled ? console : undefined
        }

        if (trackerApplicationId) {
          makeTracker({
            applicationId: trackerApplicationId as string,
            ...trackerOptions,
            active: cookiebotStatisticsConsent,
          });
        }

        if (trackerDocsApplicationId) {
          makeTracker({
            applicationId: trackerDocsApplicationId as string,
            ...trackerOptions,
            active: cookiebotStatisticsConsent,
          });
        }
      }
    },
    [] // execute once on Root mount
  )

  // This Effect monitors the `cookiebotStatisticsConsent` and activates or deactivates our Tracker instances
  useEffect(
    () => {
      if(cookiebotStatisticsConsent) {
        getTrackerRepository().activateAll();
      } else {
        getTrackerRepository().deactivateAll();
      }
    },
    [cookiebotStatisticsConsent] // execute every time `cookiebotStatisticsConsent` changes
  )

  // This Effect monitor the `isDocs` state and when it changes it switches the default Tracker instance
  useEffect(
    () => {
      setDefaultTracker((!isDocs ? trackerApplicationId : trackerDocsApplicationId) as string);
    },
    [isDocs] // execute every time `match` changes
  )

  return (
    <>
      {children}
    </>
  );
}

export default Root;