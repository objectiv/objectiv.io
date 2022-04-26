---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-sem
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.sem/
title: bach.DataFrame.sem
---

bach.DataFrame.sem


#### DataFrame.sem(axis=1, skipna=True, level=None, ddof=1, numeric_only=False, \*\*kwargs)
Returns the unbiased standard error of the mean of each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **skipna** – only `skipna=True` supported. This means NULL values are ignored.


    * **level** – not supported.


    * **ddof** (*int*) – Delta Degrees of Freedom. Only 1 is supported.


    * **numeric_only** – whether to aggregate numeric series only, or attempt all.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
