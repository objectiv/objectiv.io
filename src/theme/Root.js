import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig.customFields;

  useEffect(
    () => {
      makeTracker({
        applicationId: trackerApplicationId,
        endpoint: trackerEndPoint,
        active: Cookiebot.consent.statistics,
        console: trackerConsoleEnabled ? console : undefined
      });

      window.addEventListener('CookiebotOnAccept', function (e) {
        // Activate tracker, which sets statistics cookies
        getTracker().setActive(Cookiebot.consent.statistics);
      }, false);
    },
    [] // no dependencies => no side effects on re-render
  )
  
  return (
    <>
      {children}
    </>
  );
}

export default Root;
