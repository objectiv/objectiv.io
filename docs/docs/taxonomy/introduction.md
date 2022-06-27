---
sidebar_position: 1
slug: /taxonomy/
title: Introduction
---

# The open analytics taxonomy 

import useBaseUrl from '@docusaurus/useBaseUrl';
import VimeoPlayer from '@site/src/components/vimeo-player';
import JoinSlackLink from '@site/src/components/join-slack-link';

The open analytics taxonomy is a generic classification of common event types and the contexts in which they 
can happen. It's designed to provide a universal structure for analytics data, so models built on one data set 
can be deployed and run on another. 

Data and analytics uses cases from 50+ companies were used to define the taxonomy, and we would like the 
whole data space to collaborate on it. Areas like payments, catalogs, and CRM are on the roadmap, and 
it's extendable to cover custom use cases as well.

<img src={useBaseUrl('/img/open-taxonomy.svg')} alt="Objectiv Pipeline" />

Each Event and Context type has its own [properties, and requirements](./reference/overview.md). They're 
used to [validate & debug the collected data](/tracking/core-concepts/validation.md), so the resulting data 
set is ready for modeling without cleaning or transformations. See the video below for how this works.

<VimeoPlayer id="product-demo-taxonomy" videoId="723782686" paddingBottom="58.25%" />

### Taxonomy Reference
All Contexts and Events are open and documented. [Check out the Reference](./reference/overview.md).

:::info join the discussion
Objectiv and the open analytics taxonomy are open-source and we're building them in public. Have opinions on where we should take this next? <JoinSlackLink linkText='Join us on Slack' />.
:::



