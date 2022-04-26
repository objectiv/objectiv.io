---
date: '2022-04-26T12:27:56.237Z'
id: models-aggregation-modelhub-aggregate-unique-users
slug: /modeling/models/Aggregation/modelhub.Aggregate.unique-users/
title: modelhub.Aggregate.unique_users
---

modelhub.Aggregate.unique_users


#### Aggregate.unique_users(data, groupby=NotSet.token)
Calculate the unique users in the Objectiv `data`.


* **Parameters**

    
    * **data** ([bach.dataframe.DataFrame](#bach.DataFrame)*bach.dataframe.DataFrame*) – [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` to apply the method on.


    * **groupby** (*Union**[**List**[**Union**[**str**, *[bach.series.series.Series](#bach.Series)*bach.series.series.Series**]**]**, **str**, *[bach.series.series.Series](#bach.Series)*bach.series.series.Series**, **sql_models.constants.NotSet**]*) – sets the column(s) to group by.


        * if not_set it defaults to using [modelhub.ModelHub.time_agg](#modelhub.ModelHub.time_agg)`ModelHub.time_agg`.


        * if None it aggregates over all data.




* **Returns**

    series with results.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
