---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-bfill
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.bfill/
title: bach.DataFrame.bfill
---

# bach.DataFrame.bfill


#### DataFrame.bfill(sort_by=None, ascending=True)
Fill missing values by using the next non-nullable value in each series.


* **Parameters**

    
    * **sort_by** (*Optional**[**Union**[**str**, **Sequence**[**str**]**]**]*) – series label or sequence of labels used to sort values.
    Sorting of values is needed since result might be non-deterministic, as rows with NULLs might
    yield different results affecting the values to be propagated when using a filling method.


    * **ascending** (*Union**[**bool**, **List**[**bool**]**]*) – Whether to sort ascending (True) or descending (False). If this is a list, then the
    `sort_by` must also be a list and `len(ascending) == len(sort_by)`.



* **Returns**

    a new dataframe with filled missing values.



* **Return type**

    [bach.dataframe.DataFrame](bach.DataFrame/#bach.DataFrame)


**NOTE**: sort_by is required if DataFrame has no order_by.

**WARNING**: If sort_by is non-deterministic, this operation might yield different results after
performing other operations over the resultant dataframe.

<!-- !! processed by numpydoc !! -->
