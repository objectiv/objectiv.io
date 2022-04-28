---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-series-bach-series-count
slug: /modeling/bach/api-reference/Series/bach.Series.count/
title: bach.Series.count
---

# bach.Series.count


#### Series.count(partition=None, skipna=True)
Returns the amount of rows in each partition or for all values if none is given.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[*DataFrame*](../DataFrame/bach.DataFrame/#bach.DataFrame)*]*) – The partition or window to apply


    * **skipna** (*bool*) – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new Series with the aggregation applied


<!-- !! processed by numpydoc !! -->
