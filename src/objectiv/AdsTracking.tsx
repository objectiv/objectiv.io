/*
 * Copyright 2022 Objectiv B.V.
 */

import React, { useContext, useLayoutEffect } from 'react';
import { CookieConsentContext } from "./CookieBanner";
import TwitterUWT from './twitter_uwt';

/**
 * Component for tracking conversion. Enabled only if users gave cookie consent.
 */
export const AdsTracking = () => {
  const { cookieConsent } = useContext(CookieConsentContext);

  if(!cookieConsent) {
    return null;
  }

  // Twitter
  TwitterUWT('o9j5x');
  useLayoutEffect(() => {
    document.querySelectorAll('a[href*="https://github.com/objectiv"]').forEach(gitHubAnchor => {
      gitHubAnchor.addEventListener('mousedown', () => {
        if (typeof window.twttr != "undefined") {
          window.twttr.conversion.trackPid('o9j6c', { tw_sale_amount: 0, tw_order_quantity: 0 });
        }
      }, true);
    })
  })

  return null;
}
