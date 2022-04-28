---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-series-bach-series-isnull
slug: /modeling/bach/api-reference/Series/bach.Series.isnull/
title: bach.Series.isnull
---

# bach.Series.isnull


#### Series.isnull()
Evaluate for every row in this series whether the value is missing or NULL.

**NOTE**: Only NULL values in the Series in the underlying sql table will return True. numpy.nan is not
checked for.

<!-- !! processed by numpydoc !! -->
