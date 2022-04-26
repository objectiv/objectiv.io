---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-window-lag
slug: /modeling/bach/api-reference/Series/bach.Series.window-lag/
title: bach.Series.window_lag
---

bach.Series.window_lag


#### Series.window_lag(offset=1, default=None, window=None)
Returns value evaluated at the row that is offset rows before the current row within the window

If there is no such row, instead returns default (which must be of the same type as value).
Both offset and default are evaluated with respect to the current row.
:param offset: The amount of rows to look back, default 1
:param default: The value to return if no value is available, can be a constant value or Series.
Defaults to None

<!-- !! processed by numpydoc !! -->
