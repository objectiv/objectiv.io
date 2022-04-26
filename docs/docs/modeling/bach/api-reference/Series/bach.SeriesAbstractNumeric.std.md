---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric-std
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric.std/
title: bach.SeriesAbstractNumeric.std
---

bach.SeriesAbstractNumeric.std


#### SeriesAbstractNumeric.std(partition=None, skipna=True, ddof=None, \*\*kwargs)
Get the standard deviation of the input values
Normalized by N-1 by default.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – Exclude NA/NULL values


    * **ddof** (*int*) – Delta degrees of freedom. The divisor used in calculations is N - ddof,
    where N represents the number of elements


<!-- !! processed by numpydoc !! -->
