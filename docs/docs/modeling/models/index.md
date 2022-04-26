---
date: '2022-04-26T12:27:56.237Z'
id: models-index
sidebar_position: 3
slug: /modeling/models//
title: Model overview
---

sidebar_position: 3
Model overview

The model hub has two main type of functions: map and aggregate.


* map functions always return a series with the same shape and index as the DataFrame they are applied to.
This ensures they can be added as a column to that DataFrame. map functions that return SeriesBoolean can
be used with to filter the data.


* aggregate fuctions return aggregated data in some form from the DataFrame. Can also be accessed with
agg.

Mapping

| [modelhub.Map.is_first_session](#modelhub.Map.is_first_session)`Map.is_first_session`(data)

 | Labels all hits in a session True if that session is the first session of that user in the data.

 |
| [modelhub.Map.is_new_user](#modelhub.Map.is_new_user)`Map.is_new_user`(data[, time_aggregation])

         | Labels all hits True if the user is first seen in the period given time_aggregation.

                                                                                                                                  |
| [modelhub.Map.is_conversion_event](#modelhub.Map.is_conversion_event)`Map.is_conversion_event`(data, name)

               | Labels a hit True if it is a conversion event, all other hits are labeled False.

                                                                                                                                      |
| [modelhub.Map.conversions_counter](#modelhub.Map.conversions_counter)`Map.conversions_counter`(data, name[, partition])

  | Counts the total number of conversions given a partition (ie session_id or user_id).

                                                                                                                                  |
| [modelhub.Map.conversions_in_time](#modelhub.Map.conversions_in_time)`Map.conversions_in_time`(data, name[, partition])

  | Counts the number of time a user is converted at a moment in time given a partition (ie 'session_id' or 'user_id').

                                                                                                   |
| [modelhub.Map.pre_conversion_hit_number](#modelhub.Map.pre_conversion_hit_number)`Map.pre_conversion_hit_number`(data, name[, ...])

  | Returns a count backwards from the first conversion, given the partition.

                                                                                                                                             |
Aggregation

| [modelhub.Aggregate.unique_users](#modelhub.Aggregate.unique_users)`Aggregate.unique_users`(data[, groupby])

           | Calculate the unique users in the Objectiv `data`.

                                                                                                                                                                      |
| [modelhub.Aggregate.unique_sessions](#modelhub.Aggregate.unique_sessions)`Aggregate.unique_sessions`(data[, groupby])

        | Calculate the unique sessions in the Objectiv `data`.

                                                                                                                                                                   |
| [modelhub.Aggregate.session_duration](#modelhub.Aggregate.session_duration)`Aggregate.session_duration`(data[, groupby, ...])

  | Calculate the duration of sessions.

                                                                                                                                                                                   |
| [modelhub.Aggregate.frequency](#modelhub.Aggregate.frequency)`Aggregate.frequency`(data)

                         | Calculate a frequency table for the number of users by number of sessions.

                                                                                                                                            |
