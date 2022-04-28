---
date: '2022-04-28T19:24:58.840Z'
id: models-aggregation-modelhub-aggregate-session-duration
slug: /modeling/models/Aggregation/modelhub.Aggregate.session-duration/
title: modelhub.Aggregate.session_duration
---

# modelhub.Aggregate.session_duration


#### Aggregate.session_duration(data, groupby=NotSet.token, exclude_bounces=True, method='mean')
Calculate the duration of sessions.

With default `method`, it calculates the mean of the session duration over the `groupby`.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** (*Union**[**List**[**Union**[**str**, *[*bach.series.series.Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**]**, **str**, *[*bach.series.series.Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **sql_models.constants.NotSet**]*) – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.



    * **method** (*str*) – ‘mean’ or ‘sum’



* **Returns**

    series with results.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
