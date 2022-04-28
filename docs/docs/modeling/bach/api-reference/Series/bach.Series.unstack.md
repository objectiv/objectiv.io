---
date: '2022-04-28T19:19:08.619Z'
id: bach-api-reference-series-bach-series-unstack
slug: /modeling/bach/api-reference/Series/bach.Series.unstack/
title: bach.Series.unstack
---

# bach.Series.unstack


#### Series.unstack(level=- 1, fill_value=None, aggregation='max')
Pivot a level of the index labels.

Returns a(n unsorted) DataFrame with the values of the unstacked index as columns. In case of
duplicate index values that are unstacked, `aggregation` is used to aggregate the values.

Series’ index should be of at least two levels to unstack.


* **Parameters**

    
    * **level** (*Union**[**int**, **str**]*) – selects the level of the index that is unstacked.


    * **fill_value** (*Optional**[**Union**[**int**, **float**, **str**, **uuid.UUID**]**]*) – replace missing values resulting from unstacking. Should be of same type as the
    series that is unstacked.


    * **aggregation** (*str*) – method of aggregation, in case of duplicate index values. Supports all aggregation
    methods that [`aggregate()`](/docs/modeling/bach/api-reference/Series/bach.Series.aggregate/#bach.Series.aggregate) supports.



* **Returns**

    DataFrame



* **Return type**

    [bach.dataframe.DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**NOTE**: This function queries the database.

<!-- !! processed by numpydoc !! -->
