---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-sum
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.sum/
title: bach.DataFrame.sum
---

# bach.DataFrame.sum


#### DataFrame.sum(axis=1, skipna=True, level=None, numeric_only=False, min_count=0, \*\*kwargs)
Returns the sum of all values in each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **skipna** – only `skipna=True` supported. This means NULL values are ignored.


    * **level** – not supported.


    * **numeric_only** – whether to aggregate numeric series only, or attempt all.


    * **min_count** – This minimum amount of values (not NULL) to be present before returning a result.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
