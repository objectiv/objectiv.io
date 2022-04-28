---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-agg
slug: /modeling/bach/api-reference/Series/bach.Series.agg/
title: bach.Series.agg
---

# bach.Series.agg


#### Series.agg(func, group_by=None, \*args, \*\*kwargs)
Apply one or more aggregation functions to this Series.


* **Parameters**

    
    * **func** (*Union**[**str**, **Callable**, **List**[**Union**[**Callable**, **str**]**]**]*) – the aggregation function to look for on all series.
    See GroupBy.agg() for supported arguments


    * **group_by** (*GroupBy*) – the group_by to use, or aggregation over full base_node if None


    * **args** – Positional arguments to pass through to the aggregation function


    * **kwargs** – Keyword arguments to pass through to the aggregation function



* **Returns**

    Aggregated Series, or DataFrame if multiple series are returned



* **Return type**

    *Union*[[DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame), [Series](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)]


<!-- !! processed by numpydoc !! -->
