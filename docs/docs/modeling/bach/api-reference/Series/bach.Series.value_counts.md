---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-value-counts
slug: /modeling/bach/api-reference/Series/bach.Series.value-counts/
title: bach.Series.value_counts
---

bach.Series.value_counts


#### Series.value_counts(normalize=False, sort=True, ascending=False, bins=None, method='pandas')
Returns a series containing counts per unique value


* **Parameters**

    
    * **normalize** (*bool*) – returns proportions instead of frequencies


    * **sort** (*bool*) – sorts result by frequencies


    * **ascending** (*bool*) – sorts values in ascending order if true.


    * **bins** (*Optional**[**int**]*) – works only with numeric series, groups values into the request amount of bins
    and counts values based on each range.


    * **method** (*str*) – Method to use for calculating bin ranges.
    Supported values:

    > 
    >     * ”pandas” (default): Performs bound adjustments based on Pandas implementation.


    >     * ”bach”: No bound adjustments are performed. Instead, first interval includes both
    > lower and upper bounds.




* **Returns**

    a series containing all counts per unique row.



* **Return type**

    [bach.series.series.Series](#bach.Series)bach.series.series.Series


<!-- !! processed by numpydoc !! -->
