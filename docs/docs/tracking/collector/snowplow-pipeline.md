---
sidebar_position: 5
title: Snowplow pipeline
slug: /tracking/collector/snowplow-pipeline
---

# Snowplow pipeline

The Objectiv Collector supports using the Snowplow pipeline as a sink for Objectiv events, hooking directly 
into Snowplows enrichment step. Currently, there is data store support for:
1. **[Google BigQuery](./google-bigquery.md)**, via Google PubSub; and
2. **[Amazon S3](./s3.md)**, via AWS SQS/Kinesis.


## How to set up Objectiv with Snowplow

In this setup, we assume you already have a fully functional Snowplow pipeline running, including enrichment, 
loader and iglu repository. If you haven't, please see the 
[Snowplow quickstart for Open Source](https://docs.snowplowanalytics.com/docs/open-source-quick-start/what-is-the-quick-start-for-open-source/). 

Enabling Objectiv involves two steps, as explained next:
1. Adding the Objectiv Taxonomy schema to the iglu repository;
2. Configuring the Objectiv Collector output to push events into the appropriate message queue.

### 1. Add the Objectiv schema to the iglu repo
This step is required so the Snowplow pipeline (enrichment) can validate the incoming custom contexts.

#### Preparation

- copy the Objectiv iglu schema (see [1-0-0](https://github.com/objectiv/objectiv-analytics/blob/main/backend/objectiv_backend/snowplow/docs/1-0-0) 
  into `schemas/io.objectiv/taxonomy/jsonschema/1-0-0` into your local repo;
- get the address / URL of your iglu repository;
- get the uuid of the repo.

#### Pushing the schema
```shell
java -jar igluctl static push --public <path to schemas> <url to repo> <uuid>

## example:
java -jar igluctl static push --public ./schemas https://iglu.example.com myuuid-abcd-abcd-abcd-abcdef12345
``` 

### 2. Configure output to push events to the data store
The Collector can be configured to push events into a Snowplow message queue, using environment variables. 

* To send output to GCP/BigQuery, please refer to **[BigQuery instructions](./google-bigquery.md)**.
* To send output to AWS SQS/Kinesis, please refer to **[Amazon S3 instructions](./s3.md)**.

## Background

The Snowplow pipeline roughly consists of the following components:
1. `Collector`: http(s) endpoint that receives events;
2. `Enrichment`: process that validates incoming events, potentially enriches them (adds metadata);
3. `Loader`: final step, where the validated and enriched events are loaded into persistent storage. Depending 
on your choice of platform, this could be BigQuery on GCP, Redshift on AWS, etc.;
4. `iglu`: central repository used by other components to pull schema for validation on events, contexts, etc. 

The Snowplow pipeline uses message queues and Thrift messages to communicate between the components.

Objectiv uses its own Collector (which also handles validation) that bypasses the Snowplow collector, and
pushes events directly into the message queue that is read by the `enrichment`. 

Snowplow allows for so-called structured custom contexts to be added to events. This is exactly what Objectiv 
uses. As with all contexts, they must pass validation in the `enrichment` step, which is why a schema for the 
Objectiv custom context must be added to iglu, so Snowplow knows how to validate the context. Furthermore, it 
infers the database schema to be able to persist the context. How this is handled depends on the loader 
chosen, e.g. Postgres uses a more relational schema than BigQuery.
