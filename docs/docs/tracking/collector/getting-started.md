---
sidebar_position: 2
title: Getting Started
---


This guide will help you set up a dockerized Objectiv Collector with a Postgres data store that you can use for local development purposes.

:::info just want to test Objectiv?
To quickly spin up a fully functional demo pipeline locally, follow the [Quickstart Guide](/home/quickstart-guide.md).
:::

:::info 
A collector is not strictly necessary to try out the SDKs. Trackers can also be configured to use Transports that do not rely on the Collector, such as [DebugTransport](https://www.npmjs.com/package/@objectiv/transport-debug).
:::

### 1. Starting the local Collector

Assuming you have [Docker](https://www.docker.com/) and [Git](https://git-scm.com/) installed, run the following commands:

```bash
# create a checkout of the git repo
git clone https://github.com/objectiv/objectiv-analytics.git
```
```bash
# enter the repo and spin up the docker containers
cd objectiv-analytics 
docker-compose -f docker-compose-dev.yaml pull
docker-compose -f docker-compose-dev.yaml up -d
```

```bash
# Verify the status:
docker-compose -f docker-compose-dev.yaml ps
```

This will spin up two images:

* `objectiv_collector` - Endpoint that the Objectiv-tracker can send events to (http://localhost:8081).
* `objectiv_postgres` - Database to store data.

:::caution
The above docker-compose command starts a postgres container that allows connections without verifying
 passwords. Do not use this in production or on a shared system!
:::

### 2. Querying the database directly
To connect to the running DB, simply execute:

```console
docker exec -ti objectiv_postgres psql -U objectiv
```

or by using a local client:

```
psql -U objectiv -h 127.0.0.1
```

### 3. Stopping and cleanup
To stop the running containers run:
```bash
# stop containers
docker-compose -f docker-compose-dev.yaml down
```

```bash
# clean up PG volume
docker volume rm objectiv-analytics_pgdata
```
:::caution
Removing the docker volume will also remove any data in the database.
:::

## Troubleshooting / FAQ

### Where are Postgres' permissions configured?
As this is a demo environment, permissions are pretty simple; the credentials are set defined at the top of the
`docker-compose-dev.yaml` file, and imported by the containers that need them.

### My database changed and it no longer works
At the first start-up, Postgres will be initialised. This means a database will be created. As this is 
persisted on disk (in a docker volume), on subsequent startups, the persisted database will be loaded. In 
case of database changes, this may cause problems (as they are also persisted). 

To reset the database, simply do the following:
```bash
# stop the containers
docker-compose -f docker-compose-dev.yaml down
# remove the volume
docker volume rm objectiv-analytics_pgdata
# restart the containers
docker-compose -f docker-compose-dev.yaml up -d
```

### The Postgres container is not starting properly

The Postgres container tries to bind to port 5432 to enable local access. This won't work if something else is already
using that port. To solve this, stop the application that's running on port 5432 and re-run step 1.

### Can I access the Collector over a network connection?

The opened ports are only exposed on localhost (`127.0.0.1`). So to access over the network, or ipv6, additional 
configuration may be necessary.

## Next step
:::info Instrumenting your app 
Now you've got the Objectiv Collector running, next step is to instrument your app with any of the [Objectiv Trackers](/tracking/core-concepts/trackers.md).
:::
