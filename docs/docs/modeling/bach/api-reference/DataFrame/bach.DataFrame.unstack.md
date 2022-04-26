---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-unstack
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.unstack/
title: bach.DataFrame.unstack
---

bach.DataFrame.unstack


#### DataFrame.unstack(level=- 1, fill_value=None, aggregation='max')
Pivot a level of the index labels.

Returns a(n unsorted) DataFrame with the values of the unstacked index as columns. In case of
duplicate index values that are unstacked, aggregation is used to aggregate the values.

DataFrame’s index should be of at least two levels to unstack.


* **Parameters**

    
    * **level** (*Union**[**str**, **int**]*) – selects the level of the index that is unstacked.


    * **fill_value** (*Union**[**int**, **numpy.int64**, **float**, **numpy.float64**, **bool**, **None**, **str**, **datetime.date**, **datetime.time**, **datetime.datetime**, **datetime.timedelta**, **numpy.timedelta64**, **uuid.UUID**, **dict**, **list**]*) – replace missing values resulting from unstacking. Should be of same type as the
    series that is unstacked.


    * **aggregation** (*str*) – method of aggregation, in case of duplicate index values. Supports all aggregation
    methods that [bach.DataFrame.aggregate](#bach.DataFrame.aggregate)`aggregate()` supports.



* **Returns**

    DataFrame



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


**NOTE**: This function queries the database.

<!-- !! processed by numpydoc !! -->
