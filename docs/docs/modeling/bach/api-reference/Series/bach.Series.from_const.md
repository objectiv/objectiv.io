---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-from-const
slug: /modeling/bach/api-reference/Series/bach.Series.from-const/
title: bach.Series.from_const
---

# bach.Series.from_const


#### _classmethod_ Series.from_const(base, value, name)
Create an instance of this class, that represents a column with the given value.
The returned Series will be similar to the Series given as base. In case a DataFrame is given,
it can be used immediately with that frame.
:param base:    The DataFrame or Series that the internal parameters are taken from
:param value:   The value that this constant Series will have
:param name:    The name that it will be known by (only for representation)

<!-- !! processed by numpydoc !! -->
