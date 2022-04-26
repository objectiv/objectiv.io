---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-median
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.median/
title: bach.DataFrame.median
---

bach.DataFrame.median


#### DataFrame.median(axis=1, skipna=True, level=None, numeric_only=False, \*\*kwargs)
Returns the median of all values in each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **skipna** – only `skipna=True` supported. This means NULL values are ignored.


    * **level** – not supported.


    * **numeric_only** – whether to aggregate numeric series only, or attempt all.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
