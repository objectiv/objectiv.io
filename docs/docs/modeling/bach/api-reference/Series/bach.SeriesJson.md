---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-series-bach-series-json
slug: /modeling/bach/api-reference/Series/bach.SeriesJson/
title: bach.SeriesJson
---

bach.SeriesJson


### _class_ bach.SeriesJson(engine, base_node, index, name, expression, group_by, sorted_ascending, index_sorting)
A Series that represents the json type.

When json data is encountered in a sql table, this dtype is used. In the underlying sql, the data is
cast to the jsonb type. As a result all methods of the [bach.SeriesJsonb](#bach.SeriesJsonb)`SeriesJsonb` can also be used with this
json type series.

<!-- !! processed by numpydoc !! -->
