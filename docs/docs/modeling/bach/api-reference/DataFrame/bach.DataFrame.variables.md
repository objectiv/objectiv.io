---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-variables
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.variables/
title: bach.DataFrame.variables
---

bach.DataFrame.variables


#### _property_ DataFrame.variables(_: Dict[bach.dataframe.DtypeNamePair, Hashable_ )
Get all variables for which values are set, which will be used when querying the database.

Note that there might also be variables defined earlier in self.base_node, that already have a value.
Those variables values will not be changed, unless they are listed here. To get an overview of all
variables on which the values in this DataFrame depend use `get_all_defined_variables()`

<!-- !! processed by numpydoc !! -->
