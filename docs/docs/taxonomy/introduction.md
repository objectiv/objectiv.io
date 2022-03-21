---
sidebar_position: 1
slug: /taxonomy/
title: Introduction
---

# The open analytics taxonomy 

import useBaseUrl from '@docusaurus/useBaseUrl';
import JoinSlackLink from '@site/src/components/join-slack-link';

The open analytics taxonomy is [Objectiv's](https://objectiv.io/about/) proposal for a common way to collect, structure, and 
validate analytics data. Adoption of the open analytics taxonomy enables data & models to be reused and allows data scientists to build on knowledge and practises of others.

Each common event type and the contexts in which they can happen are defined in a class, which describes their properties, requirements and relationships with other classes.

Objectiv's [Tracker](/tracking/introduction.md), [Collector](/tracking/collector) and [Bach](/modeling/intro.mdx) (our modeling library) are built around the open taxonomy and support it out of the box.

<img src={useBaseUrl('/img/objectiv-pipeline-taxonomy.svg')} alt="Objectiv Pipeline" className="img-l" />

## Principles
To help ensure that the open analytics taxonomy will meet its goals, we’ve created a set of principles to guide our development decisions.

[Read up on the Principles](./core-principles.md)

## Core Concepts
To understand in more detail how the taxonomy works, read about the underlying core concepts.

[Read up on the Core Concepts](./core-concepts.md)

## Taxonomy Reference
Find out everything about the taxonomy: all Contexts and Events are open and documented. 

[Check out the Reference](./reference/overview.md)

:::info join the discussion
Objectiv and the open analytics taxonomy are open-source and we're building them in public. Have opinions on where we should take this next? <JoinSlackLink linkText='Join us on Slack' />.
:::
