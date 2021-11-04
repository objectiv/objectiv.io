---
sidebar_position: 1
slug: /
---

# 

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

![ObjectivLogo](../static/img/logo-objectiv-large.svg "Objectiv Logo")

## Welcome to the official Objectiv documentation
Objectiv is a data collection & modeling library that puts the data scientist first. It is built around [the open taxonomy of analytics](/docs/taxonomy), which is our proposal for a common way to collect, structure and validate data. With Objectiv, you create a [contextual layer for your application](tracking/core-concepts/tagging) by mapping it to the taxonomy, with the goal of collecting better data and more effective modeling.

#### Key features

* [Event & context classes are predefined](taxonomy), designed to ensure the collected data covers a wide range of common analytics use cases. 
* Instrumentation gets validated against the taxonomy to provide [live feedback in your IDE and console while you’re developing](tracking/core-concepts/validation).
* Tracked events can carry multiple contexts, including the [exact location in the UI](taxonomy/abstract-contexts/overview) from where they were triggered.
* Collected data is well-structured, self-descriptive and gets validated at the first step of the pipeline.
* Familiar Pandas-like dataframe operations can be used on the full data set, straight from a notebook. 
* Models can be built by taking parts of other models. Models can be reused for other projects by changing a single line of code.

- - -

## Quick Start
### Play with Objectiv
We’ve set up a [sandboxed notebook with real data from objectiv.io](notebook) for you to play with. Give it a try and see what Objectiv can do.

### Running Objectiv Dockerized
This is a great way to run Objectiv locally and to see what it is about. With some additional work this
setup can also be used for low-traffic sites and apps.

The below commands assume that you have `docker-compose` [installed](https://docs.docker.com/compose/install/).
```bash
docker-compose pull  # pull pre-built images from gcr
docker-compose up    # spin up Objective pipeline
```
This will spin up three images:
* `objectiv_collector` - Endpoint that the Objectiv-tracker can send events to (http://localhost:5000).
* `objectiv_postgres` - Database to store data.
* `objectiv_notebook` - Jupyter notebook that can be used to query the data (http://localhost:8888).

SECURITY WARNING: The above docker-compose commands start a postgres container that allows connections
without verifying passwords. Do not use this in production or on a shared system!

### Instrumenting Objectiv
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides below:

* Getting started with [React](/tracking/how-to-guides/react/getting-started.md).
* Getting started with [Angular](/tracking/how-to-guides/angular/getting-started.md).

We'll add more How-to Guides as we expand support to other web & mobile platforms and frameworks.

### Using the Docs
Below a concise overview of the various areas in Objectiv, with click-throughs to their respective documentation sections.

<Mermaid chart={`
	graph TD
    Tracking --- Taxonomy;
    Modeling --- Taxonomy;
    linkStyle 0,1 stroke:#000,anything;
    click Tracking "/docs/tracking" "See more details" _self;
    click Modeling "/docs/modeling" "See more details" _self;
    click Taxonomy "/docs/taxonomy" "See more details" _self;
    class Tracking,Modeling,Taxonomy diagramBlocks;
`} caption="Figure: Diagram of all Objectiv Areas" baseColor="basic" />