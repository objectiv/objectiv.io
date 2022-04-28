---
date: '2022-04-28T14:46:08.106Z'
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

    *Union*[[DataFrame](../DataFrame/bach.DataFrame/#bach.DataFrame), [Series](bach.Series/#bach.Series)]


<!-- !! processed by numpydoc !! -->
