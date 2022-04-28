---
date: '2022-04-28T19:19:08.619Z'
id: modelhub-api-reference-model-hub-modelhub-model-hub-time-agg
slug: /modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-agg/
title: modelhub.ModelHub.time_agg
---

# modelhub.ModelHub.time_agg


#### ModelHub.time_agg(data, time_aggregation=None)
Formats the moment column in the DataFrame, returns a SeriesString.

Can be used to aggregate to different time intervals, ie day, month etc.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **time_aggregation** (*Optional**[**str**]*) – if None, it uses [`time_aggregation`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-aggregation/#modelhub.ModelHub.time-aggregation) set from the
    ModelHub. Use any template for aggregation from:
    [https://www.postgresql.org/docs/14/functions-formatting.html](https://www.postgresql.org/docs/14/functions-formatting.html)
    ie. `time_aggregation=='YYYY-MM-DD'` aggregates by date.



* **Returns**

    SeriesString.



* **Return type**

    bach.series.series_string.SeriesString


<!-- !! processed by numpydoc !! -->
