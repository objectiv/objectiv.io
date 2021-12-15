---
sidebar_position: 3
slug: /open-model-hub
title: Open Model Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv comes with an open model hub that contains a growing collection of open-source, free to use data models that you can take, stack and run to quickly build highly specific model stacks for product analysis and exploration. It includes models for a wide range of typical product analytics use cases.

All models are compatible with datasets that have been validated against the [open analytics taxonomy](/taxonomy/introduction.md). The source is available for all models and you’re free to make any changes. You can use the included pandas-compatible [Bach modeling library](/modeling/intro.mdx) to customize them, or even add in advanced ML models.

Input and output of the models are in the [Objectiv Bach DataFrame](/modeling/dataframe/bach.DataFrame.mdx) format, which enables you to chain multiple models together.

:::demo notebook
We've set up an initial showcase of the available product analytics models in our [open model hub demo notebook](https://notebook.objectiv.io/). 
:::

## Available models
Each model can run before, after or combined with any of the available other models. This allows you stack them for your analysis and further ML. 

### Users
* `unique_users`: Unique users.

### Product feature usage
* `features_per_user`: Amount of users for each product feature.

### Conversion
* `conversion`: Unique users that reach a defined conversion feature.
* `conversion_funnel`: Sequence of events before a conversion.

### Retention
* `retention`: Percentage of users retained per cohort.
* `frequency`: Users categorized by number of total sessions.
* `recency`: Mean number of days before users return.

### Sessions
* `sessions`: Unique sessions.
* `session_duration`: Mean session duration.
* `duration_between_events`: Mean session duration between specific defined events.
* `bounce_rate`: Sessions with only a single hit.

## Available filters
Filters can be applied to each of the models. Initially, there is a first filter to quickly zoom into new users or sessions.
* `is_first_session`: The first-ever session of a user.

## Models in development
* `user clustering`: Grouping uses based on similar behavior in using product features.
* `product feature scoring`: Assign scores to product features that define how they help users reach a goal.
* `marketing conversion funnel`: Comparing user conversion funnels between marketing campaigns. 

# Model parameters
Each of the available models can run on a desired set of common parameters that define:
* time range
* time aggregation
* user app
* feature selection

Each model also has specific parameters that can be customized, for example which event defines conversion.

# Export to BI
Once you are done building a model, you can export to your favorite open-source BI tool with a single command. Right now, we support [Metabase](https://www.metabase.com/), with more to come. 

If you have any questions or feedback, please [join us on Slack](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).
