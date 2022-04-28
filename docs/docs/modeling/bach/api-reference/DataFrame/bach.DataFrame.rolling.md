---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-rolling
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.rolling/
title: bach.DataFrame.rolling
---

# bach.DataFrame.rolling


#### DataFrame.rolling(window, min_periods=None, center=False, closed='right')
A rolling window of size ‘window’, by default right aligned.

To use grouping as well, first call [`group_by()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/#bach.DataFrame.group-by) on this frame and call rolling on the result.


* **Parameters**

    
    * **window** (*int*) – the window size.


    * **min_periods** (*Optional**[**int**]*) – the min amount of rows included in the window before an actual value is returned.


    * **center** (*bool*) – center the result, or align the result on the right.


    * **closed** (*str*) – make the interval closed on the ‘right’, ‘left’, ‘both’ or ‘neither’ endpoints.
    Defaults to ‘right’, and the rest is currently unsupported.



* **Returns**

    a new DataFrame object with the [`group_by`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/#bach.DataFrame.group-by) attribute set with a
    `bach.partitioning.Window`.



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**NOTE**: The `win_type`, `axis` and `method` parameters as supported by pandas, are currently not
implemented.

<!-- !! processed by numpydoc !! -->
