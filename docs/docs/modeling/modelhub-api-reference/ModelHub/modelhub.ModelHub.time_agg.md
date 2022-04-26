---
date: '2022-04-26T12:27:56.237Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-time-agg
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/
title: modelhub.ModelHub.time_agg
---

modelhub.ModelHub.time_agg


#### ModelHub.time_agg(data, time_aggregation=None)
Formats the moment column in the DataFrame, returns a SeriesString.

Can be used to aggregate to different time intervals, ie day, month etc.


* **Parameters**

    
    * **data** ([bach.dataframe.DataFrame](#bach.DataFrame)*bach.dataframe.DataFrame*) – [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` to apply the method on.


    * **time_aggregation** (*Optional**[**str**]*) – if None, it uses [modelhub.ModelHub.time_aggregation](#modelhub.ModelHub.time_aggregation)`time_aggregation` set from the
    ModelHub. Use any template for aggregation from:
    https://www.postgresql.org/docs/14/functions-formatting.html
    ie. `time_aggregation=='YYYY-MM-DD'` aggregates by date.



* **Returns**

    SeriesString.



* **Return type**

    [bach.series.series_string.SeriesString](#bach.SeriesString)bach.series.series_string.SeriesString


<!-- !! processed by numpydoc !! -->
