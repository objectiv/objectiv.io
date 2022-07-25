/*
 * Copyright 2022 Objectiv B.V.
 */

import React, { useContext, useLayoutEffect } from 'react';
import { CookieConsentContext } from "./CookieBanner";
import RedditPixel from "./reddit_pixel";
import TwitterUWT from './twitter_uwt';

declare global {
  interface Window {
    twttr: any;
    rdt: any;
  }
}


/**
 * Component for tracking conversion. Enabled only if users gave cookie consent.
 */
export const AdsTracking = () => {
  const { cookieConsent } = useContext(CookieConsentContext);

  if(!cookieConsent) {
    return null;
  }

  // Twitter initialization
  TwitterUWT('o9j5x');

  // Reddit initialization
  RedditPixel('t2_ke5ztj8g');

  // Mousedown handlers
  useLayoutEffect(() => {
    document.querySelectorAll('a[href*="https://github.com/objectiv"]').forEach(gitHubAnchor => {
      gitHubAnchor.addEventListener('mousedown', () => {

        // Twitter conversion
        if (typeof window.twttr != "undefined") {
          window.twttr.conversion.trackPid('o9j6c', { tw_sale_amount: 0, tw_order_quantity: 0 });
        }

        // Reddit conversion
        if (typeof window.rdt != "undefined") {
          window.rdt('track', 'Custom', { customEventName:'GitHub clickthrough' });
        }
      }, true);
    })
  })

  return null;
}
