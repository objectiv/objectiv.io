---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-abstract-numeric-var
slug: /modeling/bach/api-reference/Series/bach.SeriesAbstractNumeric.var/
title: bach.SeriesAbstractNumeric.var
---

bach.SeriesAbstractNumeric.var


#### SeriesAbstractNumeric.var(partition=None, skipna=True, ddof=None, \*\*kwargs)
Get the sample variance of the input values (square of the sample standard deviation)
Normalized by N-1 by default.


* **Parameters**

    
    * **partition** (*Union**[**GroupBy**, *[bach.DataFrame](#bach.DataFrame)*DataFrame**]*) – The partition or window to apply


    * **skipna** (*bool*) – Exclude NA/NULL values


    * **ddof** (*int*) – Delta degrees of freedom. he divisor used in calculations is N - ddof,
    where N represents the number of elements


<!-- !! processed by numpydoc !! -->
