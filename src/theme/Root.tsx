import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";
import React, { useState } from 'react';
import { AdsTracking } from "../objectiv/AdsTracking";
import { CookieBanner, getCookieConsent } from "../objectiv/CookieBanner";
import { windowExists } from "../objectiv/windowExists";

function Root({children}) {
  const [tracker, setTracker] = useState<ReactTracker>();
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Configure DeveloperTools based on `trackerConsoleEnabled` from siteConfig
  if (trackerConsoleEnabled && windowExists) {
    require('@objectiv/developer-tools');
  }

  // Create React Tracker instance once
  if (!tracker) {
    setTracker(new ReactTracker({
      endpoint: trackerEndPoint as string,
      applicationId: trackerApplicationId as string,
      active: getCookieConsent() === true,
    }))
  }

  return (
    <CookieBanner onConsentChange={(cookieConsent) => tracker.setActive(cookieConsent)}>
      <AdsTracking />
      <ObjectivProvider tracker={tracker}>
        {children}
      </ObjectivProvider>
    </CookieBanner>
  );
}

export default Root;