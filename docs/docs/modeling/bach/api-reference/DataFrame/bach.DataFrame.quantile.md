---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-quantile
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.quantile/
title: bach.DataFrame.quantile
---

# bach.DataFrame.quantile


#### DataFrame.quantile(q=0.5, axis=1, \*\*kwargs)
Returns the quantile per numeric/timedelta column.


* **Parameters**

    
    * **q** (*Union**[**float**, **List**[**float**]**]*) – value or list of values between 0 and 1.


    * **axis** – only `axis=1` is supported. This means columns are aggregated.



* **Returns**

    a new DataFrame with the aggregation applied to all selected columns.


<!-- !! processed by numpydoc !! -->
