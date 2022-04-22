---
title: "Release: User Intent Analysis"
description: "We added new functionality to enable User Intent analysis on your raw analytics data. See the example notebook to get started."
slug: release-user-intent-analytics/
image: /img/open-graph/og-user-intent.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: User Intent Analysis" />
</head>


import BlogImage from '@site/src/components/blog-image'

[example-notebook]: https://objectiv.io/docs/modeling/user_intent
[locations]: https://objectiv.io/docs/tracking/core-concepts/locations
[root_location]: https://objectiv.io/docs/taxonomy/reference/location-contexts/RootLocationContext/
[session_duration]: https://objectiv.io/docs/modeling/modelhub_api_reference/modelhub.Aggregate.session_duration/#modelhub-aggregate-session-duration
[quantile]: https://objectiv.io/docs/modeling/DataFrame/bach.DataFrame.quantile/#bach-dataframe-quantile
[model-hub]: https://objectiv.io/docs/modeling/
[bach]: https://objectiv.io/docs/modeling/bach

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
objectiv-docs     home            	TODO
                  modeling        	TODO
                  taxonomy        	TODO
                  tracking        	TODO
objectiv-website  about           	TODO
                  blog            	TODO
                  home            	TODO
                  jobs            	TODO
                  join-slack      	TODO
                  privacy         	TODO
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
session_duration.to_frame().materialize()['session_duration']
  .quantile(q=[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]).head(10)
```
```
quantile
TODO
Name: session_duration, dtype: timedelta64[ns]
```

This shows us that the **top 10% of users** spend **more than 19 minutes** in the product, and the 
**bottom 10% less than two minutes**.

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

[TODO: IMAGE]

That's it! You've used the open model hub and Bach to understand where users are spending their time and how 
it is distributed, and to assign intent to each user. You now know for each user what stage of their journey 
they're in. All directly on your raw analytics data.

## How to get it
The models and operations you need are live in the [open model hub][model-hub] and for [Bach][bach]. For 
running your own analysis, please have a look at the [example notebook][example-notebook].

Enjoy modeling User Intent!
