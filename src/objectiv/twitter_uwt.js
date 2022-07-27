/*
 * Copyright 2022 Objectiv B.V.
 */

/**
 * Kudos to React Twitter Conversion Tracking for inspiration on this module
 * @package react-twitter-conversion-tracking
 * @author Evan Michael Kyle https://kyle.ventures
 */

export const TwitterUWT = function (convId) {
  if (typeof window.twttr != "undefined") {
    return;
  }

  !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

  twq('init', convId);
  twq('track', 'PageView');
}
