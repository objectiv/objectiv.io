/*
 * Copyright 2022 Objectiv B.V.
 */

const RedditPixel = function (convId) {
  !(function (w, d) {
    if (!w.rdt) {
      var p = (w.rdt = function () {
        p.sendEvent
          ? p.sendEvent.apply(p, arguments)
          : p.callQueue.push(arguments);
      });
      p.callQueue = [];
      var t = d.createElement("script");
      (t.src = "https://www.redditstatic.com/ads/pixel.js"), (t.async = !0);
      var s = d.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(t, s);
    }
  })(window, document);

  rdt("init", convId, { optOut: false, useDecimalCurrencyValues: true });
  rdt("track", "PageVisit");
}

export default RedditPixel;