---
date: '2022-04-28T19:19:08.619Z'
id: models-mapping-modelhub-map-conversions-counter
slug: /modeling/models/Mapping/modelhub.Map.conversions-counter/
title: modelhub.Map.conversions_counter
---

# modelhub.Map.conversions_counter


#### Map.conversions_counter(data, name, partition='session_id')
Counts the total number of conversions given a partition (ie session_id
or user_id).


* **Parameters**

    
    * **name** (*str*) – the name of the conversion to label as set in
    [`ModelHub.conversion_events`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.conversion-events/#modelhub.ModelHub.conversion-events).


    * **partition** (*str*) – the partition over which the number of conversions are counted. Can be any column
    of the ObjectivFrame



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.


<!-- !! processed by numpydoc !! -->
