/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
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
      {/* @ts-ignore CookieConsent TS defs are compatible with the latest React. Everything works as expected though. */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        setDeclineCookie={true}
        buttonClasses="cookieConsentButton cookieConsentButtonAccept"
        declineButtonClasses="cookieConsentButton cookieConsentButtonDecline"
        style={{ padding: "10px", background: "#000", color: "#fff", boxShadow: "0 30px 70px rgb(0 0 0 / 30%)" }}
        buttonStyle={{ background: "#008FDB", border: "1px solid #008FDB", borderRadius: "4px", color: "#fff", fontSize: "14px", padding: "15px 40px" }}
        declineButtonStyle={{ background: "#000", border: "1px solid #fff", borderRadius: "4px", color: "#fff", fontSize: "14px", padding: "15px 40px" }}
        onAccept={() => {
          setCookieConsent(true);
        }}
        onDecline={() => {
          setCookieConsent(false);
        }}
        visible={cookieConsent === undefined ? 'show' : 'hidden'}
      >
        We use cookies to set your preferences and understand how visitors use the website.
      </CookieConsent>
      <CookieConsentContext.Provider value={{ cookieConsent, resetCookieConsent }}>
        { children }
      </CookieConsentContext.Provider>
    </>
  );
}
