---
date: '2022-04-26T12:27:56.237Z'
id: models-mapping-modelhub-map-is-conversion-event
slug: /modeling/models/Mapping/modelhub.Map.is-conversion-event/
title: modelhub.Map.is_conversion_event
---

modelhub.Map.is_conversion_event


#### Map.is_conversion_event(data, name)
Labels a hit True if it is a conversion event, all other hits are labeled False.


* **Parameters**

    
    * **data** ([bach.dataframe.DataFrame](#bach.DataFrame)*bach.dataframe.DataFrame*) – [bach.DataFrame](#bach.DataFrame)`bach.DataFrame` to apply the method on.


    * **name** (*str*) – the name of the conversion to label as set in
    [modelhub.ModelHub.conversion_events](#modelhub.ModelHub.conversion_events)`ModelHub.conversion_events`.



* **Returns**

    [bach.SeriesBoolean](#bach.SeriesBoolean)`bach.SeriesBoolean` with the same index as `data`.



* **Return type**

    [bach.series.series_boolean.SeriesBoolean](#bach.SeriesBoolean)bach.series.series_boolean.SeriesBoolean


<!-- !! processed by numpydoc !! -->
