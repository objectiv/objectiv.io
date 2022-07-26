---
title: "Release: Objectiv now has support for Deepnote"
description: "Objectiv now supports Deepnote: collaborate on notebooks that are powered by Objectiv’s high quality product analytics data and pre-built models."
slug: release-objectiv-now-has-support-for-deepnote/
tags: [releases]
image: /img/open-graph/og-objectiv-deepnote.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: Objectiv now has support for Deepnote" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';
import VimeoPlayer from '@site/src/components/vimeo-player';

[office-hours]: https://calendly.com/objectiv_io/objectiv-office-hours

<intro>

Objectiv now supports Deepnote: collaborate on notebooks that are powered by Objectiv’s high quality product analytics data and pre-built models. 

</intro>

<!--truncate-->

At Objectiv, we’ve been fans of [Deepnote](https://deepnote.com/) for a while and have been using it internally to collaborate on notebooks. We’re happy to announce Objectiv now has built-in support for Deepnote.

**What this means:**
* All [example notebooks](https://objectiv.io/docs/modeling/example-notebooks/) (that can be used as a boilerplate for your own analyses) can be run in Deepnote directly without additional setup.
* Full support for [all pre-built models & functions](https://objectiv.io/docs/modeling/open-model-hub/) in the open model hub.
* Instructions in our documentation on [how to use Deepnote with Objectiv](https://objectiv.io/docs/modeling/open-model-hub/models/).


# Example notebooks
All our [example notebooks](https://objectiv.io/docs/modeling/example-notebooks/) will work directly with Deepnote. Just get them from our [repo](https://github.com/objectiv/objectiv-analytics) and [import them into Deepnote](https://docs.deepnote.com/importing-and-exporing/importing-data-to-deepnote#:~:text=Uploading%20an%20existing%20notebook%20to,these%20files%20into%20the%20filesystem.).

Here is a retention analysis example from our basic product analytics notebook, running as an app in Deepnote:


<BlogImage url="/img/blog/releases/20220727/deepnote-retention.png" 
  size="large" 
  caption="Retention analysis, powered by Objectiv. {1}"
  captionLinks={[
    {text: 'Click to open in Deepnote.', to: 'xxx'}
  ]}/>

But you can also use it for more advanced use cases, i.e. logistic regression modeling to predict user behavior:

<BlogImage url="/img/blog/releases/20220727/deepnote-lr.png" 
  size="large"  
  caption="Predicting user behavior with logistic regression. {1}"
  captionLinks={[
    {text: 'Click to open in Deepnote.', to: 'xxx'}
     ]}/>

## There is a lot more
These are just a handful of examples, but you can use Deepnote to run [any model from the open model hub](https://objectiv.io/docs/modeling/open-model-hub/models/) directly on your full data warehouse. 

## How to get started
If you are already using Deepnote, [follow the instructions to get started](https://objectiv.io/docs/modeling/get-started-in-your-notebook/#google-colab--hex--deepnote). If you don’t have access to Deepnote yet, you can first sign up for a free account [here](https://deepnote.com/sign-up).

:::info
## Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Office Hours every Thursday at 4pm CET, 10am EST][office-hours] that you 
can freely dial in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Office Hours][office-hours]
:::