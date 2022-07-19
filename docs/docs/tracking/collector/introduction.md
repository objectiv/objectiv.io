---
sidebar_position: 1
title: Introduction
slug: /tracking/collector
---

# Collector

Objectiv provides a **Collector** backend to receive & validate data captured by the 
[Tracker SDKs](../introduction.md), and store it in your data store of choice for 
[modeling](../../modeling/index.mdx).

Our aim is to support all popular data stores. Currently supported are:

1. [PostgreSQL](./postgresql.md), out-of-the-box in a Docker container.
2. [Google BigQuery](./google-bigquery.md), using Snowplow as a pipeline and GCP.
3. [Amazon S3](./s3.md) (as an archive), using Snowplow  as a pipeline and AWS SQS/Kinesis.

:::info

If you want to test-drive Objectiv without having to set up a backend & data store, please apply for a 
[Launchpad](../../home/get-a-launchpad.md): a fully managed Objectiv back-end and data store that is free to 
use (limited slots).

:::

## First-party data

The Collector is self-hosted on your own domain, so no data is ever sent to any third-party, meaning:

* You have full control over your data.
* Tracking is compliant with privacy legislation such as GDPR, CCPA and PECR.
* Ad blockers can be avoided: first-party data tracking is usually not covered by ad blockers.

## Validation
The Collector validates any incoming Event against the 
[open analytics taxonomy](/taxonomy/reference/events/overview.md). If it fails, the Collector will respond 
with an error, and store the Event in the configured `NOK` (not-OK) location.


This means no Event sent to the Collector is ever discarded, enabling you to for instance 'repair' any 
failing Events and store them after the fact.

## Enrichment
The Collector can enhance your [Event](/taxonomy/reference/events/overview.md) data when it arrives, called 
**enrichment**. An enrichment either updates or populates fields of the 
[Event](/taxonomy/reference/events/overview.md), or adds Contexts.

Out of the box, the Collector provide a **sessions** enrichment, by setting a session cookie on the client
once it starts receiving [Events](/taxonomy/reference/events/overview.md) from it, and then adding a 
corresponding [SessionContext](/taxonomy/reference/global-contexts/SessionContext.md) to all 
[Events](/taxonomy/reference/events/overview.md) it receives.
