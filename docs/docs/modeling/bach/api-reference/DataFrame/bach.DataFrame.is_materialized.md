---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-is-materialized
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.is-materialized/
title: bach.DataFrame.is_materialized
---

# bach.DataFrame.is_materialized


#### _property_ DataFrame.is_materialized(_: boo_ )
Return true if this DataFrame is in a materialized state, i.e. all information about the
DataFrame’s values is encoded in self.base_node.

A DataFrame that’s freshly constructed with [`from_table()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-table/#bach.DataFrame.from-table),
[`from_model()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-model/#bach.DataFrame.from-model), or [`from_pandas()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.from-pandas/#bach.DataFrame.from-pandas) will be in a materialized state. Operations on such
a DataFrame will change it to be not materialized. Calling [`materialize()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.materialize/#bach.DataFrame.materialize) on a
non-materialized DataFrame will return a new DataFrame that is materialized.

TODO: a known problem is that DataFrames with ‘json’ columns are never in a materialized state, and
cannot be materialized with materialize()



* **Returns**

    True if this DataFrame is in a materialized state, False otherwise


<!-- !! processed by numpydoc !! -->
