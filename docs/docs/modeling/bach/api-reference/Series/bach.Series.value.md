---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-value
slug: /modeling/bach/api-reference/Series/bach.Series.value/
title: bach.Series.value
---

# bach.Series.value


#### _property_ Series.value()
Retrieve the actual single value of this series. If it’s not sure that there is only one value,
a ValueError is raised. In that case use Series.values[0] to retrieve the value.

**NOTE**: This function queries the database.

<!-- !! processed by numpydoc !! -->
