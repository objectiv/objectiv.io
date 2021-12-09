---
sidebar_position: 3
slug: /open-model-hub
title: Open Model Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv comes with an open model hub that contains a growing collection of open-source, free to use data models. It includes models for a wide range of typical product analytics use cases.

All models are compatible with any dataset that embraces the [open analytics taxonomy](/taxonomy). Simply take and run them directly, or combine, adjust and stack them to build advanced models for your specific needs.

Each model can run on an [Objectiv Bach DataFrame](/modeling/dataframe/bach.DataFrame#bach-dataframe) and delivers output in this format as well, so it can be used for further modeling. 

:::info WIP
We've setup an intial showcase of the available product analytics models in our [live demo notebook](https://notebook.objectiv.io/lab/?path=product_analytics.ipynb). Right now, we are creating functions for each of these models, so you can easily use then from a notebook.
:::

## Available models
* `unique_users` Unique users
* `new_users` New users, with a specific timerange to define new users on
* `sessions` Unique sessions
* `sessions_per_user` Average number of sessions per user, per timeframe
* `conversion` Unique users that reach a defined conversion feature
* `conversion_funnel` Sequence of events before a conversion
* `retention` Percentage of users retained per cohort
* `features_per_user` Amount of users for each product feature
* `frequency` Share of users per amount of total sessions
* `recency` Mean number of days before users return
* `session_duration` Mean session duration
* `duration_between_events` Mean session duration between specific defined events
* `bounce_rate` Percentage of sessions with only a single hit

## Model parameters
Each of the available models can run on a desired set of common parameters that define:
* time range
* time aggregation
* user app

Each model has also specific parameters than can be used to customize, for example which event defines conversion.

## Stacking models
Each model can run before or after any of the available other models. This allows you stack them for your analysis and further ML.

If you have any questions or feedback, please [join us on Slack](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).


