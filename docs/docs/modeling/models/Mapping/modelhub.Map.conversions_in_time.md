---
date: '2022-04-26T12:27:56.237Z'
id: models-mapping-modelhub-map-conversions-in-time
slug: /modeling/models/Mapping/modelhub.Map.conversions-in-time/
title: modelhub.Map.conversions_in_time
---

modelhub.Map.conversions_in_time


#### Map.conversions_in_time(data, name, partition='session_id')
Counts the number of time a user is converted at a moment in time given a partition (ie ‘session_id’
or ‘user_id’).


* **Parameters**

    
    * **data** ([bach.dataframe.DataFrame](#bach.DataFrame)*bach.dataframe.DataFrame*) – [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` to apply the method on.


    * **name** (*str*) – the name of the conversion to label as set in
    [modelhub.ModelHub.conversion_events](#modelhub.ModelHub.conversion_events)`ModelHub.conversion_events`.


    * **partition** (*str*) – the partition over which the number of conversions are counted. Can be any column
    in `data`.



* **Returns**

    `bach.SeriesInt64` with the same index as `data`.



* **Return type**

    bach.series.series_numeric.SeriesInt64


<!-- !! processed by numpydoc !! -->
