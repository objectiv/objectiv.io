---
sidebar_position: 3
slug: /open-model-hub
title: Open Model Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv comes with an open model hub that contains a growing collection of open-source, free to use data models. It includes models for a wide range of typical product analytics use cases.

All models are compatible with any dataset that embraces the [open analytics taxonomy](/taxonomy/introduction.md). The source is available for all models and you’re free to make any changes. You can use the included pandas-compatible [Bach modeling library](/modeling/intro.mdx) to customize them, or even add in advanced ML models.

Each model can run on an [Objectiv Bach DataFrame](/modeling/dataframe/bach.DataFrame.mdx) and delivers output in this format as well, so it can be used for further modeling.

:::info WIP
We've setup an intial showcase of the available product analytics models in our [live demo notebook](https://notebook.objectiv.io/lab/?path=product_analytics.ipynb). Right now, we are creating functions for each of these models, so you can easily use then from a notebook.
:::

## Available models
Each model can run before or after any of the available other models. This allows you stack them for your analysis and further ML.

### User categorization
* `unique_users`: Unique users.
* `new_users`: New users, with a specific timerange to define new users on.

### Conversion
* `conversion`: Unique users that reach a defined conversion feature.
* `conversion_funnel`: Sequence of events before a conversion.

### Retention
* `retention`: Percentage of users retained per cohort.
* `frequency`: Users categorized by number of total sessions.
* `recency`: Mean number of days before users return.

### Product feature usage
* `features_per_user`: Amount of users for each product feature.

### Sessions
* `sessions`: Unique sessions.
* `sessions_per_user`: Average number of sessions per user.
* `session_duration`: Mean session duration.
* `duration_between_events`: Mean session duration between specific defined events.
* `bounce_rate`: Sessions with only a single hit.

## Models in development
* `user clusering`: Grouping uses based on similar behaviour in using product features.
* `product feature scoring`: Assign scores to product features that define how they help users reach a goal.
* `marketing conversion funnel`: Comparing user conversion funnels between marketing campaigns. 

## Model parameters
Each of the available models can run on a desired set of common parameters that define:
* time range
* time aggregation
* user app
* feature selection

Each model also has specific parameters that can be customized, for example which event defines conversion.

## Export to BI
Once you are done building a model, you can export to your favorite open-source BI tool with a single command. Right now, we support [Lightdash](https://www.lightdash.com/), with more to come. 

If you have any questions or feedback, please [join us on Slack](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).


