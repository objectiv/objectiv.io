---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-view-sql
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.view-sql/
title: bach.DataFrame.view_sql
---

# bach.DataFrame.view_sql


#### DataFrame.view_sql(limit=None)
Translate the current state of this DataFrame into a SQL query.

This includes setting all variable values that are in self.variables.


* **Parameters**

    **limit** (*Optional**[**Union**[**int**, **slice**]**]*) – the limit to apply, either as a max amount of rows or a slice of the data.



* **Returns**

    SQL query



* **Return type**

    str


<!-- !! processed by numpydoc !! -->
