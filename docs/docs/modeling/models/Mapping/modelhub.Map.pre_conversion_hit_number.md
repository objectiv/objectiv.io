---
date: '2022-04-26T12:27:56.237Z'
id: models-mapping-modelhub-map-pre-conversion-hit-number
slug: /modeling/models/Mapping/modelhub.Map.pre-conversion-hit-number/
title: modelhub.Map.pre_conversion_hit_number
---

modelhub.Map.pre_conversion_hit_number


#### Map.pre_conversion_hit_number(data, name, partition='session_id')
Returns a count backwards from the first conversion, given the partition. I.e. first hit before
converting is 1, second hit before converting 2, etc. Returns None if there are no conversions
in the partition or after the first conversion.


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
