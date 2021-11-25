---
sidebar_position: 1
slug: /how-to-guides/collector/getting-started
title: Getting Started
---

:::caution 
This guide is outdated and may not work properly. An update is coming soon. In the meanwhile, check out our [Quickstart Guide](/quickstart-guide) if you want to try Objectiv locally.
:::

Follow the step-by-step Guide below to get started with the Objectiv Collector to receive and process 
tracking data on your local environment.

To just run a quick demo, see [Running Objectiv Dockerized](/quickstart-guide).

## Build container images

Requirements:
* make
* docker

Run the following to build the images:
```console
make all
```

By default all images will be tagged with `latest`.

## Run container images locally
By default the `docker-compose` file will try to get images from our container registry. By setting 
`OBJECTIV_CONTAINER_URL` we can tell it to use local images.

### Run the full stack
```console
OBJECTIV_CONTAINER_URL=objectiv
docker-compose up
```

This will spin up three images:

* `objectiv_collector` - Endpoint that the Objectiv-tracker can send events to (http://localhost:5000).
* `objectiv_postgres` - Database to store data.
* `objectiv_notebook` - Jupyter notebook that can be used to query the data (http://localhost:8888).

:::warning
SECURITY WARNING: The above docker-compose commands start a postgres container that allows connections without verifying passwords. Do not use this in production or on a shared system!
:::

### Run part of the stack
It's also possible to only start parts of the stack. For example, to only run the collector, run:

```
docker-compose up objectiv_collector
```

This will start the collector, and any dependencies it has, e.g. Postgres.

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

### Query from a Notebook

By default, you need a token to connect to the Jupyter Notebook. You can find it in the logs like so:

```
docker logs objectiv_notebook 2>&1|grep http.*token\=
```


## Database notes

### What about PG configuration and permissions?
As this is a demo environment, permissions are pretty simple; the credentials are set in `docker/pg_env` and 
imported into the containers that need them.

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