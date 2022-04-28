---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-series-bach-series-median
slug: /modeling/bach/api-reference/Series/bach.Series.median/
title: bach.Series.median
---

# bach.Series.median


#### Series.median(partition=None, skipna=True)
Returns the median in each partition or for all values if none is given.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[*DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)*]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
