---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric-qcut
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric.qcut/
title: bach.SeriesAbstractNumeric.qcut
---

bach.SeriesAbstractNumeric.qcut


#### SeriesAbstractNumeric.qcut(q)
Segments values into equal-sized buckets based on rank or sample quantiles.


* **Parameters**

    **q** (*Union**[**int**, **List**[**float**]**]*) – Number of quantiles or list of quantiles to consider.



* **Returns**

    series containing each quantile range/interval per value. Original series is set as index.



* **Return type**

    [bach.series.series_numeric.SeriesAbstractNumeric](#bach.SeriesAbstractNumeric)bach.series.series_numeric.SeriesAbstractNumeric


<!-- !! processed by numpydoc !! -->
