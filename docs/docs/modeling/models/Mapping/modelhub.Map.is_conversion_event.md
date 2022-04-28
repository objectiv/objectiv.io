---
date: '2022-04-28T14:46:08.106Z'
id: models-mapping-modelhub-map-is-conversion-event
slug: /modeling/models/Mapping/modelhub.Map.is-conversion-event/
title: modelhub.Map.is_conversion_event
---

# modelhub.Map.is_conversion_event


#### Map.is_conversion_event(data, name)
Labels a hit True if it is a conversion event, all other hits are labeled False.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](../../bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](../../bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **name** (*str*) – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](../../modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.



* **Return type**

    bach.series.series_boolean.SeriesBoolean


<!-- !! processed by numpydoc !! -->
