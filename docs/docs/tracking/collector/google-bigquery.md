---
sidebar_position: 3
title: Google BigQuery
slug: /tracking/collector/google-bigquery
---

# Google BigQuery

The [Objectiv Collector](./introduction.md) can be configured to work with BigQuery through 
[Snowplow](./snowplow-pipeline.md) on Google Cloud Platform. The Snowplow GCP setup uses GCP PubSub topics 
(message queue) to connect various stages in the pipeline. 

## How to set up Objectiv on GCP using Snowplow

:::note
We assume below that you've already read [how to set up Objectiv with Snowplow](./snowplow-pipeline.md).
:::

The setup works as follows:

1. Events arrive at the Objectiv Collector, and are validated;
2. Good events are published on the `raw` topic on PubSub (which is read by the Enrich process); and
3. Bad events (invalid) are published on the `bad` topic on PubSub.

### Starting the Collector
The configuration for the collector is controlled through environment variables that configure which outputs
are used. Settings specific to the PubSub sink are:

- `SP_GCP_PROJECT`: The `id` of the project on GCP where the PubSub topic is located;
- `SP_GCP_PUBSUB_TOPIC_RAW`: The `id` of the PubSub topic to publish events to;
- `SP_GCP_PUBSUB_TOPIC_BAD`: The `id` of the PubSub topic to publish bad/invalid events to;
- `GOOGLE_APPLICATION_CREDENTIALS`: The path to a `json` containing a service account on GCP that allows 
  publishing to the PubSub topic.

If these are set, the Snowplow sink is automatically enabled.

### Using docker-compose
To run this setup in Docker, make sure that the aforementioned environment variables are properly set and 
available in the container. Also take care that the path to the credentials is actually available in the 
container.

When using `docker-compose`, the following yaml snippet will do the trick:

```yaml
objectiv_collector:
  container_name: objectiv_collector
  image: objectiv/backend
  working_dir: /services
  ports:
    - "127.0.0.1:5000:5000"
  volumes:
    - /path/to/YOUR_SERVICE_ACCOUNT.json:/sa.json
  environment:
    SP_GCP_PROJECT: some-gcp-project
    SP_GCP_PUBSUB_TOPIC_RAW: sp-raw
    SP_GCP_PUBSUB_TOPIC_BAD: sp-bad
    GOOGLE_APPLICATION_CREDENTIALS: /sa.json
    OUTPUT_ENABLE_PG: false
```

The important parts here are:
- Using a volume to make the service account available inside the container;
- Assigning the path of the volume-mapped file correctly to the environment variable;
- Setting the 2 GCP/PubSub variables, to make sure the collector knows where to push the events to.

### Running locally
Running the collector locally, in a dev setup is pretty similar:

```sh
# setup environment
virtualenv objectiv-venv
source objectiv-venv/bin/activate
pip install -r requirements.in

# start flask app
cd objectiv_backend
export PYTHONPATH=.:$PYTHONPATH
GOOGLE_APPLICATION_CREDENTIALS=/path/to/YOUR_SERVICE_ACCOUNT.json \
 SP_GCP_PROJECT=some-gcp-project \
 SP_GCP_PUBSUB_TOPIC_RAW=sp-raw \
 SP_GCP_PUBSUB_TOPIC_BAD=sp-bad \
 flask run
```

### Test the setup
The Collector will display a message if the Snowplow config is loaded: `Enabled Snowplow: GCP pipeline`.

This indicates that the Collector will try to push events. If this fails, logging should hint what's 
happening. If there are no errors in the collector logs, the events should be successfully pushed into the 
raw topic, to be picked up by Snowplow's enrichment.

To check if messages have been successfully received by the PubSub topic, please refer to the monitoring of 
that specific topic in the GCP console. The `Publish message request count` monitoring topic should show more 
than 0 requests/sec.

## Connect to BigQuery in your notebook
See [how to get started in your notebook](../../modeling/get-started-in-your-notebook.mdx) to connect to the 
BigQuery database and start modeling.

## BigQuery table optimization
In a standard Snowplow BigQuery setup, all data is stored in a table called `events`. As this table holds a 
lot of data, it contains over 100 columns. Objectiv events will be stored using the schema from iglu, and 
require just one column to hold the JSON structure of the event.

If BQ is only used for Objectiv, there are obviously a lot of unused columns, often not even populated. This 
can be solved in a few steps (as it's not possible to simply drop columns from BQ):

1. Stop the Snowplow bigquery streamloader, to make sure we don't lose any data during the migration;
2. [optional] Create a backup of the events table;
3. Create a copy of the events table called `events_copy`;
4. Drop the `events` table;
5. Query desired columns:
```sql
SELECT app_id, platform, etl_tstamp, collector_tstamp, event, event_id, 
  v_tracker, v_collector, v_etl, user_ipaddress, network_userid, 
  page_url, page_urlscheme, page_urlhost, page_urlport, page_urlpath,
  useragent, 
  derived_tstamp, event_vendor, event_name, event_format, event_version, event_fingerprint,
  load_tstamp, 
  contexts_io_objectiv_taxonomy_1_0_0
FROM `project.dataset.events_copy`;
```
6. Now select `Save results as BigQuery table`, and save the data as a new table in the current dataset 
  called `events`;
7. Restart the Snowplow bigquery streamloader;
8. Verify new events end up in the `events` table;
9. Remove `events_copy`
