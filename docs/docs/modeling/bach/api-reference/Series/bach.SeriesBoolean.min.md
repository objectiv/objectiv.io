---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-boolean-min
slug: /modeling/bach/api-reference/Series/bach.SeriesBoolean.min/
title: bach.SeriesBoolean.min
---

bach.SeriesBoolean.min


#### SeriesBoolean.min(partition=None, skipna=True)
Returns the minimum value in the partition.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
