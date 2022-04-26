---
date: '2022-04-26T12:27:56.237Z'
id: models-aggregation-modelhub-aggregate-session-duration
slug: /modeling/models/Aggregation/modelhub.Aggregate.session-duration/
title: modelhub.Aggregate.session_duration
---

modelhub.Aggregate.session_duration


#### Aggregate.session_duration(data, groupby=NotSet.token, exclude_bounces=True, method='mean')
Calculate the duration of sessions.

With default method, it calculates the mean of the session duration over the groupby.


* **Parameters**

    
    * **data** ([bach.dataframe.DataFrame](#bach.DataFrame)*bach.dataframe.DataFrame*) – [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` to apply the method on.


    * **groupby** (*Union**[**List**[**Union**[**str**, *[bach.series.series.Series](#bach.Series)*bach.series.series.Series**]**]**, **str**, *[bach.series.series.Series](#bach.Series)*bach.series.series.Series**, **sql_models.constants.NotSet**]*) – sets the column(s) to group by.


        * if not_set it defaults to using [modelhub.ModelHub.time_agg](#modelhub.ModelHub.time_agg)`ModelHub.time_agg`.


        * if None it aggregates over all data.



    * **method** (*str*) – ‘mean’ or ‘sum’



* **Returns**

    series with results.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
