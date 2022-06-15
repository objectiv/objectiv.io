---
title: "Release: User Intent Analysis"
description: "We added new functionality to enable User Intent analysis on your raw analytics data. See the example notebook to get started."
slug: release-user-intent-analytics/
image: /img/open-graph/og-user-intent.png
tags: [releases]
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: User Intent Analysis" />
</head>


import BlogImage from '@site/src/components/blog-image'

[example-notebook]: https://objectiv.io/docs/modeling/example-notebooks/user-intent/
[locations]: https://objectiv.io/docs/tracking/core-concepts/locations
[root_location]: https://objectiv.io/docs/taxonomy/reference/location-contexts/RootLocationContext/
[session_duration]: https://objectiv.io/docs/modeling/open-model-hub/models/aggregation/session_duration/
[quantile]: https://objectiv.io/docs/modeling/bach/api-reference/DataFrame/quantile/
[model-hub]: https://objectiv.io/docs/modeling/
[bach]: https://objectiv.io/docs/modeling/bach/

*In this release we add new functionality to [modeling library Bach][bach] and the [open model hub][model-hub] 
that enable User Intent analysis on your raw analytics data. It comes with an example notebook to get started 
with your own analysis.*

<!--truncate-->

## How does it work?

In this [example notebook][example-notebook] we show how it works in detail, but below we'll give you a 
glimpse, using data from our own website and documentation pages.

### 1) Understand where users are spending their time
One of the key aspects of Objectiv is the [Location Stack][locations], which captures the exact location 
where an Event was triggered. The [`root_location`][root_location] in the Stack uniquely represents the 
top-level UI location the user was in at the time, e.g. on your product page.

We'll use the [`session_duration`][session_duration] model from the open model hub to see how much time users 
are spending on average in the main areas of the product, as represented by the 
[`root_location`][root_location]:

```python
duration_root = modelhub.aggregate.session_duration(df, 
  groupby=['application', 'root_location']).sort_index().head()
```
```
application       root_location
objectiv-docs     docs              0 days 00:06:32.101332
                  home              0 days 00:06:26.184331
                  modeling          0 days 00:07:49.564281
                  taxonomy          0 days 00:07:45.415114
                  tracking          0 days 00:05:47.753501
objectiv-website  about             0 days 00:02:48.240937
                  blog              0 days 00:03:54.849918
                  home              0 days 00:05:32.901595
                  jobs              0 days 00:02:20.555217
                  join-slack        0 days 00:02:28.560690
Name: session_duration, dtype: timedelta64[ns]
```

:::note
Of course you can group by any set of features or locations, but your main product areas are a good start.
::: note

Next, we want to look at the distribution of time spent overall, to help define the different stages of 
intent. We again use the [`session_duration`][session_duration] model from the open model hub, and then the 
Bach [`quantile`][quantile] operation to get the distribution.

```python
# how is this time spent distributed?
session_duration = modelhub.aggregate.session_duration(df, groupby='session_id')

# materialization is needed because the expression of the created series 
# contains aggregated data, and it is not allowed to aggregate that.
session_duration = session_duration.to_frame().materialize().session_duration
# show quantiles
session_duration.quantile(q=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9]).head(10)
```
```
quantile
0.1   0 days 00:00:00.602000
0.2   0 days 00:00:01.195600
0.3   0 days 00:00:02.728600
0.4   0 days 00:00:12.125200
0.5   0 days 00:00:42.592000
0.6   0 days 00:02:04.544800
0.7   0 days 00:03:17.138000
0.8   0 days 00:05:35.084600
0.9   0 days 00:19:38.346400
Name: session_duration, dtype: timedelta64[ns]
```

This shows us that the **top 10% of users** spend **more than 19 minutes** in the product, and the 
**bottom 60% less than two minutes**.

### 2) Defining simple stages of User Intent based on product usage & time spent
After exploring the time spent both per major product area and in overall quantiles, we can make a basic 
definition of different stages of User Intent. In our example we could define them as follows:

| User Intent   | Root locations                            | Duration
| :--           | :--                                       | :--           
| 1 - Inform    | *All sections other than the ones below*  | Any time spent
| 1 - Inform    | Docs: modeling, taxonomy, tracking, home  | Less than 2 minutes
| 2 - Explore   | Docs: modeling, taxonomy, tracking, home  | Between 2 and 19 minutes
| 3 - Implement | Docs: modeling, taxonomy, tracking, home  | More than 19 minutes

Of course you can adjust the definitions based on your own collected data. 

### 3) Finally: assigning Intent to each user
Based on the simple definitions above, we can now assign a stage of Intent to each user, based on what they 
use and how much time they spent in it. For details on how that works, have a look at the 
[example notebook][example-notebook]. See the results below:

<BlogImage 
  url='img/blog/releases/20220422-user-intent-results.png'
  caption="Results for User Intent analysis on our website and documentation pages"
/>

That's it! You've used the open model hub and Bach to understand where users are spending their time and how 
it is distributed, and to assign intent to each user. You now know for each user what stage of their journey 
they're in. All directly on your raw analytics data.

## How to get it
The models and operations you need are live in the [open model hub][model-hub] and for [Bach][bach]. For 
running your own analysis, please have a look at the [example notebook][example-notebook].

Don't forget to upgrade the open model hub package if you already have it installed: 

```bash
pip install --upgrade objectiv-modelhub
```

Enjoy modeling User Intent!
