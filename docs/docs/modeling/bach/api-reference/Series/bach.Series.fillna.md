---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-fillna
slug: /modeling/bach/api-reference/Series/bach.Series.fillna/
title: bach.Series.fillna
---

# bach.Series.fillna


#### Series.fillna(other)
Fill any NULL value with the given constant or other compatible Series

In case a Series is given, the value from the same row is used to fill.


* **Parameters**

    **other** (*Union**[**int**, **numpy.int64**, **float**, **numpy.float64**, **bool**, **None**, **str**, **datetime.date**, **datetime.time**, **datetime.datetime**, **datetime.timedelta**, **numpy.timedelta64**, **uuid.UUID**, **dict**, **list**]*) – The value to replace the NULL values with. Should be a supported
    type by the series, or a TypeError is raised. Can also be another Series


**NOTE**: Pandas replaces numpy.nan values, we can only replace NULL.

**NOTE**: You can replace None with None, have fun, forever!

<!-- !! processed by numpydoc !! -->
