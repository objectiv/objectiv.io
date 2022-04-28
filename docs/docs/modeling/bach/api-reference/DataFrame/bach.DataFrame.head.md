---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-data-frame-bach-data-frame-head
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.head/
title: bach.DataFrame.head
---

# bach.DataFrame.head


#### DataFrame.head(n=5)
Similar to [`to_pandas()`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.to-pandas/#bach.DataFrame.to-pandas) but only returns the first `n` rows.


* **Parameters**

    **n** (*int*) – number of rows to query from database.



* **Returns**

    a pandas DataFrame.



* **Return type**

    pandas.core.frame.DataFrame


**NOTE**: This function queries the database.

<!-- !! processed by numpydoc !! -->
