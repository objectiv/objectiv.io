---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-materialize
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.materialize/
title: bach.DataFrame.materialize
---

# bach.DataFrame.materialize


#### DataFrame.materialize(node_name='manual_materialize', inplace=False, limit=None, distinct=False)
Create a copy of this DataFrame with as base_node the current DataFrame’s state.

This effectively adds a node to the underlying SqlModel graph. Generally adding nodes increases
the size of the generated SQL query. But this can be useful if the current DataFrame contains
expressions that you want to evaluate before further expressions are build on top of them. This might
make sense for very large expressions, or for non-deterministic expressions (e.g. see
`SeriesUuid.sql_gen_random_uuid()`).

TODO: a known problem is that DataFrames with ‘json’ columns cannot be fully materialized.


* **Parameters**

    
    * **node_name** – The name of the node that’s going to be created


    * **inplace** – Perform operation on self if `inplace=True`, or create a copy.


    * **limit** (*Optional**[**Any**]*) – The limit (slice, int) to apply.


    * **distinct** (*bool*) – Apply distinct statement if `distinct=True`



* **Returns**

    DataFrame with the current DataFrame’s state as base_node



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**NOTE**: Calling materialize() resets the order of the dataframe. Call [`sort_values()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.sort-values/#bach.DataFrame.sort-values) again on
the result if order is important.

<!-- !! processed by numpydoc !! -->
