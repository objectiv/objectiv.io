---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-series-bach-series-notnull
slug: /modeling/bach/api-reference/Series/bach.Series.notnull/
title: bach.Series.notnull
---

# bach.Series.notnull


#### Series.notnull()
Evaluate for every row in this series whether the value is not missing or NULL.

**NOTE**: Only NULL values in the Series in the underlying sql table will return True. numpy.nan is not
checked for.

<!-- !! processed by numpydoc !! -->
