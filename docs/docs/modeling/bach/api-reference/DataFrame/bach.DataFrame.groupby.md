---
date: '2022-04-28T19:24:58.840Z'
id: bach-api-reference-data-frame-bach-data-frame-groupby
slug: /modeling/bach/api-reference/DataFrame/bach.DataFrame.groupby/
title: bach.DataFrame.groupby
---

# bach.DataFrame.groupby


#### DataFrame.groupby(by=None)
Group by any of the series currently in this DataDrame, both from index as well as data.


* **Parameters**

    **by** (*Optional**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **Tuple**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **Tuple**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**, **...**]**]**, **...**]**, **Sequence**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*, **List**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**]**, **Tuple**[**Union**[**str**, *[*Series*](/docs/modeling/bach/api-reference/Series/bach.Series/#bach.Series)*]**, **...**]**]**]**]**]*) – The series to group by. Supported are:


    * a string containing a columnn name.


    * a series.


    * a list of strings or series. A normal group by will be created.


    * a list of (strings, series, lists). In this case a grouping list is created.


    * a tuple of (strings, series, lists). In this case a grouping set is created.




* **Returns**

    a new DataFrame object with the [`group_by`](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame.group-by/#bach.DataFrame.group-by) attribute set.



* **Return type**

    [DataFrame](/docs/modeling/bach/api-reference/DataFrame/bach.DataFrame/#bach.DataFrame)


**NOTE**: If the dataframe is already grouped, we’ll create a grouping list from the initial
grouping combined with this one.

<!-- !! processed by numpydoc !! -->
