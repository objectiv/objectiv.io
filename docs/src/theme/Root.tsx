import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ObjectivProvider, ReactTracker, trackSuccessEvent } from "@objectiv/tracker-react";
import { RootLocationContextFromURLPlugin } from '@objectiv/plugin-root-location-context-from-url';
import React, { useState } from 'react';
import { CookieBanner, getCookieConsent } from "../objectiv/CookieBanner";
import { windowExists } from "../objectiv/windowExists";

function Root({children}) {
  const [tracker, setTracker] = useState<ReactTracker>();
  const { siteConfig } = useDocusaurusContext();
  const { trackerDocsApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Configure DeveloperTools based on `trackerConsoleEnabled` from siteConfig
  if (trackerConsoleEnabled && windowExists) {
    require('@objectiv/developer-tools');
  }

  // Create React Tracker instance once
  if (!tracker) {
    setTracker(new ReactTracker({
      endpoint: trackerEndPoint as string,
      applicationId: trackerDocsApplicationId as string,
      active: getCookieConsent() === true,
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

  // set tracker active or inactive based on cookie consent
  function setTrackerCookieConsent(cookieConsent) {
    tracker.setActive(cookieConsent);
    if (cookieConsent === true) {
      // track SuccessEvent for accepting the cookie
      trackSuccessEvent({tracker: tracker, message: 'Cookie Accepted'});
    }
  }

  return (
    <CookieBanner onConsentChange={(cookieConsent) => setTrackerCookieConsent(cookieConsent)}>
      <ObjectivProvider tracker={tracker}>
        {children}
      </ObjectivProvider>
    </CookieBanner>
  );
}

export default Root;