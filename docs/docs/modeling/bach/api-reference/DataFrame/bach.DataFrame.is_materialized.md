---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-is-materialized
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.is-materialized/
title: bach.DataFrame.is_materialized
---

bach.DataFrame.is_materialized


#### _property_ DataFrame.is_materialized(_: boo_ )
Return true if this DataFrame is in a materialized state, i.e. all information about the
DataFrame’s values is encoded in self.base_node.

A DataFrame that’s freshly constructed with [bach.DataFrame.from_table](#bach.DataFrame.from_table)`from_table()`,
[bach.DataFrame.from_model](#bach.DataFrame.from_model)`from_model()`, or [bach.DataFrame.from_pandas](#bach.DataFrame.from_pandas)`from_pandas()` will be in a materialized state. Operations on such
a DataFrame will change it to be not materialized. Calling [bach.DataFrame.materialize](#bach.DataFrame.materialize)`materialize()` on a
non-materialized DataFrame will return a new DataFrame that is materialized.

TODO: a known problem is that DataFrames with ‘json’ columns are never in a materialized state, and

    cannot be materialized with materialize()


* **Returns**

    True if this DataFrame is in a materialized state, False otherwise


<!-- !! processed by numpydoc !! -->
