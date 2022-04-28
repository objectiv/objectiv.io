---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-series-bach-series-min
slug: /modeling/bach/api-reference/Series/bach.Series.min/
title: bach.Series.min
---

# bach.Series.min


#### Series.min(partition=None, skipna=True)
Returns the minimum value in each partition or for all values if none is given.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[*DataFrame*](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)*]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
