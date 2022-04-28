---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-expanding
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.expanding/
title: bach.DataFrame.expanding
---

# bach.DataFrame.expanding


#### DataFrame.expanding(min_periods=1, center=False)
Create an expanding window starting with the first row in the group, with at least `min_period`
observations. The result will be right-aligned in the window.

To use grouping as well, first call [`group_by()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/#bach.DataFrame.group-by) on this frame and call rolling on the result.


* **Parameters**

    
    * **min_periods** (*int*) – the minimum amount of observations in the window before a value is reported.


    * **center** (*bool*) – whether to center the result, currently not supported.


<!-- !! processed by numpydoc !! -->
