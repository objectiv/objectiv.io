---
sidebar_position: 1
slug: /taxonomy
title: Introduction
---

# The open taxonomy of analytics

import useBaseUrl from '@docusaurus/useBaseUrl';

The open taxonomy of analytics is [Objectiv's](https://objectiv.io/about/) proposal for a common way to collect, structure, and 
validate analytics data. Adoption of the open axonomy enables data & models to be reused and allows data scientists to build on knowledge and practises of others.

Each common event type and the contexts in which they can happen are defined in a class, which describes their properties, requirements and relationships with other classes.

Objectiv's [Tracker](/tracking/introduction.md), [Collector](/tracking/core-concepts/collector) and [Bach](/modeling) (our modeling library) are built around the open taxonomy and support it out of the box.

<img src={useBaseUrl('/img/objectiv-pipeline-taxonomy.svg')} alt="Objectiv Pipeline" class="img-l" />

## Principles
To help ensure that the open taxonomy will meet its goals, we’ve created a set of principles to guide our development decisions.

[Read up on the Principles](./core-principles.md)

## Core Concepts
To understand in more detail how the Taxonomy works, read about the underlying core concepts.

[Read up on the Core Concepts](./core-concepts.md)

## Taxonomy Reference
Find out everything about the taxonomy: all Contexts and Events are open and documented. 

[Check out the Reference](./reference/overview.md)

:::info join the discussion
Objectiv and the open taxonomy are open-source and we're building it in public. Have opinions on where we should take this next? [Join us on Slack](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg)
:::