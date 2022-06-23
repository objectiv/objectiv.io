---
title: "Release: New Retention model in the open model hub"
description: "Run retention analysis directly on your data store, with just one operation. No need for data cleaning or building complex SQL queries. Next to overall retention analysis, it also enables you to drill down directly; you can quickly segment each cohort and stack ready-to-use models on top, like which top features are being used."
slug: release-new-retention-model-in-the-open-model-hub/
tags: [releases]
image: /img/open-graph/og-retention-model.png
authors: ivarpruijn
---

<head>
  <meta property="og:title" content="Release: New Retention model in the open model hub" />
</head>

import BlogImage from '@site/src/components/blog-image'
import JoinSlackLink from '@site/src/components/join-slack-link';
import VimeoPlayer from '@site/src/components/vimeo-player';

[top_product_features_before_conversion]: https://objectiv.io/docs/modeling/open-model-hub/models/aggregation/top_product_features_before_conversion/
[retention-matrix-model]: https://objectiv.io/docs/modeling/open-model-hub/models/aggregation/retention_matrix/
[visible-event]: https://objectiv.io/docs/taxonomy/reference/events/VisibleEvent
[open-model-hub]: https://objectiv.io/docs/modeling/open-model-hub/
[office-hours]: https://calendly.com/objectiv_io/objectiv-office-hours

<intro>

In this release we [added a Retention Matrix model to the open model hub][retention-matrix-model], that 
enables you to run retention analysis directly on your data store, with just one operation. No need for data 
cleaning or building complex SQL queries. Next to overall retention analysis, it also enables you to drill 
down directly; you can quickly segment each cohort and stack ready-to-use models on top, like which top 
features are being used.

Use the new model to drive product adoption by understanding to what extent users return to your product, 
whether that improves over time, and how each cohort behaves in detail. 

</intro>

<!--truncate-->

<VimeoPlayer id="product-demo-retention-matrix" videoId="723381969" paddingBottom="58.25%" />

# A demo

To build a Retention Matrix, you just need a dataframe with Objectiv data containing `user_id`s and `moment`s, 
which are the dates for events that we consider relevant user activity. 

You call the [`retention_matrix`][retention-matrix-model] operation from the open model hub, and choose the 
desired timeframe (daily, weekly, monthly, or yearly) to use for the mutually exclusive cohorts that users 
will be distributed into:

```python
retention_matrix = modelhub.map.retention_matrix(df, time_period='monthly', percentage=True, display=True)
retention_matrix.head()
```

The result is shown in a heatmap (or as a dataframe, with parameter `display=False`):

<BlogImage url="/img/blog/releases/20220624/retention-matrix-example.png" size="large" />

What you see here is that:
- Each _row_ represents a cohort - in this case months;
- Each _column_ represents a time range, calculated with respect to the cohort start time - in this case number 
  of months after the cohort’s start month;
- The _values_ are the percentage or number of users in a given cohort that returned in that time range.

That’s it! Retention analysis straight out of the box, on raw analytics data.

# Drilling down cohorts with ready-to-use models

In the Retention Matrix above, we can see that in the second cohort (of 2022-03) there’s a drop in retained 
users in the next month. Only 3.6% returned, whereas in the previous month’s cohort, this was 7.0%.

Let’s zoom in on these cohorts to analyze their differences, which we can now easily do, directly on the raw 
data.

First we calculate which cohort each user falls in, and add it to our dataframe:

```python
cohorts = df[['user_id', 'moment']].groupby('user_id')['moment'].min().reset_index()
cohorts = cohorts.rename(columns={'moment': 'first_cohort'})

# add first cohort of the users to our DataFrame
df = df.merge(cohorts, on='user_id', how='left')
```

Then we create the segment of users in the first month (2022-02) by simply filtering on the time range, and 
see which features they used and how often:

```python
cohort0_filter = (df['first_cohort'] > datetime(2022, 2, 1)) & (df['first_cohort'] < datetime(2022, 3, 1))
df[cohort0_filter]['event_type'].value_counts().head()
```

Those users used the following features:

```console
event_type
VisibleEvent              3091
PressEvent                2928
ApplicationLoadedEvent    2234
MediaLoadEvent            1082
MediaStartEvent           528
Name: value_counts, dtype: int64
```

Now let’s look at what users did who are in the problematic segment:

```python
cohort1_filter = (df['first_cohort'] > datetime(2022, 3, 1)) & (df['first_cohort'] < datetime(2022, 4, 1))
df[cohort1_filter]['event_type'].value_counts().head()
```

