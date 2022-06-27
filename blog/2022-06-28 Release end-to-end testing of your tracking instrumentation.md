---
title: "Release: No surprises downstream with end-to-end testing of your tracking instrumentation"
description: "Product changes can break your tracking over time, causing issues downstream for your data team. In this release we've made it easy to build end-to-end testing for your tracking, in order to catch any tracking changes before data is even collected."
slug: release-no-surprises-downstream-with-end-to-end-testing-of-your-tracking-instrumentation/
tags: [releases]
image: /img/open-graph/og-end-to-end-testing-tracking.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: No surprises downstream with end-to-end testing of your tracking instrumentation" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';
import VimeoPlayer from '@site/src/components/vimeo-player';

[cypress]: https://www.cypress.io/
[cypress-snapshot-blog]: https://www.cypress.io/blog/2018/01/16/end-to-end-snapshot-testing/
[application-loaded-event]: https://objectiv.io/docs/taxonomy/reference/events/ApplicationLoadedEvent
[media-loaded-event]: https://objectiv.io/docs/taxonomy/reference/events/MediaLoadEvent
[validation]: https://objectiv.io/docs/tracking/core-concepts/validation/
[tracking]: https://objectiv.io/docs/tracking/
[e2e-testing-docs]: https://objectiv.io/docs/tracking/testing/
[npm]: https://www.npmjs.com/org/objectiv
[office-hours]: https://calendly.com/objectiv_io/objectiv-office-hours

<intro>

Starting on instrumenting analytics tracking doesn't mean you’ve stopped developing your product. Any data 
you track may change over time, possibly unintentionally. As a result, your data team needs to update their 
models, or find out where & when they broke unexpectedly.

In this release we’ve made it easy to build end-to-end testing of your tracking instrumentation, in order to 
catch any instrumentation changes early, before data is even collected.

</intro>

<!--truncate-->

See the video below for a walkthrough:

<VimeoPlayer id="product-demo-e2e-testing" videoId="722917146" paddingBottom="45%" />

# A demo
To demonstrate the new end-to-end testing features, we’ll use a  very basic example app with just a video and 
a button - see screenshot:

<BlogImage url="/img/blog/releases/20220628/e2e-testing-example-app.png" 
  size="medium" 
  caption="Screenshot: example app with a button and a video" />

We’ll use the [Cypress][cypress] testing framework, but you can also just use your own.

Let’s say you implement one test which loads the app, and checks whether it tracks two events automatically: 
the [ApplicationLoadedEvent][application-loaded-event] and the [MediaLoadedEvent][media-loaded-event] (as the 
video is loaded async). It runs without a glitch: 

<BlogImage url="/img/blog/releases/20220628/e2e-testing-success.png" size="medium" />

You then develop the app further, and for some reason you remove the tracking call from the video, or even 
remove the video altogether. Your data team might have models running to track the usage of videos in your 
app, meaning:

- Those models will be affected;
- If the team catches the issue, they’ll probably spend time chasing down what happened, and mitigating 
  the effect;
- ... and then they’ll probably get back to you to make an instrumentation fix.

So all in all, this makes for a long feedback loop, involving time from you and your data team. While in the 
meantime, tracking data and models are compromised.

However, luckily you have your test. If you run the test locally while developing, or in your CI environment, 
it will fail:

<BlogImage url="/img/blog/releases/20220628/e2e-testing-fail.png" size="medium" />

So this way, you’re immediately aware of any tracking regressions, and 
**can solve them before they even end up in your codebase**.

# How does it work?
You can use any CI framework, but in this example app we use [Cypress][cypress]. Here’s our config:

```typescript
import { defineConfig } from "cypress";

export default defineConfig({
  userAgent: "mocked-user-agent",
  video: false,

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
```

We disable the user-agent, because it contains the browser & Cypress version, so it would break any time a 
new version of either comes out. We also disable video recording, as that just slows it down and there’s 
no need for visuals.

The one test we have intercepts the actual calls to the Vimeo API, as those can be a bit flaky. It then 
visits the app, waits 1 second for the mocked Vimeo call to complete, and then checks whether the received 
Events match what we expect:

```typescript
describe('Home: load', () => {
  it('Should track ApplicationLoaded and MediaLoadEvent', () => {
    // Intercept all async calls to avoid rate-limiting and other side effects
    cy.intercept('https://vimeo.com/api/oembed.json*', { fixture: 'vimeo.json' }).as('vimeo');
    cy.intercept('http://localhost:8081*', {status: 200}).as('collector');

    // Visit home page
    cy.visit('/');

    // Wait for Vimeo to finish loading. Iframes are flaky, so a plain wait seems to be the simplest option here.
    cy.wait('@vimeo');
    cy.wait(1000);

    // Verify recorded events
    cy.objectiv().filterEvents(['ApplicationLoadedEvent', 'MediaLoadEvent']).snapshotEvents();
  })
})
```


What we expect is simply captured on the first run of this test, in a [snapshot][cypress-snapshot-blog]:

```javascript
module.exports = {
  "__version": "10.1.0",
  "Home: load": {
    "Should track ApplicationLoaded and MediaLoadEvent": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "ApplicationLoadedEvent",
            "location_stack": [],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "objectiv-demo-app"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/"
              }
            ],
            "id": "ApplicationLoadedEvent#1"
          },
          {
            "_type": "MediaLoadEvent",
            "location_stack": [
              {
                "_type": "MediaPlayerContext",
                "id": "2-minute-video"
              }
            ],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "objectiv-demo-app"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/"
              }
            ],
            "id": "MediaLoadEvent#1"
          }
        ]
      }
    }
  }
}
```


It contains an [ApplicationLoadedEvent][application-loaded-event] and a 
[MediaLoadedEvent][media-loaded-event] (when the video is loaded async). These are [recorded and exposed by 
the Objectiv SDK][e2e-testing-docs], and then captured in this snapshot to test against.

# Run in CI
You can run tests locally while developing, and also automatically in your CI environment, like we’ve done 
here using a GitHub Action:

```yaml
name: E2E Tests

on: [push]

jobs:
  cypress-run:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install dependencies
        run: yarn install

      - name: Run Cypress tests
        uses: cypress-io/github-action@v4
        with:
          browser: chrome
          install: false
          start: yarn start
          wait-on: 'http://localhost:3000'
```


This Action will run on every push, start the app and run the tests.

# Not only regression testing
The Tracking SDK now also exposes any tracking errors. One way to leverage this, is to write tests that load 
every screen in your app and check those errors, so you can make sure your instrumentation fully passes 
[validation][validation] everywhere.

# How to get it
The new version of the Tracking SDKs that can be used for end-to-end testing are now available on [NPM][npm]. 
To upgrade, follow instructions for [your platform][tracking].

For more info, [check out our documentation with several examples][e2e-testing-docs].

# No surprises downstream
As your product changes, so does your tracking. With the new end-to-end testing features in the Objectiv 
Tracking SDKs, you don’t have to worry about any unexpected data issues ending up downstream with your data 
team, as you can catch changes before data is even collected.

:::info
## Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Office Hours every Thursday at 4pm CET, 10am EST][office-hours] that you 
can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Office Hours][office-hours]
:::