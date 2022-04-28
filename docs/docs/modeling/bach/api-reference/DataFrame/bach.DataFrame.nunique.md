---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-nunique
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.nunique/
title: bach.DataFrame.nunique
---

# bach.DataFrame.nunique


#### DataFrame.nunique(axis=1, skipna=True, \*\*kwargs)
Returns the number of unique values in each column.


* **Parameters**

    
    * **axis** – only `axis=1` is supported. This means columns are aggregated.


    * **skipna** – only `skipna=True` supported. This means NULL values are ignored.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