These ‘problematic’ users used the following features:

```console
event_type
PressEvent                760
VisibleEvent              645
ApplicationLoadedEvent    536
MediaLoadEvent            267
HiddenEvent               90
Name: value_counts, dtype: int64
```


As you can see the ‘problematic’ users generated relatively less [`VisibleEvent`][visible-event]s than the 
ones in the first cohort. Based on this we could form a hypothesis that something might be wrong on one of the 
key screens. We can then drill down into this with more models from the open model hub, to further analyze the 
exact screens that are most used.

Of course this is a basic analysis just for demonstration purposes. But: you can run any advanced analysis on 
the full data set, and use it with any of the models in the open model hub, like the 
[`top_product_features_before_conversion`][top_product_features_before_conversion] (to find out what users 
did before converting to a certain product goal).

# Translated to SQL
The model hub translates all operations to SQL under the hood, so it can run directly on the data store. 
Retention analysis is a complex analysis to write in SQL, but luckily the model hub handles the complexity. 
See the resulting SQL below, which you can export to your solution of choice, like a BI-tool or dbt.

```sql
with "from_table___c1b146e9b8790a782d95d340ebb0bcc6" as (SELECT "value","event_id","day","moment","cookie_id" FROM "data"),
"getitem_where_boolean___ff489f337c19e37f9e19530764f9e2b0" as (select "value" as "value", "event_id" as "event_id", "day" as "day", "moment" as "moment", "cookie_id" as "user_id", "value"->>'_type' as "event_type", cast("value"->>'_types' as jsonb) as "stack_event_types", cast("value"->>'global_contexts' as jsonb) as "global_contexts", cast("value"->>'location_stack' as jsonb) as "location_stack", cast("value"->>'time' as bigint) as "time" 
from "from_table___c1b146e9b8790a782d95d340ebb0bcc6" 
where ("day" >= '2022-02-02') 

),
"context_data___b3c0c355db5e452e0a72c3ea9d6f0990" as (select "event_id" as "event_id", "day" as "day", "moment" as "moment", "user_id" as "user_id", "global_contexts" as "global_contexts", "location_stack" as "location_stack", "event_type" as "event_type", "stack_event_types" as "stack_event_types" 
from "getitem_where_boolean___ff489f337c19e37f9e19530764f9e2b0" 

),
"session_starts___11706c1c288ff3ea3aaa758ad286be10" as (select "event_id" as "event_id", "day" as "day", "moment" as "moment", "user_id" as "user_id", "global_contexts" as "global_contexts", "location_stack" as "location_stack", "event_type" as "event_type", "stack_event_types" as "stack_event_types", CASE WHEN (extract(epoch from (("moment") - (lag("moment", 1, cast(NULL as timestamp without time zone)) over (partition by "user_id" order by "moment" asc, "event_id" asc RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)))) <= cast(1800 as bigint)) THEN NULL ELSE True END as "is_start_of_session" 
from "context_data___b3c0c355db5e452e0a72c3ea9d6f0990" 

),
"session_id_and_count___6e4eee17432a1704e11c7e09847dac98" as (select "event_id" as "event_id", "day" as "day", "moment" as "moment", "user_id" as "user_id", "global_contexts" as "global_contexts", "location_stack" as "location_stack", "event_type" as "event_type", "stack_event_types" as "stack_event_types", "is_start_of_session" as "is_start_of_session", CASE WHEN "is_start_of_session" THEN row_number() over (partition by "is_start_of_session" order by "moment" asc, "event_id" asc RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) ELSE cast(NULL as bigint) END as "session_start_id", count("is_start_of_session") over ( order by "user_id" asc, "moment" asc, "event_id" asc RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as "is_one_session" 
from "session_starts___11706c1c288ff3ea3aaa758ad286be10" 

),
"objectiv_sessionized_data___ae605b672716871d4520f5ccf2a32aef" as (select "event_id" as "event_id", "day" as "day", "moment" as "moment", "user_id" as "user_id", "global_contexts" as "global_contexts", "location_stack" as "location_stack", "event_type" as "event_type", "stack_event_types" as "stack_event_types", "is_start_of_session" as "is_start_of_session", "session_start_id" as "session_start_id", "is_one_session" as "is_one_session", first_value("session_start_id") over (partition by "is_one_session" order by "moment" asc, "event_id" asc RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as "session_id", row_number() over (partition by "is_one_session" order by "moment" asc, "event_id" asc RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as "session_hit_number" 
from "session_id_and_count___6e4eee17432a1704e11c7e09847dac98" 

),
"reset_index___8ecacea309f694e7adf2c550f682b2d3" as (select "user_id" as "user_id", min("moment") as "moment" 
from "objectiv_sessionized_data___ae605b672716871d4520f5ccf2a32aef" 

group by "user_id" 

),
"merge_sql___5f92a1753c1f7321520c121bcb5d70e8" as (
            select "l"."event_id" as "event_id", COALESCE("l"."user_id", "r"."user_id") as "user_id", "l"."moment" as "moment", "r"."moment" as "first_cohort"
            from "objectiv_sessionized_data___ae605b672716871d4520f5ccf2a32aef" as l left
            join "reset_index___8ecacea309f694e7adf2c550f682b2d3" as r on ("l"."user_id" = "r"."user_id")
            ),
"reset_index___d88b26fed0a1be43e0caa75be4d64ea4" as (select to_char("first_cohort", 'YYYY"-"MM') as "first_cohort", ('_' || cast((((cast(to_char("moment", 'YYYY') as bigint) - cast(to_char("first_cohort", 'YYYY') as bigint)) * cast(12 as bigint)) + (cast(to_char("moment", 'MM') as bigint) - cast(to_char("first_cohort", 'MM') as bigint))) as text)) as "cohort_distance", count(distinct "user_id") as "user_id_nunique" 
from "merge_sql___5f92a1753c1f7321520c121bcb5d70e8" 

group by to_char("first_cohort", 'YYYY"-"MM'), ('_' || cast((((cast(to_char("moment", 'YYYY') as bigint) - cast(to_char("first_cohort", 'YYYY') as bigint)) * cast(12 as bigint)) + (cast(to_char("moment", 'MM') as bigint) - cast(to_char("first_cohort", 'MM') as bigint))) as text)) 

),
"unstack___e9cb08241bbbbd234f295a0e6e3ca599" as (select "first_cohort" as "first_cohort", max("user_id_nunique") as "user_id_nunique", max("cohort_distance") as "cohort_distance", max(CASE WHEN ("cohort_distance" = '_2') THEN "user_id_nunique" ELSE cast(NULL as bigint) END) as "_2__user_id_nunique", max(CASE WHEN ("cohort_distance" = '_4') THEN "user_id_nunique" ELSE cast(NULL as bigint) END) as "_4__user_id_nunique", max(CASE WHEN ("cohort_distance" = '_3') THEN "user_id_nunique" ELSE cast(NULL as bigint) END) as "_3__user_id_nunique", max(CASE WHEN ("cohort_distance" = '_0') THEN "user_id_nunique" ELSE cast(NULL as bigint) END) as "_0__user_id_nunique", max(CASE WHEN ("cohort_distance" = '_1') THEN "user_id_nunique" ELSE cast(NULL as bigint) END) as "_1__user_id_nunique" 
from "reset_index___d88b26fed0a1be43e0caa75be4d64ea4" 

group by "first_cohort" 

)
select "first_cohort" as "first_cohort", (cast("_0__user_id_nunique" as double precision) / "_0__user_id_nunique") as "_0", (cast("_1__user_id_nunique" as double precision) / "_0__user_id_nunique") as "_1", (cast("_2__user_id_nunique" as double precision) / "_0__user_id_nunique") as "_2", (cast("_3__user_id_nunique" as double precision) / "_0__user_id_nunique") as "_3", (cast("_4__user_id_nunique" as double precision) / "_0__user_id_nunique") as "_4" 
from "unstack___e9cb08241bbbbd234f295a0e6e3ca599" 

order by "first_cohort" asc nulls last 
```

# Summary

The new [Retention Matrix model in the open model hub][retention-matrix-model] enables you to easily run 
retention analysis directly on your data store, with just one operation. No need to clean data or build 
complex SQL queries, as the model hub takes care of this. Each cohort can then be easily segmented in order 
to drill-down into the user behavior, with [ready-to-use models][open-model-hub].

You can use this to drive product adoption by understanding to what extent users return to your product, 
whether that improves over time, and how each cohort behaves in detail. 

:::info
## Office Hours
If you have any questions about this release or anything else, or if you just want to say 'Hi!' to team 
Objectiv, we have [Office Hours every Thursday at 4pm CET, 10am EST][office-hours] that you can freely dial 
in to. If you're in a timezone that doesn’t fit well, just ping us 
on <JoinSlackLink linkText="Slack" /> and we'll send over an invite for a better moment.

[Join the Office Hours][office-hours]
:::