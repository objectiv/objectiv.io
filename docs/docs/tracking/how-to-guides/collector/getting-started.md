---
sidebar_position: 1
slug: /how-to-guides/collector/getting-started
title: Getting Started
---


Follow the step-by-step Guide below to get started with the Objectiv Collector to receive and process 
tracking data on your local environment.

To just run a quick demo, see [Running Objectiv Dockerized](/quickstart-guide).

## Start local collector

Requirements:
* docker / docker-compose
* git

```bash
# create a checkout of the git repo
git clone https://github.com/objectiv/objectiv-analytics.git
```
```bash
# enter the repo and spin up the docker containers
cd objectiv-analytics 
docker-compose -f docker-compose-dev.yaml up
```

```bash
# Verify the status (in another terminal):
docker-compose -f docker-compose-dev.yaml ps
```

This will spin up two images:

* `objectiv_collector` - Endpoint that the Objectiv-tracker can send events to (http://localhost:5000).
* `objectiv_postgres` - Database to store data.

:::warning
The above docker-compose command starts a postgres container that allows connections without verifying
 passwords. Do not use this in production or on a shared system!
:::

:::tip
The Postgres container tries to bind to port 5432 to enable local access. This won't work if something else is already
using that port.
:::

:::info
The opened ports are only exposed on localhost (`127.0.0.1`). So to access over the network, or ipv6, additional 
configuration may be necessary.
:::

## Stop and cleanup
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

:::tip
To force a recreation of the database, simply stopping the containers, removing the volume and restarting will do the
trick.
:::

## Query the data

### Query the database directly
To connect to the running DB, simply execute:

```console
docker exec -ti objectiv_postgres psql -U objectiv
```

or by using a local client:

```
psql -U objectiv -h 127.0.0.1
```


## Database notes

### What about PG configuration and permissions?
As this is a demo environment, permissions are pretty simple; the credentials are set defined at the top of the
`docker-compose-dev.yaml` file, and imported by the containers that need them.

### Database initialisation / persistence
At the first start-up, Postgres will be initialised. This means a database will be created. As this is 
persisted on disk (in a docker volume), on subsequent startups, the persisted database will be loaded. In 
case of database changes, this may cause problems. 

Use the following to check if there are any existing volumes on disk, and remove them before starting up the 
stack with database changes, to make sure the database is properly initialised. 

```console
docker volume list
```

The volume used by Postgres is called `pgdata`. To remove it, lookup the name from the list and run:

```console
docker volume rm <volumename>
```