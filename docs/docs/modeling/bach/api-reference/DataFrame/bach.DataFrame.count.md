---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-count
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.count/
title: bach.DataFrame.count
---

# bach.DataFrame.count


#### DataFrame.count(axis=1, level=None, numeric_only=False, \*\*kwargs)
Count all non-NULL values in each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **level** – not supported.


    * **numeric_only** – whether to aggregate numeric series only, or attempt all.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
