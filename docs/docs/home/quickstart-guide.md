---
sidebar_position: 2
slug: /home/quickstart-guide
title: Quickstart Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import JoinSlackLink from '@site/src/components/join-slack-link';

This quickstart guide will show you how to spin up a fully functional Objectiv demo pipeline. It includes everything you need to test drive Objectiv locally.

## Running Objectiv Dockerized

Assuming you have [Docker](https://www.docker.com/) and [Curl](https://curl.se) installed, run the following commands:

```bash
curl -o docker-compose.yaml https://raw.githubusercontent.com/objectiv/objectiv-analytics/main/docker-compose.yaml
```
```bash
docker-compose pull
docker-compose up -d
```

This will spin up the following containers:

* `objectiv_website` A local version of the objectiv.io website, instrumented with the **Objectiv Tracker** 
* `objectiv_collector` An **Objectiv Collector** to validate & store event data from the tracker
* `objectiv_postgres` A PostgreSQL database, pre-filled with anonymized demo user data
* `objectiv_notebook` A Jupyter Notebook environment to demonstrate **Objectiv Bach** and the **open model hub**
* `objectiv_metabase` A **Metabase** (OSS BI tool) environment to share and visualize your findings   

<img src={useBaseUrl('/img/objectiv-pipeline-bi.svg')} alt="Objectiv Pipeline" />

### Exploring & modeling data

This demo includes two notebooks to demonstrate what Objectiv can do:

* `open_model_hub_demo.ipynb` Demonstration of using the **open model hub** to build model stacks
* `open-taxonomy-how-to.ipynb` Demonstration of using the **Objectiv Bach** modeling library

To explore the notebooks, open the following URL in your browser:

```bash
http://localhost:8888/lab/tree/model-hub-demo-notebook.ipynb?token=objectiv
```
For detailed modeling instructions, check out our [modeling docs](/modeling/intro.mdx).

### Generating Events
To generate event data yourself, simply go to the local version of the objectiv website and click around:

```bash
http://localhost:8080/
```
When you trigger an event, you can see a request show up in your docker logs. If you used a terminal to spin up the containers, it shows there as well. Both notebooks will show the new events if you rerun any of the cells.

### Accessing Metabase
To view the data that has been put out to Metabase, open the following URL in your browser: 
```bash
http://localhost:3000/
```
* Username: `demo@objectiv.io`
* Password: `metabase1`

### Next Steps

We hope you enjoyed playing around with Objectiv. You can use `docker-compose down` to stop and remove the running containers properly.

If you want to start using Objectiv for your own project, you'll want to set up a Collector and a data store first. [Follow this guide](/tracking/collector/getting-started.md) to get started.

To learn more about tracking & modeling with Objectiv, or about the open taxonomy, check out the rest of the Docs:

* [Tracking with Objectiv](/tracking/introduction.md)
* [Modeling with Objectiv Bach](/modeling/intro.mdx)
* [The open analytics taxonomy](/taxonomy/introduction.md)

If you have any questions or feedback, please <JoinSlackLink linkText='join us on Slack' />.
