---
sidebar_position: 1
title: CI Frameworks
---

import VimeoPlayer from '@site/src/components/vimeo-player';

EventRecorder can be used during development in the Browser's console, as a debugging tool, but it's even 
more useful when paired with a testing framework.

As a first example, we show Cypress in the next section due to its popularity, but the same methodology can 
easily be applied to other e2e frameworks, such as [Nightwatch](https://nightwatch.io/), 
[Playwright](https://playwright.dev/) or [WebdriverIO](https://webdriver.io/). Or even to unit / component 
testing with tools like [Jest](https://jestjs.io/).

In general, choosing a tool that supports snapshot-testing makes things a bit easier to configure, but it's 
definitely not a strict requirement.


Have look at [how to set up end-to-end testing with Cypress](./cypress.md), and/or check out the video below, 
where we show how to enable end-to-end testing with the Objectiv SDKs, with examples:

<VimeoPlayer id="product-demo-validation" videoId="722917146" paddingBottom="45%" />
