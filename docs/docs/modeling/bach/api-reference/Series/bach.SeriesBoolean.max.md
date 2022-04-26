---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-boolean-max
slug: /modeling/bach/api-reference/Series/bach.SeriesBoolean.max/
title: bach.SeriesBoolean.max
---

bach.SeriesBoolean.max


#### SeriesBoolean.max(partition=None, skipna=True)
Returns the maximum value in the partition.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
