---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-agg
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.agg/
title: bach.DataFrame.agg
---

bach.DataFrame.agg


#### DataFrame.agg(func, axis=1, numeric_only=False, \*args, \*\*kwargs)
Aggregate using one or more operations over the specified axis.


* **Parameters**

    
    * **func** (*Union**[**str**, **Callable**, **List**[**Union**[**Callable**, **str**]**]**, **Dict**[**str**, **Union**[**str**, **Callable**, **List**[**Union**[**Callable**, **str**]**]**]**]**]*) – the aggregations to apply on all series. Accepted combinations are:


        * function, e.g. SeriesInt64.sum


        * function name


        * list of functions and/or function names, e.g. [SeriesInt64.sum, ‘mean’]


        * dict of axis labels -> functions, function names or list of such.



    * **axis** (*int*) – the aggregation axis. If `axis=1` the index is aggregated as well. Only `axis=1`
    supported at the moment.


    * **numeric_only** (*bool*) – whether to aggregate numeric series only, or attempt all.


    * **args** – Positional arguments to pass through to the aggregation function


    * **kwargs** – Keyword arguments to pass through to the aggregation function


**NOTE**: Pandas has `numeric_only=None` to attempt all columns but ignore failing ones
silently. This is currently not implemented.

**NOTE**: The axis parameter defaults to 1, because 0 is currently unsupported

<!-- !! processed by numpydoc !! -->
