---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-series-bach-series-window-lead
slug: /modeling/bach/api-reference/Series/bach.Series.window-lead/
title: bach.Series.window_lead
---

# bach.Series.window_lead


#### Series.window_lead(offset=1, default=None, window=None)
Returns value evaluated at the row that is offset rows after the current row within the window.

If there is no such row, instead returns default (which must be of the same type as value).
Both offset and default are evaluated with respect to the current row.
:param offset: The amount of rows to look forward, default 1
:param default: The value to return if no value is available, can be a constant value or Series.
Defaults to None

<!-- !! processed by numpydoc !! -->
