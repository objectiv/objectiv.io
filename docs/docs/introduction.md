---
sidebar_position: 1
slug: /
title: ""
description: Objectiv is product analytics infrastructure with a generic event taxonomy. Capture validated user behavior data straight into your data warehouse, and speed up product analytics projects with pre-built and reusable models.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';
import JoinSlackLink from '@site/src/components/join-slack-link';

![Objectiv Logo](/img/logo-objectiv-large.svg "Objectiv Documentation")

# Objectiv Documentation

Objectiv is open-source product analytics infrastructure, built around [a generic event taxonomy](/taxonomy/introduction.md).

* Feed it directly [into your data warehouse](/tracking/collector/introduction.md) without cleaning & transformation
* Take & run [pre-built models](./modeling/open-model-hub/index.mdx) off the shelf to speed up data projects
* [Reuse and share](/taxonomy/introduction.md) any model between teams, products and platforms
* Use [pandas-like operations](/modeling/bach/index.mdx) that run on the full SQL dataset
* Convert models to SQL with [one command](/modeling/bach/api-reference/DataFrame/bach.DataFrame.view_sql.mdx) to feed data consumers from a single source of truth

<img src={useBaseUrl('/img/objectiv-stack.svg')} alt="The Objectiv Stack"/>

Objectiv is self-hosted, 100% free to use and fully open-source. 


### Getting started

Follow our [Quickstart Guide](/home/quickstart-guide.md) to spin up a fully functional dockerized demo in under 5 minutes.

### Resources

* [Objectiv on Github](https://github.com/objectiv/objectiv-analytics) - Objectiv's official repository
* <JoinSlackLink linkText='Objectiv on Slack' /> - Get help & join the discussion on where to take Objectiv next
* [Objectiv.io](https://objectiv.io) - Objectiv's official website
