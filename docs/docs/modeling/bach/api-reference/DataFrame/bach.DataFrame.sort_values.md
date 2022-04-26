---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-sort-values
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.sort-values/
title: bach.DataFrame.sort_values
---

bach.DataFrame.sort_values


#### DataFrame.sort_values(by, ascending=True)
Create a new DataFrame with the specified sorting order.

This does not modify the current DataFrame, instead it returns a new DataFrame.

The sorting will remain in the returned DataFrame as long as no operations are performed on that
frame that materially change the selected data. Operations that materially change the selected data
are for example [bach.DataFrame.groupby](#bach.DataFrame.groupby)`groupby()`, [bach.DataFrame.merge](#bach.DataFrame.merge)`merge()`, [bach.DataFrame.materialize](#bach.DataFrame.materialize)`materialize()`, and filtering out rows.
Adding or removing a column does not materially change the selected data.


* **Parameters**

    
    * **by** (*Union**[**str**, **List**[**str**]**]*) – column label or list of labels to sort by.


    * **ascending** (*Union**[**bool**, **List**[**bool**]**]*) – Whether to sort ascending (True) or descending (False). If this is a list, then the
    by must also be a list and `len(ascending) == len(by)`.



* **Returns**

    a new DataFrame with the specified ordering.



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


<!-- !! processed by numpydoc !! -->
