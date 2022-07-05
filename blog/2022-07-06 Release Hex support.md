---
title: "Release: Objectiv now has support for Hex"
description: "Objectiv now supports Hex: collaborate on notebooks and build beautiful data apps that are powered by Objectiv’s high quality product analytics data and pre-built models."
slug: release-objectiv-now-has-support-for-hex/
tags: [releases]
image: /img/open-graph/og-objectiv-hex.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: Objectiv now has support for Hex" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';
import VimeoPlayer from '@site/src/components/vimeo-player';

[office-hours]: https://calendly.com/objectiv_io/objectiv-office-hours

<intro>

Objectiv now supports Hex: collaborate on notebooks and build beautiful data apps that are powered by Objectiv’s high quality product analytics data and pre-built models. 

</intro>

<!--truncate-->

At Objectiv, we’ve been fans of [Hex](https://www.hex.tech) for a while and have been using it internally to collaborate on notebooks and share analyses in an easy-to-digest way with others. We’re happy to announce Objectiv now has built-in support for Hex.

**What this means:**
* All [example notebooks](https://objectiv.io/docs/modeling/example-notebooks/) (that can be used as a boilerplate for your own analyses) can be run in Hex directly without additional setup
* Full support for [all pre-built models & functions](https://objectiv.io/docs/modeling/open-model-hub/) in the open model hub
* Instructions in our documentation on how to use Hex with Objectiv


# Example notebooks
All our [example notebooks](https://objectiv.io/docs/modeling/example-notebooks/) will work directly with Hex. Just get them from our [repo](https://github.com/objectiv/objectiv-analytics) and [import them into Hex](https://learn.hex.tech/docs/versioning/import-export#import-projects).

Here is a retention analysis example from our basic product analytics notebook, running as an app in Hex:


<BlogImage url="/img/blog/releases/20220706/hex-retention.png" 
  size="large" 
  caption="Retention analysis powered by Objectiv, running in Hex" />

You can [open it in Hex](https://app.hex.tech/803f838c-ed9e-47b4-b761-601992cc9ce4/app/7bccc729-e47c-4832-9c0c-cf94a0135668/latest) to see it in action without any setup.

But you can also use it for more advanced use cases, i.e. logistic regression modeling to predict user behavior:

<BlogImage url="/img/blog/releases/20220706/hex-lr.png" 
  size="large" 
  caption="Logistic regression powered by Objectiv, running in Hex" />

Check it out in Hex [here](https://app.hex.tech/803f838c-ed9e-47b4-b761-601992cc9ce4/app/aded07b0-e422-4586-a4e7-85a3723fafae/latest).

## There is a lot more
These are just a handful of examples, but you can use Hex to run [any model from the open model hub](https://objectiv.io/docs/modeling/open-model-hub/models/) directly on your full DWH. 

## How to get started
If you are already using Hex, [follow the instructions to get started](https://objectiv.io/docs/modeling/get-started-in-your-notebook/). If you don’t have access to Hex yet, you can first sign up for a free account [here](https://hex.tech/).

:::info
## Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Office Hours every Thursday at 4pm CET, 10am EST][office-hours] that you 
can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Office Hours][office-hours]
:::