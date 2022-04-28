---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-to-pandas
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.to-pandas/
title: bach.DataFrame.to_pandas
---

# bach.DataFrame.to_pandas


#### DataFrame.to_pandas(limit=None)
Run a SQL query representing the current state of this DataFrame against the database and return the
resulting data as a Pandas DataFrame.


* **Parameters**

    **limit** (*Optional**[**Union**[**int**, **slice**]**]*) – the limit to apply, either as a max amount of rows or a slice of the data.



* **Returns**

    a pandas DataFrame.



* **Return type**

    pandas.core.frame.DataFrame


**NOTE**: This function queries the database.

<!-- !! processed by numpydoc !! -->
