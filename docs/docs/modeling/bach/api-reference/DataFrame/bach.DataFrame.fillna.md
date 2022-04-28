---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-fillna
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.fillna/
title: bach.DataFrame.fillna
---

# bach.DataFrame.fillna


#### DataFrame.fillna(\*, value=None, method=None, axis=0, sort_by=None, ascending=True)
Fill any NULL value using a method or with a given value.


* **Parameters**

    
    * **value** (*Union**[*[*Series*](../Series/bach.Series/#bach.Series)*, **int**, **numpy.int64**, **float**, **numpy.float64**, **bool**, **None**, **str**, **datetime.date**, **datetime.time**, **datetime.datetime**, **datetime.timedelta**, **numpy.timedelta64**, **uuid.UUID**, **dict**, **list**, **Dict**[**str**, **Union**[**int**, **numpy.int64**, **float**, **numpy.float64**, **bool**, **None**, **str**, **datetime.date**, **datetime.time**, **datetime.datetime**, **datetime.timedelta**, **numpy.timedelta64**, **uuid.UUID**, **dict**, **list**, *[*Series*](../Series/bach.Series/#bach.Series)*]**]**]*) – A literal/series to fill all NULL values on each series
    or a dictionary specifying which literal/series to use for each series.


    * **method** (*Optional**[**str**]*) – Method to use for filling NULL values on all DataFrame series. Supported values:
    - “ffill”/”pad”: Fill missing values by propagating the last non-nullable value in the series.
    - “bfill”/”backfill”: Fill missing values with the next non-nullable value in the series.


    * **axis** (*int*) – only `axis=0` is supported.


    * **sort_by** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – series label or sequence of labels used to sort values.
    Sorting of values is needed since result might be non-deterministic, as rows with NULLs might
    yield different results affecting the values to be propagated when using a filling method.


    * **ascending** (*Union**[**bool**, **List**[**bool**]**]*) – Whether to sort ascending (True) or descending (False). If this is a list, then the
    `sort_by` must also be a list and `len(ascending) == len(sort_by)`.



* **Returns**

    a new dataframe with filled missing values.



* **Return type**

    [DataFrame](bach.DataFrame/#bach.DataFrame)


**NOTE**: sort_by is required if method is specified and the DataFrame has no order_by.

**WARNING**: If sort_by is non-deterministic, this operation might yield different results after
performing other operations over the resultant dataframe.

<!-- !! processed by numpydoc !! -->
