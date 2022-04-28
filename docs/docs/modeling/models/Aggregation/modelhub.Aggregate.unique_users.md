---
date: '2022-04-28T14:46:08.106Z'
id: models-aggregation-modelhub-aggregate-unique-users
slug: /modeling/models/Aggregation/modelhub.Aggregate.unique-users/
title: modelhub.Aggregate.unique_users
---

# modelhub.Aggregate.unique_users


#### Aggregate.unique_users(data, groupby=NotSet.token)
Calculate the unique users in the Objectiv `data`.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](../../bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](../../bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **groupby** (*Union**[**List**[**Union**[**str**, *[*bach.series.series.Series*](../../bach/api-reference/Series/bach.Series/#bach.Series)*]**]**, **str**, *[*bach.series.series.Series*](../../bach/api-reference/Series/bach.Series/#bach.Series)*, **sql_models.constants.NotSet**]*) – sets the column(s) to group by.


        * if not_set it defaults to using [`ModelHub.time_agg`](../../modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/#modelhub.ModelHub.time-agg).


        * if None it aggregates over all data.




* **Returns**

    series with results.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
