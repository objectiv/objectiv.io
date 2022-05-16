---
sidebar_position: 1
slug: /taxonomy/
title: Introduction
---

# The open analytics taxonomy 

import useBaseUrl from '@docusaurus/useBaseUrl';
import JoinSlackLink from '@site/src/components/join-slack-link';

The open analytics taxonomy is a generic classifification of common event types and the contexts in which they can happen. It is a proposal for a common way to collect & structure analytics data in an effort to enable models to be universally shared and reused between projects, teams and companies.

<img src={useBaseUrl('/img/open-taxonomy.svg')} alt="Objectiv Pipeline" />

<<<<<<< HEAD
Each Event and Context type has its own [properties, requirements and relations](./taxonomy/reference/overview.md). These definitions are used to [validate the collected data and to debug the tracking instrumentation](./tracking/core-concepts/validation.md). This ensures the resulting data set is ready for modeling without cleaning or transformations. 
=======
Objectiv's [Tracker](/tracking/introduction.md), [Collector](/tracking/collector) and the [open model hub](/modeling/index.mdx) are built around the open taxonomy and support it out of the box.
>>>>>>> main

The open analytics taxonomy is based on the compounded knowledge of over 50 data teams and has been designed and tested to cover a wide range of product analytics use cases. We're currently working on expanding it to cover online marketing use cases as well, and plan to expand further into other areas (payments, catalogs, CRM, etc.)

It can be extended to cover more specific use cases as well.

### Taxonomy Reference
All Contexts and Events are open and documented. [Check out the Reference](./reference/overview.md).

:::info join the discussion
Objectiv and the open analytics taxonomy are open-source and we're building them in public. Have opinions on where we should take this next? <JoinSlackLink linkText='Join us on Slack' />.
:::



