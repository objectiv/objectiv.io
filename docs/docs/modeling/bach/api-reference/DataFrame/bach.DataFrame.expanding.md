---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-expanding
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.expanding/
title: bach.DataFrame.expanding
---

bach.DataFrame.expanding


#### DataFrame.expanding(min_periods=1, center=False)
Create an expanding window starting with the first row in the group, with at least min_period
observations. The result will be right-aligned in the window.

To use grouping as well, first call [bach.DataFrame.group_by](#bach.DataFrame.group_by)`group_by()` on this frame and call rolling on the result.


* **Parameters**

    
    * **min_periods** (*int*) – the minimum amount of observations in the window before a value is reported.


    * **center** (*bool*) – whether to center the result, currently not supported.


<!-- !! processed by numpydoc !! -->
