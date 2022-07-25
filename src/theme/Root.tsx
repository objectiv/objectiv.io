import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ObjectivProvider, ReactTracker, useOnChange } from "@objectiv/tracker-react";
import React, { createContext, useState } from 'react';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export const windowExists = () => typeof window !== 'undefined';

const getCookieConsent = (): boolean => {
  // Skip if we are in SSR
  if (!windowExists()) {
    return false;
  }

  return Boolean(getCookieConsentValue());
}

// Create a context provider so pages can interact with the cookie banner instance here
export const CookieBannerContext = createContext({
  showCookieConsentBanner: () => {}
});


function Root({children}) {
  const [showCookieConsentBanner, setShowCookieConsentBanner] = useState<undefined | 'show'>();
  const [tracker, setTracker] = useState<ReactTracker>();
  const [cookieConsent, setCookieConsent] = useState<boolean>(getCookieConsent());
  const { siteConfig } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig?.customFields ?? {};

  // Configure DeveloperTools based on `trackerConsoleEnabled` from siteConfig
  if (trackerConsoleEnabled && windowExists()) {
    require('@objectiv/developer-tools');
  }

  // Create React Tracker instance once
  if (!tracker) {
    setTracker(new ReactTracker({
      endpoint: trackerEndPoint as string,
      applicationId: trackerApplicationId as string,
      active: cookieConsent,
    }))
  }

  useOnChange(cookieConsent, () => tracker.setActive(cookieConsent))

  return (
    <ObjectivProvider tracker={tracker}>
      {/* @ts-ignore */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        setDeclineCookie={true}
        onAccept={() => {
          setCookieConsent(true);
          setShowCookieConsentBanner(undefined);
        }}
        onDecline={() => {
          setCookieConsent(false);
          setShowCookieConsentBanner(undefined);
        }}
        visible={showCookieConsentBanner}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <CookieBannerContext.Provider value={{ showCookieConsentBanner: () => setShowCookieConsentBanner('show') }}>
        {children}
      </CookieBannerContext.Provider>
    </ObjectivProvider>
  );
}

export default Root;