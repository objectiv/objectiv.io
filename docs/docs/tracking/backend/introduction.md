---
sidebar_position: 1
title: Introduction
slug: /tracking/backend/
---

# Backend

Objectiv supports several backend and data stores to validate and capture the data collected by the 
[Tracker SDKs](../introduction.md) for modeling.

:::info

If you want to test-drive Objectiv without having to set up a backend & data store, please apply for a 
[Launchpad](../../home/get-a-launchpad.md): a fully managed Objectiv back-end and data store that is free to 
use (limited slots).

:::

## Supported backends & data stores
The following backends and data stores are currently supported:
1. [Objectiv's Collector](./objectiv/introduction.md): a built-in backend with an API and storage connectors 
  for receiving, validating, and storing [Events](/taxonomy/reference/events/overview.md) in:
    1. a **PostgreSQL database**; or 
    2. **the file system**.
2. [Snowplow](./snowplow/introduction.md): use a Snowplow pipeline as a sink for Objectiv events, hooking 
  directly into Snowplows enrichment step. Currently, there is support for:
    1. **[BigQuery](./snowplow/google-bigquery.md)** via Google PubSub; and
    2. **AWS SQS/Kinesis** using Thrift messages.

## First-party data

As the backend is self-hosted on your own domain, no data is ever sent to any third-party, meaning:

* You have full control over your data.
* Tracking is compliant with privacy legislation such as GDPR, CCPA and PECR.
* Adblockers can be avoided: first-party data tracking is ususally not covered by adblockers.
