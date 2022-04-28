---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-series-bach-series-apply-func
slug: /modeling/bach/api-reference/Series/bach.Series.apply-func/
title: bach.Series.apply_func
---

# bach.Series.apply_func


#### Series.apply_func(func, \*args, \*\*kwargs)
Apply the given functions to this Series.
If multiple are given, a list of multiple new series will be returned.


* **Parameters**

    
    * **func** (*Union**[**str**, **Callable**, **List**[**Union**[**Callable**, **str**]**]**]*) – the function to look for on all series, either as a str, or callable,
    or a list of such


    * **args** – Positional arguments to pass through to the aggregation function


    * **kwargs** – Keyword arguments to pass through to the aggregation function


**WARNING**: You should probably not use this method directly.

<!-- !! processed by numpydoc !! -->
