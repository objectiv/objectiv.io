---
sidebar_position: 2
slug: /quickstart-guide
title: Quickstart Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This quickstart guide will show you how to spin up a fully functional Objectiv demo pipeline. It includes everything you need to test drive Objectiv locally.

:::info Looking for a local development setup?
If you just want the Collector and a data store without the demo data, website and notebook, [follow this guide](/how-to-guides/collector/getting-started).
:::

## Running Objectiv Dockerized

Assuming you have [Docker](https://www.docker.com/) and [Curl](https://curl.se) installed, run the following commands:

```bash
curl -o docker-compose.yaml https://raw.githubusercontent.com/objectiv/objectiv-analytics/main/docker-compose.yaml
```
```bash
docker-compose up
```

:::caution
There are known issues when running Docker on Apple devices with the new ARM-based M1 chip. We're working on making the demo available to M1 users as well. In the meanwhile, please use a device that supports X86 instructions natively. 
:::

This will spin up the following containers

* `objectiv_website` A local version of the objectiv.io website, instrumented with the **Objectiv Tracker** 
* `objectiv_collector` An **Objectiv Collector** to validate & store event data from the tracker
* `objectiv_postgres` A PostgreSQL database, pre-filled with anonymized demo user data
* `objectiv_notebook` A demo Notebook with the **Objectiv Bach** modeling library to explore and model the demo data  

<img src={useBaseUrl('/img/objectiv-pipeline.svg')} alt="Objectiv Pipeline" class="img-l" />

The initial startup may take a bit longer because the image is quite big (~2GB) and needs to be downloaded first.

### Exploring the data

To explore the data in the demo notebook, go to:

```bash
http://localhost:8888/lab/tree/product_analytics.ipynb?token=objectiv
```
For detailed modeling instructions, check out our [modeling docs](/modeling).

### Generating Events
To generate event data yourself, simply go to the local version of the objectiv website and click around:

```bash
http://localhost:8080/
```

When you trigger an event, you can see a request show up in your docker logs. If you used a terminal to spin up the containers, it shows there as well. 

:::info
Please note that all events have a UTC timestamp. To see/use your new events in the Demo Notebook, just rerun the 'Explore the data' cell.
:::
### Next Steps

We hope you enjoy playing around with Objectiv. If you want to learn more about tracking & modeling with Objectiv, or about the open taxonomy, check out the rest of the Docs:

* [Tracking with Objectiv](/tracking)
* [Modeling with Objectiv Bach](/modeling)
* [The open taxonomy of analytics](/taxonomy)

You can use `docker-compose down` to stop and remove the running containers properly.

If you have any questions or feedback, please [join us on Slack](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).


