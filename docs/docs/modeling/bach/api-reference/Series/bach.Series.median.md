---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-median
slug: /modeling/bach/api-reference/Series/bach.Series.median/
title: bach.Series.median
---

bach.Series.median


#### Series.median(partition=None, skipna=True)
Returns the median in each partition or for all values if none is given.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
