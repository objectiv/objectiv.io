---
date: '2022-04-26T12:27:56.237Z'
id: bach-api-reference-data-frame-bach-data-frame-sort-index
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.sort_/
title: bach.DataFrame.sort_index
---

bach.DataFrame.sort_index


#### DataFrame.sort_index(level=None, ascending=True)
Sort dataframe by index levels.


* **Parameters**

    
    * **level** (*Optional**[**Union**[**int**, **List**[**int**]**, **str**, **List**[**str**]**]**]*) – int or level name or list of ints or level names.
    If not specified, all index series are used


    * **ascending** (*Union**[**bool**, **List**[**bool**]**]*) – Whether to sort ascending (True) or descending (False). If this is a list, then the
    level must also be a list and `len(ascending) == len(level)`.



* **Returns**

    a new DataFrame with the specified ordering,
    otherwise it updates the original and returns None.



* **Return type**

    [bach.dataframe.DataFrame](#bach.DataFrame)bach.dataframe.DataFrame


<!-- !! processed by numpydoc !! -->
