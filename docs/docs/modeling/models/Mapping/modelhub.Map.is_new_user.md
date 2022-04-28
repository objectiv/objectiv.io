---
date: '2022-04-28T19:19:08.619Z'
id: models-mapping-modelhub-map-is-new-user
slug: /modeling/models/Mapping/modelhub.Map.is-new-user/
title: modelhub.Map.is_new_user
---

# modelhub.Map.is_new_user


#### Map.is_new_user(data, time_aggregation=None)
Labels all hits True if the user is first seen in the period given `time_aggregation`.


* **Parameters**

    
    * **data** ([*bach.dataframe.DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)) – [`bach.DataFrame`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame) to apply the method on.


    * **time_aggregation** (*Optional**[**str**]*) – if None, it uses the [`ModelHub.time_aggregation`](/docs/modeling/modelhub-api-reference/ModelHub/modelhub.ModelHub.time-aggregation/#modelhub.ModelHub.time-aggregation) set in ModelHub
    instance.



* **Returns**

    `bach.SeriesBoolean` with the same index as `data`.



* **Return type**

    bach.series.series_boolean.SeriesBoolean


<!-- !! processed by numpydoc !! -->
