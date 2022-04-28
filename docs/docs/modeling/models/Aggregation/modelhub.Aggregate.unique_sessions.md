---
date: '2022-04-28T19:19:08.619Z'
id: models-aggregation-modelhub-aggregate-unique-sessions
slug: /modeling/models/Aggregation/modelhub.Aggregate.unique-sessions/
title: modelhub.Aggregate.unique_sessions
---

# modelhub.Aggregate.unique_sessions


#### Aggregate.unique_sessions(data, groupby=NotSet.token)
Calculate the unique sessions in the Objectiv `data`.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** (*Union**[**List**[**Union**[**str**, *[*bach.series.series.Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**]**, **str**, *[*bach.series.series.Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **sql_models.constants.NotSet**]*) – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.




* **Returns**

    series with results.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
