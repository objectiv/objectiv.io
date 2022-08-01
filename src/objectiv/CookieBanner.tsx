/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import { Link } from 'react-router-dom';
import { windowExists } from "./windowExists";

// Wrapper around getCookieConsentValue to ensure it will run only in a browser and to map its values
export const getCookieConsent = (): undefined | boolean =>  {
  if(!windowExists) {
    return false;
  }

  const cookieConsent = getCookieConsentValue();

  if(cookieConsent === undefined) {
    return undefined;
  }

  // Ignore cookies that don't contain either 'true' or 'false' (these are from Cookiebot)
  if(cookieConsent !== 'true' && cookieConsent !== 'false') {
    return undefined;
  }

  return cookieConsent === 'true';
}

// Create a context provider so pages can interact with the cookie banner instance here
export const CookieConsentContext = createContext({
  cookieConsent: false,
  resetCookieConsent: () => {}
});

// The props of CookieBanner
export type CookieBannerProps = {
  children: ReactNode,
  onConsentChange: (newValue: boolean) => void
};

/**
 * CookieBanner is a wrapper component rendering the Cookie banner, based on the cookie value, and also providing its
 * state to all underlying component via the CookieConsentContext Provider.
 */
export const CookieBanner = ({ children, onConsentChange }: CookieBannerProps) => {
  const [cookieConsent, setCookieConsent] = useState<boolean | undefined>(getCookieConsent());

  // Trigger the onConsentChange callback whenever cookieConsent changes
  useEffect(() => {
    onConsentChange(cookieConsent);
  }, [cookieConsent]);

  // Resetting cookie context means setting `cookieConsent` to undefined, this will re-display the Cookie Banner
  const resetCookieConsent = () => {
    resetCookieConsentValue();
    setCookieConsent(undefined);
  }

  return (
    <>
      {cookieConsent === undefined && (
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton={true}
          acceptOnScroll={true}
          acceptOnScrollPercentage={2}
          setDeclineCookie={true}
          disableStyles={true}
          disableButtonStyles={true}
          buttonClasses="cookieConsentButton cookieConsentButtonAccept"
          declineButtonClasses="cookieConsentButton cookieConsentButtonDecline"
          containerClasses="cookieConsentContainer"
          contentClasses="cookieConsentContent"
          overlayClasses="cookieConsentOverlay"
          onAccept={() => {
            setCookieConsent(true);
          }}
          onDecline={() => {
            setCookieConsent(false);
          }}
          visible={'show'}
        >
          We use cookies to set your preferences and understand how visitors use the website, as specified in
          the <Link to="/privacy/cookies/">cookie policy</Link>. You can consent to this by accepting this
          notice or by scrolling this page.
        </CookieConsent>
      )}
      <CookieConsentContext.Provider value={{ cookieConsent, resetCookieConsent }}>
        { children }
      </CookieConsentContext.Provider>
    </>
  );
}
