---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric-quantile
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric.quantile/
title: bach.SeriesAbstractNumeric.quantile
---

bach.SeriesAbstractNumeric.quantile


#### SeriesAbstractNumeric.quantile(partition=None, q=0.5, \*\*kwargs)
When q is a float or len(q) == 1, the resultant series index will remain
In case multiple quantiles are calculated, the resultant series index will have all calculated
quantiles as index values.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **q** (*Union**[**float**, **List**[**float**]**]*) – A quantile or list of quantiles to be calculated


<!-- !! processed by numpydoc !! -->
