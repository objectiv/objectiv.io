---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-std-pop
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.std-pop/
title: bach.DataFrame.std_pop
---

bach.DataFrame.std_pop


#### DataFrame.std_pop(axis=1, skipna=True, level=None, ddof=1, numeric_only=False, \*\*kwargs)
Returns the population standard deviation of each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **skipna** – only `skipna=True` supported. This means NULL values are ignored.


    * **level** – not supported.


    * **ddof** (*int*) – Delta Degrees of Freedom. Only 1 is supported.


    * **numeric_only** – whether to aggregate numeric series only, or attempt all.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
