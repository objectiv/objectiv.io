/*
 * Copyright 2022 Objectiv B.V.
 */

export const GA_Gtag = function (trackingId) {
  if (typeof window.dataLayer != "undefined") {
    return;
  }

  const scriptId = 'ga-gtag';

  const scriptTag = document.createElement('script');
  scriptTag.id = scriptId;
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.insertBefore(scriptTag, document.head.firstChild);

  window.dataLayer = window.dataLayer || [];

  dataLayer.push('js', new Date());

  dataLayer.push('config', trackingId);
};
