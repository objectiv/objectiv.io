---
sidebar_position: 1
slug: /
title: Introduction
---

# 

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

![Objectiv Logo](/img/logo-objectiv-large.svg "Objectiv Logo")

## Welcome to the official Objectiv documentation
Objectiv is a data collection & modeling library that puts the data scientist first. It is built around 
[the open taxonomy of analytics](/taxonomy/introduction.md), which is our proposal for a common way to collect, 
structure and validate data. With Objectiv, you create a 
[contextual layer for your application](tracking/core-concepts/overview.md) by mapping it to the taxonomy, 
with the goal of collecting better data and more effective modeling.


With [Objectiv Bach](https://www.objectiv.io/docs/modeling/) (our data modeling library), you can use familiar Pandas-like DataFrame operations on your full SQL dataset. It includes extensions for effective feature creation for datasets that embrace the [taxonomy](/taxonomy).

Check out [objectiv.io](https://www.objectiv.io) to learn more.

- - -
## Play with Objectiv
We’ve set up a [Live Demo Notebook](https://notebook.objectiv.io/lab?path=product_analytics.ipynb)  with real data from [objectiv.io](https://www.objectiv.io) for you to 
play with. Give it a try and see what Objectiv can do.

## Running Objectiv locally - Quickstart 
In order to run Objectiv for local development, we'll help you set up the following components:

* The **Objectiv Tracker** to track user behavior from your website or web application. 
* The **Objectiv Collector** and a **PostgreSQL data store** to collect, validate & store event data from the tracker.
* A **Notebook** with the **Objectiv Bach** modeling library to explore and model your data.  

<img src={useBaseUrl('/img/objectiv-pipeline.svg')} alt="Objectiv Pipeline" class="img-l" />


To get the latest stable build, run the following commands:
```bash
git clone git@github.com:objectiv/objectiv-analytics.git
cd objectiv-analytics
docker-compose pull  # pull pre-built images from gcr
```

Now, let's get started.

### 1. Spin up the Collector & PostgreSQL
Run the following command:
```bash
docker-compose up objectiv_collector
```
This will spin up the Collector backend and a PostgresQL data store, creating an endpoint for the tracker to send data to.


**Security Warning:** The above `docker-compose` command starts a postgres container that allows connections
without verifying passwords. Do not use this in production or on a shared system!

### 2. Instrument the Tracker
The Tracker is available for multiple platforms. Follow one of the [step-by-step Tracking How-to Guides](/tracking/how-to-guides/overview.md) for your preferred platform to continue. 

### 3. Spin up a Notebook with Objectiv Bach
Run the following command: 
```bash
docker-compose up objectiv_notebook
```
This will spin up a notebook with the Objectiv Bach modeling library that enables you to analyze the data that you've collected. Check out the [modeling section](/modeling) for detailed instructions on using Objectiv Bach.


:::info
if you want to run step 1 and 3 in one go, just run `docker-compose up`.
:::
---

## Running Objectiv in production
A detailed How-to guide is coming soon. 
