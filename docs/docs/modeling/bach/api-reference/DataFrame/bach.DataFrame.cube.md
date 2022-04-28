---
date: '2022-04-28T14:46:08.106Z'
id: bach-api-reference-data-frame-bach-data-frame-cube
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.cube/
title: bach.DataFrame.cube
---

# bach.DataFrame.cube


#### DataFrame.cube(by)
Group by and cube over the column(s) `by`.


* **Parameters**

    **by** (*Optional**[**Union**[**str**, *[*Series*](../Series/bach.Series/#bach.Series)*, **List**[**Union**[**str**, *[*Series*](../Series/bach.Series/#bach.Series)*]**]**]**]*) – the series to group by and cube. Can be a column or index name str, a Series or a list
    of any of those. If Series are passed, they should have the same base node as the DataFrame.



* **Returns**

    a new DataFrame object with the [`group_by`](bach.DataFrame.group-by/#bach.DataFrame.group-by) attribute set.



* **Return type**

    [DataFrame](bach.DataFrame/#bach.DataFrame)


<!-- !! processed by numpydoc !! -->
