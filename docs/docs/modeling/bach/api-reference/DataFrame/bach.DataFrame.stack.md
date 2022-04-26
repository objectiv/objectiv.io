---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-stack
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.stack/
title: bach.DataFrame.stack
---

bach.DataFrame.stack


#### DataFrame.stack(dropna=True)
Stacks all data_columns into a single index series.


* **Parameters**

    **dropna** (*bool*) – Whether to drop rows that contain missing values. If the caller has
    at least an index series, this might generate different combinations between
    the index and the stacked values.



* **Returns**

    a reshaped series that includes a new index (named “__stacked_index”)
    containing the caller’s column labels as values.



* **Return type**

    [bach.Series](#bach.Series)Series


**NOTE**: `level` parameter is not supported since multilevel columns are not allowed.

<!-- !! processed by numpydoc !! -->
