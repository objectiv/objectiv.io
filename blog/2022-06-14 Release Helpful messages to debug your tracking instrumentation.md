---
title: "Release: Helpful messages to debug your tracking instrumentation"
description: "We added links to relevant documentation pages in the Tracker SDK’s Validation messages, to help you debug your tracking instrumentation."
slug: release-helpful-messages-to-debug-your-tracking-instrumentation/
tags: [releases]
image: /img/open-graph/og-validation-helpful-messages.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: Helpful messages to debug your tracking instrumentation" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';

[taxonomy]: https://objectiv.io/docs/taxonomy/
[collector]: https://objectiv.io/docs/tracking/collector
[tracker]: https://objectiv.io/docs/tracking/
[validation-blog]: https://objectiv.io/blog/release-0.0.15-core-tracker-validation/
[developer-tools]: https://www.npmjs.com/package/@objectiv/developer-tools
[taxonomy-contexts]: https://objectiv.io/docs/taxonomy/core-concepts
[root-location]: https://objectiv.io/docs/taxonomy/reference/location-contexts/RootLocationContext/
[path-context]: https://objectiv.io/docs/taxonomy/reference/global-contexts/PathContext/
[interactive-event]: https://objectiv.io/docs/taxonomy/reference/events/InteractiveEvent/
[application-context]: https://objectiv.io/docs/taxonomy/reference/global-contexts/ApplicationContext
[global-context]: https://objectiv.io/docs/taxonomy/global-contexts/
[location-context]: https://objectiv.io/docs/taxonomy/location-contexts/
[configure-dev-tools]: https://objectiv.io/docs/tracking/react/how-to-guides/configuring-logging#enabling-developer-tools
[gh-822]: https://github.com/objectiv/objectiv-analytics/pull/822
[gh-748]: https://github.com/objectiv/objectiv-analytics/pull/748
[gh-814]: https://github.com/objectiv/objectiv-analytics/pull/814
[gh-799]: https://github.com/objectiv/objectiv-analytics/pull/799
[collisions]: https://objectiv.io/docs/tracking/core-concepts/browser/#solving-collisions
[release-office-hours]: https://meet.google.com/sgc-jqgb-mtc

<intro>

Objectiv lets you model raw analytics data straight out of the box. This is partly enabled by early data 
validation against the [open analytics taxonomy][taxonomy] (also making instrumentation unambiguous and 
future-proof), and partly by helping developers set up tracking instrumentation with helpful tooling. 

In this release we focused on the second part: we added links to relevant documentation pages in the Tracker 
SDK's Validation messages, to help you debug your tracking instrumentation.

</intro>

<!--truncate-->

<BlogImage url="/img/open-graph/og-validation-helpful-messages.png" size="normal" />

# How does it work?
We already support basic tracking validation in your IDE, the backend [Collector][collector], and the 
[Tracker][tracker] itself. [Read more on that here][validation-blog].

Now, we've split that up into a separate package called Objectiv [`developer-tools`][developer-tools]. This 
new package extends the Validation messages you see in the browser console, to provide links to contextually 
relevant documentation pages. 

For example, if a required [Context][taxonomy-contexts] is missing for an Event, the Validation message will 
now provide a link to that Context’s documentation, as well as any links to related pages. The pages describe 
the intended use, and provide troubleshooting.

And as an added benefit, you don’t have to include the new [`developer-tools`][developer-tools] package in 
your production apps, reducing build size.


# Examples

## Missing RootLocationContext
The Tracker instance of the website has been configured to not track [RootLocationContext][root-location]s 
from URLs, but no alternative has been implemented to generate those. Since 
[RootLocationContext][root-location] is required by the open taxonomy, this will result in the validation 
reporting the issue:

<BlogImage url="/img/blog/releases/20220614/missing-rootlocationcontext.png" size="large" />

Note how the validation rules detected the platform we are running in and attached links to the documentation 
for React aimed at solving this particular type of validation error.

## Duplicated ApplicationContext
The second example simulates a low-level instrumentation gone wrong. The test button attempts to generate a 
custom [ApplicationContext][application-context], but the Tracker has not been prevented from generating 
those automatically. Since ApplicationContext should only be present once in the list of 
[Global Contexts][global-context], the validation reports the issue:

<BlogImage url="/img/blog/releases/20220614/duplicated-applicationcontext.png" size="large" />


In this example we currently don't have any specific how-to links, but as we add more and more how-to's to 
our documentation we may introduce them later on.

These examples are non-exhaustive; several other validation rules have been added as well, such as 
[Location Contexts][location-context] that are in the wrong position in the stack.

:::note

The backend [Collector][collector] also performs much of this validation as a failsafe, such as requiring a 
[RootLocationContext][root-location] and [PathContext][path-context] for 
[InteractiveEvent][interactive-event]s.

:::

# How to get it

The new [`developer-tools`][developer-tools] package is available as a developer dependency for all SDKs. How 
to import it depends on your application’s requirements (as an example, 
[see several options for React here][configure-dev-tools]), e.g. with conditional logic based on the 
environment:

```js
if (process.env.NODE_ENV.startsWith('dev')) {
  require('@objectiv/developer-tools');
}
```


That’s it! The package will self-inject globally when loaded, and logging & validation will be enabled.

To just upgrade the tracker to the latest version, follow instructions for [your platform][tracker].

:::caution

We also introduced a few changes that may need some migration for some users; please double-check these PRs: 
- [React Tracker: Consistent `id` normalization in components][gh-822];
- [React Tracker: Success & Failure event tracking hooks improvements][gh-748];
- [React Tracker useTrackVisibility hooks improvements][gh-814];
- [PathContext validation: required for InteractiveEvents][gh-799].

:::


# What’s next?

This is a new step in helping you set up instrumentation, and we’ll be making more miles:
* We’ll improve on the range of Validation messages. For example, you’ll see messages for redundant tracking 
  of Contexts or duplicate Contexts on one or more screens.
* We’ll enable CI integration of end-to-end testing, such as checking for [collisions][collisions] on any 
  screen. As a first step towards this, we’ve exposed a Global variable `globalThis.objectiv`. Stay tuned!
* We’re looking into providing a Chrome plugin that can highlight any tracking issues where they originate 
  in the UI.

Enjoy the new helpful messages, and please do give us your feedback, especially on what you think we should 
cover with Validation.

<JoinSlackLink linkText="Join us on Slack" />

# Release Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Release Office Hours][release-office-hours] every Thursday at 4pm CET, 10am EST that you 
can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Release Office Hours][release-office-hours]
