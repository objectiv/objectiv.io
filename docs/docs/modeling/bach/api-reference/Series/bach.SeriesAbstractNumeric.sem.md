---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric-sem
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric.sem/
title: bach.SeriesAbstractNumeric.sem
---

bach.SeriesAbstractNumeric.sem


#### SeriesAbstractNumeric.sem(partition=None, skipna=True, ddof=None, \*\*kwargs)
Get the unbiased standard error of the mean.
Normalized by N-1 by default.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – Exclude NA/NULL values


    * **ddof** (*int*) – Delta degrees of freedom. he divisor used in calculations is N - ddof,
    where N represents the number of elements


<!-- !! processed by numpydoc !! -->
